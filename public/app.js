const fallbackProducts = [
  {
    id: "iphone-16-pro",
    name: "Apple iPhone 16 Pro",
    category: "Electronics",
    originalPrice: 149999,
    price: 134999,
    discount: "10% OFF",
    rating: 5,
    reviews: 1254,
    badge: "Flagship",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85",
    description: "Titanium design, pro camera system, and advanced mobile performance.",
    details: ["A18 Pro performance", "Pro camera system", "All-day battery life"],
    stock: 18
  },
  {
    id: "galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    category: "Electronics",
    originalPrice: 139999,
    price: 124999,
    discount: "11% OFF",
    rating: 5,
    reviews: 986,
    badge: "AI Pick",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=85",
    description: "A premium Android flagship with a vivid display and pro-grade zoom.",
    details: ["Dynamic AMOLED display", "AI camera tools", "S Pen productivity"],
    stock: 16
  },
  {
    id: "sony-xm5",
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "Accessories",
    originalPrice: 34999,
    price: 29999,
    discount: "14% OFF",
    rating: 5,
    reviews: 1876,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=85",
    description: "Industry-leading noise cancellation with studio-quality wireless sound.",
    details: ["Adaptive noise cancelling", "30-hour battery", "Soft-fit design"],
    stock: 32
  },
  {
    id: "apple-watch-10",
    name: "Apple Watch Series 10",
    category: "Accessories",
    originalPrice: 49999,
    price: 44999,
    discount: "10% OFF",
    rating: 5,
    reviews: 763,
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=85",
    description: "A refined smartwatch for fitness, calls, health insights, and daily focus.",
    details: ["Advanced health tracking", "Bright display", "Fast charging"],
    stock: 24
  },
  {
    id: "nike-air-max",
    name: "Nike Air Max Sneakers",
    category: "Footwear",
    originalPrice: 12999,
    price: 9999,
    discount: "23% OFF",
    rating: 5,
    reviews: 2103,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description: "Iconic cushioning, modern comfort, and statement streetwear style.",
    details: ["Air cushioning", "Breathable upper", "Durable rubber outsole"],
    stock: 44
  },
  {
    id: "macbook-pro-m4",
    name: "MacBook Pro M4",
    category: "Electronics",
    originalPrice: 219999,
    price: 199999,
    discount: "9% OFF",
    rating: 5,
    reviews: 564,
    badge: "Pro Choice",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
    description: "A high-performance laptop built for creators, coders, and power users.",
    details: ["M4 chip", "Liquid Retina display", "Long battery life"],
    stock: 11
  },
  {
    id: "canon-eos-r6",
    name: "Canon EOS R6 Camera",
    category: "Electronics",
    originalPrice: 189999,
    price: 174999,
    discount: "8% OFF",
    rating: 5,
    reviews: 432,
    badge: "Creator Gear",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85",
    description: "Mirrorless camera quality for cinematic video and crisp photography.",
    details: ["Full-frame sensor", "4K video", "Fast autofocus"],
    stock: 8
  },
  {
    id: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S Mouse",
    category: "Accessories",
    originalPrice: 11999,
    price: 9999,
    discount: "17% OFF",
    rating: 5,
    reviews: 1245,
    badge: "Work Essential",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
    description: "An ergonomic productivity mouse with quiet clicks and precise tracking.",
    details: ["8K DPI tracking", "Quiet clicks", "Multi-device control"],
    stock: 39
  }
];

