const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");
const DATA_DIR = path.join(__dirname, "data");
const PRODUCTS_FILE = path.join(DATA_DIR, "products.json");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const ORDERS_FILE = path.join(DATA_DIR, "orders.json");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", chunk => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy();
        reject(new Error("Request body is too large."));
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error("Invalid JSON body."));
      }
    });
  });
}

function publicFilePath(urlPath) {
  const safePath = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(PUBLIC_DIR, safePath === "/" ? "index.html" : safePath);
  return filePath.startsWith(PUBLIC_DIR) ? filePath : path.join(PUBLIC_DIR, "index.html");
}

function calculateOrder(cartItems, products) {
  return cartItems.map(item => {
    const product = products.find(candidate => candidate.id === item.id);
    if (!product) {
      throw new Error("A product in your cart is no longer available.");
    }

    const quantity = Number(item.quantity);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
      throw new Error("Each item quantity must be between 1 and 10.");
    }

    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      lineTotal: Number((product.price * quantity).toFixed(2))
    };
  });
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  const [salt, hash] = storedHash.split(":");
  return hashPassword(password, salt) === `${salt}:${hash}`;
}

async function handleApi(request, response, pathname) {
  const products = readJson(PRODUCTS_FILE, []);

  if (request.method === "GET" && pathname === "/api/products") {
    sendJson(response, 200, products);
    return;
  }

  if (request.method === "GET" && pathname.startsWith("/api/products/")) {
    const id = pathname.split("/").pop();
    const product = products.find(item => item.id === id);
    sendJson(response, product ? 200 : 404, product || { message: "Product not found." });
    return;
  }

  if (request.method === "POST" && pathname === "/api/register") {
    const body = await readBody(request);
    const users = readJson(USERS_FILE, []);
    const email = String(body.email || "").trim().toLowerCase();
    const name = String(body.name || "").trim();
    const password = String(body.password || "");

    if (!name || !email.includes("@") || password.length < 6) {
      sendJson(response, 400, { message: "Enter a name, valid email, and password with 6+ characters." });
      return;
    }

    if (users.some(user => user.email === email)) {
      sendJson(response, 409, { message: "This email is already registered." });
      return;
    }

    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      passwordHash: hashPassword(password),
      createdAt: new Date().toISOString()
    };
    users.push(user);
    writeJson(USERS_FILE, users);
    sendJson(response, 201, { id: user.id, name: user.name, email: user.email });
    return;
  }

  if (request.method === "POST" && pathname === "/api/login") {
    const body = await readBody(request);
    const users = readJson(USERS_FILE, []);
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    const user = users.find(candidate => candidate.email === email);

    if (!user || !verifyPassword(password, user.passwordHash)) {
      sendJson(response, 401, { message: "Invalid email or password." });
      return;
    }

    sendJson(response, 200, { id: user.id, name: user.name, email: user.email });
    return;
  }

  if (request.method === "POST" && pathname === "/api/orders") {
    const body = await readBody(request);
    const cartItems = Array.isArray(body.items) ? body.items : [];

    if (!cartItems.length) {
      sendJson(response, 400, { message: "Your cart is empty." });
      return;
    }

    try {
      const items = calculateOrder(cartItems, products);
      const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
      const delivery = subtotal === 0 || subtotal >= 50000 ? 0 : 499;
      const discount = subtotal > 200000 ? 5000 : 0;
      const total = Number((subtotal + delivery - discount).toFixed(2));
      const order = {
        id: `ORD-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
        customer: body.customer || null,
        items,
        subtotal: Number(subtotal.toFixed(2)),
        delivery,
        discount,
        total,
        status: "Processing",
        eta: "2-4 business days",
        createdAt: new Date().toISOString()
      };

      const orders = readJson(ORDERS_FILE, []);
      orders.unshift(order);
      writeJson(ORDERS_FILE, orders);
      sendJson(response, 201, order);
    } catch (error) {
      sendJson(response, 400, { message: error.message });
    }
    return;
  }

  sendJson(response, 404, { message: "API route not found." });
}

const server = http.createServer(async (request, response) => {
  const { pathname } = new URL(request.url, `http://${request.headers.host}`);

  try {
    if (pathname.startsWith("/api/")) {
      await handleApi(request, response, pathname);
      return;
    }

    let filePath = publicFilePath(pathname);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(PUBLIC_DIR, "index.html");
    }

    const extension = path.extname(filePath);
    response.writeHead(200, { "Content-Type": mimeTypes[extension] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(response);
  } catch (error) {
    sendJson(response, 500, { message: error.message || "Server error." });
  }
});

server.listen(PORT, () => {
  console.log(`Store running at http://localhost:${PORT}`);
});