fallbackProducts.push(
  {
    id: "leather-tote",
    name: "Milano Leather Tote",
    category: "Fashion",
    originalPrice: 18999,
    price: 14999,
    discount: "21% OFF",
    rating: 4.8,
    reviews: 689,
    badge: "Luxury Edit",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
    description: "A structured premium tote crafted for workdays, travel, and refined styling.",
    details: ["Full-grain finish", "Laptop-friendly", "Magnetic closure"],
    stock: 21
  },
  {
    id: "linen-blazer",
    name: "Tailored Linen Blazer",
    category: "Fashion",
    originalPrice: 9999,
    price: 7499,
    discount: "25% OFF",
    rating: 4.7,
    reviews: 842,
    badge: "Editor's Pick",
    image: "https://images.unsplash.com/photo-1506629905607-d9f297d6205c?auto=format&fit=crop&w=900&q=85",
    description: "A breathable tailored blazer with a relaxed luxury silhouette.",
    details: ["Premium linen blend", "Soft lining", "Modern slim fit"],
    stock: 27
  },
  {
    id: "silk-dress",
    name: "Noir Satin Evening Dress",
    category: "Fashion",
    originalPrice: 15999,
    price: 11999,
    discount: "25% OFF",
    rating: 4.9,
    reviews: 521,
    badge: "Occasion Wear",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85",
    description: "An elegant satin dress designed for premium evening styling.",
    details: ["Fluid satin drape", "Minimal silhouette", "Comfort stretch"],
    stock: 19
  },
  {
    id: "adidas-ultraboost",
    name: "Adidas Ultraboost Light",
    category: "Footwear",
    originalPrice: 17999,
    price: 13999,
    discount: "22% OFF",
    rating: 4.8,
    reviews: 1568,
    badge: "Runner's Choice",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",
    description: "Responsive running shoes with lightweight cushioning and breathable support.",
    details: ["Boost cushioning", "Primeknit upper", "Road-ready traction"],
    stock: 35
  },
  {
    id: "chelsea-boots",
    name: "Alden Chelsea Boots",
    category: "Footwear",
    originalPrice: 14999,
    price: 11999,
    discount: "20% OFF",
    rating: 4.6,
    reviews: 447,
    badge: "Premium Leather",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=85",
    description: "Polished leather boots with a timeless profile and comfortable sole.",
    details: ["Genuine leather", "Elastic side panels", "Cushioned footbed"],
    stock: 23
  },
  {
    id: "marble-lamp",
    name: "Aurora Marble Table Lamp",
    category: "Home Decor",
    originalPrice: 8999,
    price: 6499,
    discount: "28% OFF",
    rating: 4.8,
    reviews: 377,
    badge: "Home Luxe",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    description: "A sculptural table lamp that brings warm ambient light to modern interiors.",
    details: ["Marble base", "Warm LED glow", "Premium fabric shade"],
    stock: 29
  },
  {
    id: "velvet-chair",
    name: "Velvet Accent Lounge Chair",
    category: "Home Decor",
    originalPrice: 32999,
    price: 27999,
    discount: "15% OFF",
    rating: 4.7,
    reviews: 296,
    badge: "Statement Piece",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=85",
    description: "A plush accent chair with rich texture and elegant living-room presence.",
    details: ["Velvet upholstery", "Solid wood legs", "Deep comfort seat"],
    stock: 12
  },
  {
    id: "ceramic-vase-set",
    name: "Nordic Ceramic Vase Set",
    category: "Home Decor",
    originalPrice: 5999,
    price: 4499,
    discount: "25% OFF",
    rating: 4.6,
    reviews: 618,
    badge: "Decor Favorite",
    image: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=900&q=85",
    description: "Minimal ceramic vases for shelves, dining consoles, and styled corners.",
    details: ["Set of 3", "Matte ceramic", "Hand-finished texture"],
    stock: 48
  },
  {
    id: "dyson-airwrap",
    name: "Dyson Airwrap Multi-Styler",
    category: "Beauty",
    originalPrice: 56900,
    price: 49900,
    discount: "12% OFF",
    rating: 4.9,
    reviews: 934,
    badge: "Beauty Tech",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=85",
    description: "A premium styling system for curls, waves, smoothing, and salon-like finish.",
    details: ["Multiple attachments", "Low heat styling", "Smooth finish"],
    stock: 14
  },
  {
    id: "luxury-skincare",
    name: "Glow Ritual Skincare Set",
    category: "Beauty",
    originalPrice: 7999,
    price: 5999,
    discount: "25% OFF",
    rating: 4.8,
    reviews: 1118,
    badge: "Clean Beauty",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    description: "A curated skincare set for hydrated, fresh, camera-ready skin.",
    details: ["Clean ingredients", "Hydrating serum", "Daily moisturizer"],
    stock: 52
  },
  {
    id: "perfume-noir",
    name: "Maison Noir Eau de Parfum",
    category: "Beauty",
    originalPrice: 12999,
    price: 9999,
    discount: "23% OFF",
    rating: 4.7,
    reviews: 723,
    badge: "Signature Scent",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
    description: "A sophisticated fragrance with warm woods, amber, and soft florals.",
    details: ["Long-lasting scent", "Luxury glass bottle", "Evening-ready notes"],
    stock: 31
  },
  {
    id: "yoga-mat-pro",
    name: "Manduka Pro Yoga Mat",
    category: "Sports",
    originalPrice: 11999,
    price: 8999,
    discount: "25% OFF",
    rating: 4.8,
    reviews: 807,
    badge: "Studio Grade",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=900&q=85",
    description: "A dense, supportive yoga mat for daily practice and studio training.",
    details: ["Non-slip texture", "Dense support", "Easy-clean surface"],
    stock: 43
  },
  {
    id: "garmin-forerunner",
    name: "Garmin Forerunner GPS Watch",
    category: "Sports",
    originalPrice: 42999,
    price: 36999,
    discount: "14% OFF",
    rating: 4.9,
    reviews: 682,
    badge: "Training Pro",
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=900&q=85",
    description: "Advanced GPS tracking for runners, cyclists, and performance athletes.",
    details: ["GPS tracking", "Training insights", "Long battery life"],
    stock: 17
  },
  {
    id: "boxing-gloves",
    name: "Everlast Elite Boxing Gloves",
    category: "Sports",
    originalPrice: 6999,
    price: 4999,
    discount: "29% OFF",
    rating: 4.6,
    reviews: 509,
    badge: "Power Gear",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=85",
    description: "Durable training gloves with wrist support and impact protection.",
    details: ["Padded knuckles", "Secure wrist strap", "Training-ready build"],
    stock: 37
  }
);

const categories = [
  {
    name: "Electronics",
    text: "Flagship phones, laptops, cameras",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Fashion",
    text: "Premium essentials and seasonal fits",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Footwear",
    text: "Sneakers and elevated daily comfort",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Accessories",
    text: "Wearables, audio, bags, and more",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Home Decor",
    text: "Modern pieces for refined spaces",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Beauty",
    text: "Clean beauty and grooming picks",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Sports",
    text: "Performance gear and active lifestyle",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=85"
  }
];

const state = {
  products: [],
  category: "All",
  search: "",
  cart: JSON.parse(localStorage.getItem("blinkcart-cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("blinkcart-wishlist") || "[]")
};

const rupee = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

const productGrid = document.querySelector("#productGrid");
const categoryGrid = document.querySelector("#categoryGrid");
const categoryTabs = document.querySelector("#categoryTabs");
const searchInput = document.querySelector("#searchInput");
const cartCount = document.querySelector("#cartCount");
const cartDrawer = document.querySelector("#cartDrawer");
const overlay = document.querySelector("#overlay");
const cartItems = document.querySelector("#cartItems");
const cartTotals = document.querySelector("#cartTotals");
const orderStatus = document.querySelector("#orderStatus");
const productDialog = document.querySelector("#productDialog");
const dialogContent = document.querySelector("#dialogContent");

function persist() {
  localStorage.setItem("blinkcart-cart", JSON.stringify(state.cart));
  localStorage.setItem("blinkcart-wishlist", JSON.stringify(state.wishlist));
}

function productById(id) {
  return state.products.find(product => product.id === id);
}

function cartLines() {
  return state.cart
    .map(item => {
      const product = productById(item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);
}

function totals() {
  const subtotal = cartLines().reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal === 0 || subtotal >= 50000 ? 0 : 499;
  const discount = subtotal > 200000 ? 5000 : 0;
  const total = Math.max(subtotal + delivery - discount, 0);
  return { subtotal, delivery, discount, total };
}

function stars(rating) {
  return "★".repeat(Math.round(rating)).padEnd(5, "☆");
}

function filteredProducts() {
  return state.products.filter(product => {
    const categoryMatch = state.category === "All" || product.category === state.category;
    const text = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return categoryMatch && text.includes(state.search.toLowerCase());
  });
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map(category => `
    <article class="category-card">
      <img src="${category.image}" alt="${category.name}">
      <div>
        <h3>${category.name}</h3>
        <p>${category.text}</p>
      </div>
    </article>
  `).join("");

  const tabs = ["All", ...new Set(state.products.map(product => product.category))];
  categoryTabs.innerHTML = tabs.map(category => `
    <button class="${state.category === category ? "active" : ""}" type="button" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function productCard(product) {
  const liked = state.wishlist.includes(product.id);
  return `
    <article class="product-card">
      <div class="product-image">
        <span class="discount-badge">${product.discount}</span>
        <button class="icon-button wishlist" type="button" data-wishlist="${product.id}" aria-label="Add ${product.name} to wishlist">
          ${liked ? "♥" : "♡"}
        </button>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-content">
        <div class="product-topline">
          <span>${product.badge}</span>
          <span>${product.category}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="rating">${stars(product.rating)} <span>(${product.reviews.toLocaleString("en-IN")} reviews)</span></div>
        <div class="price-row">
          <span class="sale-price">${rupee.format(product.price)}</span>
          <span class="old-price">${rupee.format(product.originalPrice)}</span>
        </div>
        <div class="product-actions">
          <button class="details-button" type="button" data-detail="${product.id}">View Details</button>
          <button class="add-button" type="button" data-add="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const products = filteredProducts();
  productGrid.innerHTML = products.length
    ? products.map(productCard).join("")
    : `<p class="status-message">No premium products match your search.</p>`;
}

function renderMiniLists() {
  const lists = [
    ["#trendingList", state.products.slice(0, 5)],
    ["#bestSellerList", [...state.products].sort((a, b) => b.reviews - a.reviews).slice(0, 5)],
    ["#arrivalList", state.products.slice(-5)]
  ];

  lists.forEach(([selector, products]) => {
    document.querySelector(selector).innerHTML = products.map(product => `
      <article class="mini-card">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <span>${product.discount} · ${product.reviews.toLocaleString("en-IN")} reviews</span>
          <strong>${rupee.format(product.price)}</strong>
        </div>
      </article>
    `).join("");
  });
}

function summaryRows() {
  const { subtotal, delivery, discount, total } = totals();
  return `
    <div class="summary-row"><span>Subtotal</span><strong>${rupee.format(subtotal)}</strong></div>
    <div class="summary-row"><span>Delivery</span><strong>${delivery ? rupee.format(delivery) : "Free"}</strong></div>
    <div class="summary-row"><span>Member discount</span><strong>${discount ? `-${rupee.format(discount)}` : rupee.format(0)}</strong></div>
    <div class="summary-row total"><span>Total</span><strong>${rupee.format(total)}</strong></div>
  `;
}

function renderCart() {
  const lines = cartLines();
  const count = lines.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
  cartItems.innerHTML = lines.length
    ? lines.map(item => `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${rupee.format(item.price)} each</p>
        </div>
        <div class="qty-controls">
          <button type="button" data-decrease="${item.id}">-</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-increase="${item.id}">+</button>
        </div>
      </article>
    `).join("")
    : `<p class="status-message">Your shopping bag is empty. Add a premium product to begin.</p>`;
  cartTotals.innerHTML = summaryRows();
  persist();
}

function addToCart(id) {
  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.quantity = Math.min(existing.quantity + 1, 10);
  } else {
    state.cart.push({ id, quantity: 1 });
  }
  renderCart();
  toggleCart(true);
}

function changeQuantity(id, amount) {
  const item = state.cart.find(entry => entry.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(entry => entry.id !== id);
  }
  renderCart();
}

function toggleWishlist(id) {
  state.wishlist = state.wishlist.includes(id)
    ? state.wishlist.filter(entry => entry !== id)
    : [...state.wishlist, id];
  persist();
  renderProducts();
}

function toggleCart(open) {
  cartDrawer.classList.toggle("open", open);
  cartDrawer.setAttribute("aria-hidden", String(!open));
  overlay.classList.toggle("show", open);
}

function showDetails(id) {
  const product = productById(id);
  if (!product) return;

  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <img src="${product.image}" alt="${product.name}">
      <div class="dialog-copy">
        <p class="eyebrow">${product.category} / ${product.badge}</p>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="rating">${stars(product.rating)} <span>(${product.reviews.toLocaleString("en-IN")} reviews)</span></div>
        <ul class="detail-list">
          ${product.details.map(detail => `<li>${detail}</li>`).join("")}
        </ul>
        <div class="price-row">
          <span class="sale-price">${rupee.format(product.price)}</span>
          <span class="old-price">${rupee.format(product.originalPrice)}</span>
        </div>
        <button class="primary-button wide" type="button" data-add="${product.id}">Add to Cart</button>
      </div>
    </div>
  `;
  productDialog.showModal();
}

async function placeOrder() {
  const lines = cartLines();
  if (!lines.length) {
    orderStatus.textContent = "Add at least one product before placing an order.";
    return;
  }

  orderStatus.textContent = "Processing your premium order...";
  const orderId = `BC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const successMessage = `✓ Order Confirmed
Thank you for your purchase! Your products will be delivered soon.
Order ID: ${orderId}
Estimated Delivery: ${formattedDeliveryDate}`;

  try {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: state.cart })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    orderStatus.textContent = successMessage;
  } catch (error) {
    orderStatus.textContent = successMessage;
  }
}

function updateCountdown() {
  const now = new Date();
  const target = new Date(now);
  target.setHours(23, 59, 59, 999);
  const distance = Math.max(target - now, 0);
  const values = [
    Math.floor(distance / (1000 * 60 * 60 * 24)),
    Math.floor((distance / (1000 * 60 * 60)) % 24),
    Math.floor((distance / (1000 * 60)) % 60),
    Math.floor((distance / 1000) % 60)
  ];

  document.querySelectorAll("#countdown strong").forEach((item, index) => {
    item.textContent = String(values[index]).padStart(2, "0");
  });
}

async function loadProducts() {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) throw new Error("Products unavailable");
    state.products = await response.json();
  } catch (error) {
    state.products = fallbackProducts;
  }
}

document.querySelector("#openCart").addEventListener("click", () => toggleCart(true));
document.querySelector("#closeCart").addEventListener("click", () => toggleCart(false));
overlay.addEventListener("click", () => toggleCart(false));
document.querySelector("#placeOrder").addEventListener("click", placeOrder);
document.querySelector("#closeDialog").addEventListener("click", () => productDialog.close());
document.querySelector("#wishlistButton").addEventListener("click", () => {
  alert(`${state.wishlist.length} product${state.wishlist.length === 1 ? "" : "s"} saved to wishlist.`);
});
document.querySelector("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  event.currentTarget.reset();
  alert("You are subscribed to BlinkCart private drops.");
});

searchInput.addEventListener("input", event => {
  state.search = event.target.value;
  renderProducts();
});

categoryTabs.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderCategories();
  renderProducts();
});

document.body.addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  const detail = event.target.closest("[data-detail]");
  const increase = event.target.closest("[data-increase]");
  const decrease = event.target.closest("[data-decrease]");
  const wishlist = event.target.closest("[data-wishlist]");

  if (add) addToCart(add.dataset.add);
  if (detail) showDetails(detail.dataset.detail);
  if (increase) changeQuantity(increase.dataset.increase, 1);
  if (decrease) changeQuantity(decrease.dataset.decrease, -1);
  if (wishlist) toggleWishlist(wishlist.dataset.wishlist);
});

async function init() {
  await loadProducts();
  renderCategories();
  renderProducts();
  renderMiniLists();
  renderCart();
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

init();
