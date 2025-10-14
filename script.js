// Variables globales
let cart = [];
let products = [];
let orders = [];
let currentUser = null;
let productIdCounter = 1;
let orderIdCounter = 1;

// Inicializar datos
function initializeData() {
  products = [
    // Hamburguesas
    {
      id: productIdCounter++,
      name: "Hamburguesa Clásica",
      description: "Carne, lechuga, tomate y queso",
      price: 85.0,
      category: "hamburguesas",
      image: "burger-classic.jpg",
    },
    {
      id: productIdCounter++,
      name: "Hamburguesa Doble",
      description: "Doble carne, doble queso",
      price: 125.0,
      category: "hamburguesas",
      image: "burger-classic.jpg",
    },
    {
      id: productIdCounter++,
      name: "Hamburguesa BBQ",
      description: "Con salsa BBQ y cebolla caramelizada",
      price: 95.0,
      category: "hamburguesas",
      image: "burger-classic.jpg",
    },
    {
      id: productIdCounter++,
      name: "Hamburguesa Mexicana",
      description: "Con jalapeños, guacamole y queso fresco",
      price: 105.0,
      category: "hamburguesas",
      image: "burger-classic.jpg",
    },
    {
      id: productIdCounter++,
      name: "Hamburguesa Premium",
      description: "Carne premium con tocino y champiñones",
      price: 135.0,
      category: "hamburguesas",
      image: "burger-classic.jpg",
    },
    {
      id: productIdCounter++,
      name: "Hamburguesa Triple",
      description: "Tres capas de carne y queso",
      price: 155.0,
      category: "hamburguesas",
      image: "burger-classic.jpg",
    },

    // Hot Dogs
    {
      id: productIdCounter++,
      name: "Hot Dog Básico",
      description: "Salchicha con pan tostado",
      price: 55.0,
      category: "hotdogs",
      image: "hotdog.jpg",
    },
    {
      id: productIdCounter++,
      name: "Hot Dog con Queso",
      description: "Salchicha con queso derretido",
      price: 65.0,
      category: "hotdogs",
      image: "hotdog.jpg",
    },
    {
      id: productIdCounter++,
      name: "Hot Dog Tocino",
      description: "Salchicha envuelta en tocino",
      price: 75.0,
      category: "hotdogs",
      image: "hotdog.jpg",
    },
    {
      id: productIdCounter++,
      name: "Hot Dog Champiñones",
      description: "Con champiñones salteados",
      price: 70.0,
      category: "hotdogs",
      image: "hotdog.jpg",
    },
    {
      id: productIdCounter++,
      name: "Hot Dog Completo",
      description: "Con todas las guarniciones",
      price: 85.0,
      category: "hotdogs",
      image: "hotdog.jpg",
    },
    {
      id: productIdCounter++,
      name: "Hot Dog Picante",
      description: "Con jalapeños y salsa picante",
      price: 70.0,
      category: "hotdogs",
      image: "hotdog.jpg",
    },

    // Bebidas
    {
      id: productIdCounter++,
      name: "Refresco Coca Cola",
      description: "Coca Cola 500ml",
      price: 25.0,
      category: "bebidas",
      image: "drink.jpg",
    },
    {
      id: productIdCounter++,
      name: "Refresco Sprite",
      description: "Sprite 500ml",
      price: 25.0,
      category: "bebidas",
      image: "drink.jpg",
    },
    {
      id: productIdCounter++,
      name: "Agua Natural",
      description: "Agua purificada 500ml",
      price: 15.0,
      category: "bebidas",
      image: "drink.jpg",
    },
    {
      id: productIdCounter++,
      name: "Jugo Naranja",
      description: "Jugo natural de naranja",
      price: 35.0,
      category: "bebidas",
      image: "drink.jpg",
    },
    {
      id: productIdCounter++,
      name: "Limonada",
      description: "Limonada fresca casera",
      price: 30.0,
      category: "bebidas",
      image: "drink.jpg",
    },
    {
      id: productIdCounter++,
      name: "Batido de Fresa",
      description: "Batido de fresa con leche",
      price: 45.0,
      category: "bebidas",
      image: "drink.jpg",
    },

    // Acompañamientos
    {
      id: productIdCounter++,
      name: "Papas Fritas Pequeñas",
      description: "Papas fritas crujientes",
      price: 35.0,
      category: "acompañamientos",
      image: "fries.jpg",
    },
    {
      id: productIdCounter++,
      name: "Papas Fritas Medianas",
      description: "Porción mediana de papas",
      price: 50.0,
      category: "acompañamientos",
      image: "fries.jpg",
    },
    {
      id: productIdCounter++,
      name: "Papas Fritas Grandes",
      description: "Porción grande de papas",
      price: 65.0,
      category: "acompañamientos",
      image: "fries.jpg",
    },
    {
      id: productIdCounter++,
      name: "Papas con Cheddar",
      description: "Papas con salsa de queso",
      price: 60.0,
      category: "acompañamientos",
      image: "fries.jpg",
    },
    {
      id: productIdCounter++,
      name: "Anillos de Cebolla",
      description: "Anillos de cebolla rebozados",
      price: 55.0,
      category: "acompañamientos",
      image: "fries.jpg",
    },
    {
      id: productIdCounter++,
      name: "Papas Rellenas",
      description: "Papas rellenas de carne y queso",
      price: 75.0,
      category: "acompañamientos",
      image: "fries.jpg",
    },
  ];

  const adminUser = {
    email: "admin@snackcenter.com",
    password: "admin123",
    name: "Administrador",
    phone: "4491234567",
    address: "Aguascalientes, AGS",
    isAdmin: true,
  };

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([adminUser]));
  }

  loadFromLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("cart", JSON.stringify(cart));
  if (currentUser) {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }
}

function loadFromLocalStorage() {
  const savedProducts = localStorage.getItem("products");
  const savedOrders = localStorage.getItem("orders");
  const savedCart = localStorage.getItem("cart");
  const savedUser = localStorage.getItem("currentUser");

  if (savedProducts) products = JSON.parse(savedProducts);
  if (savedOrders) orders = JSON.parse(savedOrders);
  if (savedCart) cart = JSON.parse(savedCart);
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initializeData();
  setupEventListeners();
  updateUserUI();
});

function setupEventListeners() {
  // Splash screen
  document.querySelectorAll(".splash-tab").forEach((btn) => {
    btn.addEventListener("click", function () {
      const tab = this.dataset.tab;
      document
        .querySelectorAll(".splash-tab")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".splash-form")
        .forEach((f) => f.classList.remove("active"));
      this.classList.add("active");
      document
        .getElementById(
          "splash" + tab.charAt(0).toUpperCase() + tab.slice(1) + "Form"
        )
        .classList.add("active");
    });
  });

  document
    .getElementById("splashLoginForm")
    .addEventListener("submit", handleSplashLogin);
  document
    .getElementById("splashRegisterForm")
    .addEventListener("submit", handleSplashRegister);

  // Navigation
  document
    .getElementById("userBtnHeader")
    .addEventListener("click", toggleUserMenu);
  document
    .getElementById("cartBtnHeader")
    .addEventListener("click", openCartModal);

  document
    .getElementById("loginBtnDropdown")
    .addEventListener("click", function () {
      document.getElementById("userMenuDropdown").classList.remove("active");
      openSplashScreen("login");
    });

  document
    .getElementById("registerBtnDropdown")
    .addEventListener("click", function () {
      document.getElementById("userMenuDropdown").classList.remove("active");
      openSplashScreen("register");
    });

  document
    .getElementById("logoutBtnDropdown")
    .addEventListener("click", logout);
  document
    .getElementById("profileBtnDropdown")
    .addEventListener("click", openProfileModal);
  document
    .getElementById("ordersBtnDropdown")
    .addEventListener("click", openOrdersModal);
  document
    .getElementById("adminBtnDropdown")
    .addEventListener("click", openAdminModal);

  // Modales
  document.querySelectorAll(".close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      this.closest(".modal").classList.remove("active");
    });
  });

  window.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
      e.target.classList.remove("active");
    }
  });

  // Filtros
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      filterProducts(this.dataset.category);
    });
  });

  // Forms
  document
    .getElementById("profileForm")
    .addEventListener("submit", handleProfileUpdate);
  document
    .getElementById("productForm")
    .addEventListener("submit", handleProductSave);

  // Admin
  document
    .getElementById("addProductBtn")
    .addEventListener("click", openProductFormModal);

  document.querySelectorAll(".admin-tab").forEach((btn) => {
    btn.addEventListener("click", function () {
      const tab = this.dataset.tab;
      document
        .querySelectorAll(".admin-tab")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".admin-section")
        .forEach((s) => s.classList.remove("active"));
      this.classList.add("active");
      document
        .getElementById("admin" + tab.charAt(0).toUpperCase() + tab.slice(1))
        .classList.add("active");

      if (tab === "products") {
        renderAdminProducts();
      } else if (tab === "orders") {
        renderAdminOrders();
      }
    });
  });

  document
    .getElementById("checkoutBtnCart")
    .addEventListener("click", openCheckoutModal);
  document
    .getElementById("confirmOrderBtn")
    .addEventListener("click", confirmOrder);

  document
    .getElementById("whatsappBtn")
    .addEventListener("click", openWhatsApp);

  document
    .getElementById("printTicketBtn")
    .addEventListener("click", function () {
      window.print();
    });

  document
    .getElementById("whatsappOrderBtn")
    .addEventListener("click", sendOrderWhatsApp);
}

function showPage(pageName) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .getElementById(
      "page" + pageName.charAt(0).toUpperCase() + pageName.slice(1)
    )
    .classList.add("active");

  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");

  window.scrollTo(0, 0);
}

function handleSplashLogin(e) {
  e.preventDefault();
  const email = document.getElementById("splashLoginEmail").value;
  const password = document.getElementById("splashLoginPassword").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
    updateUserUI();
    document.getElementById("splashModal").classList.remove("active");
    document.getElementById("mainContainer").style.display = "block";
    renderProductosDestacados();
    renderProductsMenu();
    showNotification("¡Bienvenido " + user.name + "!");
    e.target.reset();
  } else {
    alert("Credenciales incorrectas");
  }
}

function handleSplashRegister(e) {
  e.preventDefault();
  const name = document.getElementById("splashRegName").value;
  const email = document.getElementById("splashRegEmail").value;
  const phone = document.getElementById("splashRegPhone").value;
  const address = document.getElementById("splashRegAddress").value;
  const password = document.getElementById("splashRegPassword").value;
  const passwordConfirm = document.getElementById(
    "splashRegPasswordConfirm"
  ).value;

  if (password !== passwordConfirm) {
    alert("Las contraseñas no coinciden");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.find((u) => u.email === email)) {
    alert("Este correo ya está registrado");
    return;
  }

  const newUser = {
    email,
    password,
    name,
    phone,
    address,
    isAdmin: false,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  currentUser = newUser;
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  updateUserUI();
  document.getElementById("splashModal").classList.remove("active");
  document.getElementById("mainContainer").style.display = "block";
  renderProductosDestacados();
  renderProductsMenu();
  showNotification("¡Cuenta creada exitosamente!");
  e.target.reset();
}

function openSplashScreen(tab) {
  document.getElementById("splashModal").classList.add("active");
  document
    .querySelectorAll(".splash-tab")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".splash-form")
    .forEach((f) => f.classList.remove("active"));
  document
    .querySelector('.splash-tab[data-tab="' + tab + '"]')
    .classList.add("active");
  document
    .getElementById(
      "splash" + tab.charAt(0).toUpperCase() + tab.slice(1) + "Form"
    )
    .classList.add("active");
}

function updateUserUI() {
  const userMenuGuest = document.querySelector(".user-menu-guest");
  const userMenuLogged = document.querySelector(".user-menu-logged");
  const userName = document.getElementById("userNameDropdown");
  const adminBtn = document.getElementById("adminBtnDropdown");

  if (currentUser) {
    userMenuGuest.style.display = "none";
    userMenuLogged.style.display = "block";
    userName.textContent = currentUser.name;

    if (currentUser.isAdmin) {
      adminBtn.style.display = "block";
    } else {
      adminBtn.style.display = "none";
    }
  } else {
    userMenuGuest.style.display = "flex";
    userMenuLogged.style.display = "none";
  }
}

function toggleUserMenu() {
  document.getElementById("userMenuDropdown").classList.toggle("active");
}

document.addEventListener("click", function (e) {
  const userMenu = document.getElementById("userMenuDropdown");
  const userBtn = document.getElementById("userBtnHeader");

  if (!userMenu.contains(e.target) && !userBtn.contains(e.target)) {
    userMenu.classList.remove("active");
  }
});

function logout() {
  currentUser = null;
  cart = [];
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cart");
  updateUserUI();
  updateCartUI();
  document.getElementById("userMenuDropdown").classList.remove("active");
  showNotification("Sesión cerrada exitosamente");
}

function renderProductosDestacados() {
  const grid = document.getElementById("productosDestacados");
  const destacados = products.slice(0, 4);

  grid.innerHTML = destacados
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image">
                <img src="assets/${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price.toFixed(
                      2
                    )}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${
                      product.id
                    })">
                        <i class="fas fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function renderProductsMenu(category = "todos") {
  const grid = document.getElementById("productsGridMenu");
  const filtered =
    category === "todos"
      ? products
      : products.filter((p) => p.category === category);

  grid.innerHTML = filtered
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image">
                <img src="assets/${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price.toFixed(
                      2
                    )}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${
                      product.id
                    })">
                        <i class="fas fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function filterProducts(category) {
  renderProductsMenu(category);
}

function addToCart(productId) {
  if (!currentUser) {
    alert("Por favor inicia sesión para agregar productos al carrito");
    openSplashScreen("login");
    return;
  }

  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  updateCartUI();
  saveToLocalStorage();
  showNotification("Producto agregado al carrito");
}

function updateCartUI() {
  const cartCount = document.querySelector(".cart-count");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  const cartItemsModal = document.getElementById("cartItemsModal");
  const cartTotalModal = document.getElementById("cartTotalModal");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartTotalModal.textContent = `${total.toFixed(2)}`;

  if (cart.length === 0) {
    cartItemsModal.innerHTML =
      '<p class="empty-cart">Tu carrito está vacío</p>';
    document.getElementById("checkoutBtnCart").disabled = true;
  } else {
    document.getElementById("checkoutBtnCart").disabled = false;
    cartItemsModal.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="assets/${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${
                          item.id
                        }, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${
                          item.id
                        }, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${
                  item.id
                })">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `
      )
      .join("");
  }
}

function updateQuantity(productId, change) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartUI();
      saveToLocalStorage();
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartUI();
  saveToLocalStorage();
  showNotification("Producto eliminado del carrito");
}

function openCartModal() {
  if (!currentUser) {
    alert("Por favor inicia sesión");
    openSplashScreen("login");
    return;
  }
  updateCartUI();
  document.getElementById("cartModal").classList.add("active");
}

function openCheckoutModal() {
  if (cart.length === 0) return;

  const checkoutItems = document.getElementById("checkoutItems");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  checkoutItems.innerHTML = cart
    .map(
      (item) => `
        <div class="checkout-item">
            <span>${item.quantity}x ${item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `
    )
    .join("");

  checkoutTotal.textContent = `${total.toFixed(2)}`;

  document.getElementById("cartModal").classList.remove("active");
  document.getElementById("checkoutModal").classList.add("active");
}

function confirmOrder() {
  const paymentMethod = document.querySelector(
    'input[name="payment"]:checked'
  ).value;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const order = {
    id: orderIdCounter++,
    userEmail: currentUser.email,
    userName: currentUser.name,
    userPhone: currentUser.phone,
    userAddress: currentUser.address,
    items: [...cart],
    total: total,
    paymentMethod: paymentMethod,
    status: "pending",
    date: new Date().toLocaleString("es-MX"),
  };

  orders.push(order);
  saveToLocalStorage();

  generateTicket(order);

  cart = [];
  updateCartUI();
  saveToLocalStorage();

  document.getElementById("checkoutModal").classList.remove("active");
  document.getElementById("ticketModal").classList.add("active");

  showNotification("¡Pedido realizado exitosamente!");
}

function generateTicket(order) {
  const ticketContent = document.getElementById("ticketContent");
  ticketContent.innerHTML = `
        <div class="ticket-header">
            <h2>SNACK CENTER</h2>
            <p>Aguascalientes, México</p>
        </div>
        <div class="ticket-info">
            <p><strong>Pedido:</strong> <span>#${order.id}</span></p>
            <p><strong>Fecha:</strong> <span>${order.date}</span></p>
            <p><strong>Cliente:</strong> <span>${order.userName}</span></p>
            <p><strong>Dirección:</strong> <span>${order.userAddress}</span></p>
            <p><strong>Teléfono:</strong> <span>${order.userPhone}</span></p>
        </div>
        <div class="ticket-items">
            <h3>Productos</h3>
            ${order.items
              .map(
                (item) => `
                <div class="ticket-item">
                    <span>${item.quantity}x ${item.name}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `
              )
              .join("")}
        </div>
        <div class="ticket-total">
            <span>TOTAL</span>
            <span>${order.total.toFixed(2)}</span>
        </div>
        <div class="ticket-footer">
            <p>¡Gracias por tu preferencia!</p>
            <p>Tu pedido llegará en 30-45 minutos</p>
        </div>
    `;

  window.lastOrder = order;
}

function sendOrderWhatsApp() {
  const order = window.lastOrder;
  if (!order) return;

  let message = `*NUEVO PEDIDO #${order.id}*\n\n`;
  message += `*Cliente:* ${order.userName}\n`;
  message += `*Teléfono:* ${order.userPhone}\n`;
  message += `*Dirección:* ${order.userAddress}\n\n`;
  message += `*PRODUCTOS:*\n`;
  order.items.forEach((item) => {
    message += `${item.quantity}x ${item.name} - ${(
      item.price * item.quantity
    ).toFixed(2)}\n`;
  });
  message += `\n*TOTAL: ${order.total.toFixed(2)}*`;

  const whatsappNumber = "5214491234567";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}

function openWhatsApp() {
  const whatsappNumber = "5214491234567";
  const message = "¡Hola! Me gustaría hacer una consulta sobre sus productos.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}

function openProfileModal() {
  if (!currentUser) return;

  document.getElementById("profileName").value = currentUser.name;
  document.getElementById("profileEmail").value = currentUser.email;
  document.getElementById("profilePhone").value = currentUser.phone;
  document.getElementById("profileAddress").value = currentUser.address;

  document.getElementById("profileModal").classList.add("active");
  document.getElementById("userMenuDropdown").classList.remove("active");
}

function handleProfileUpdate(e) {
  e.preventDefault();

  currentUser.name = document.getElementById("profileName").value;
  currentUser.email = document.getElementById("profileEmail").value;
  currentUser.phone = document.getElementById("profilePhone").value;
  currentUser.address = document.getElementById("profileAddress").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userIndex = users.findIndex((u) => u.email === currentUser.email);
  if (userIndex !== -1) {
    users[userIndex] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));
  }
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  updateUserUI();
  document.getElementById("profileModal").classList.remove("active");
  showNotification("Perfil actualizado exitosamente");
}

function openOrdersModal() {
  if (!currentUser) return;

  const userOrders = orders.filter((o) => o.userEmail === currentUser.email);
  const ordersList = document.getElementById("ordersList");

  if (userOrders.length === 0) {
    ordersList.innerHTML =
      '<p style="text-align: center; color: #999;">No tienes pedidos realizados</p>';
  } else {
    ordersList.innerHTML = userOrders
      .map(
        (order) => `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <div class="order-number">Pedido #${order.id}</div>
                        <div class="order-date">${order.date}</div>
                    </div>
                    <span class="order-status ${order.status}">${getStatusText(
          order.status
        )}</span>
                </div>
                <div class="order-items">
                    ${order.items
                      .map(
                        (item) => `
                        <div class="order-item">
                            <span>${item.quantity}x ${item.name}</span>
                            <span>${(item.price * item.quantity).toFixed(
                              2
                            )}</span>
                        </div>
                    `
                      )
                      .join("")}
                </div>
                <div class="order-footer">
                    <span class="order-total">Total: ${order.total.toFixed(
                      2
                    )}</span>
                </div>
            </div>
        `
      )
      .join("");
  }

  document.getElementById("ordersModal").classList.add("active");
  document.getElementById("userMenuDropdown").classList.remove("active");
}

function getStatusText(status) {
  const statusMap = {
    pending: "Pendiente",
    confirmed: "Confirmado",
    delivered: "Entregado",
  };
  return statusMap[status] || status;
}

function openAdminModal() {
  if (!currentUser || !currentUser.isAdmin) return;

  renderAdminProducts();
  document.getElementById("adminModal").classList.add("active");
  document.getElementById("userMenuDropdown").classList.remove("active");
}

function renderAdminProducts() {
  const adminProductsList = document.getElementById("adminProductsList");

  if (products.length === 0) {
    adminProductsList.innerHTML =
      '<p style="text-align: center; color: #999;">No hay productos</p>';
    return;
  }

  adminProductsList.innerHTML = products
    .map(
      (product) => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p><small>Categoría: ${product.category}</small></p>
            </div>
            <span class="admin-item-price">${product.price.toFixed(2)}</span>
            <div class="admin-item-actions">
                <button class="btn-edit" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-delete" onclick="deleteProduct(${
                  product.id
                })">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

function renderAdminOrders() {
  const adminOrdersList = document.getElementById("adminOrdersList");

  if (orders.length === 0) {
    adminOrdersList.innerHTML =
      '<p style="text-align: center; color: #999;">No hay pedidos</p>';
    return;
  }

  adminOrdersList.innerHTML = orders
    .map(
      (order) => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <div class="order-number">Pedido #${order.id}</div>
                    <div class="order-date">${order.date}</div>
                    <div><strong>Cliente:</strong> ${order.userName}</div>
                    <div><strong>Teléfono:</strong> ${order.userPhone}</div>
                </div>
                <div>
                    <span class="order-status ${order.status}">${getStatusText(
        order.status
      )}</span>
                    <select onchange="updateOrderStatus(${
                      order.id
                    }, this.value)" style="margin-top: 0.5rem; padding: 0.5rem;">
                        <option value="">Cambiar estado</option>
                        <option value="pending">Pendiente</option>
                        <option value="confirmed">Confirmado</option>
                        <option value="delivered">Entregado</option>
                    </select>
                </div>
            </div>
            <div class="order-items">
                ${order.items
                  .map(
                    (item) => `
                    <div class="order-item">
                        <span>${item.quantity}x ${item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `
                  )
                  .join("")}
            </div>
            <div class="order-footer">
                <span class="order-total">Total: ${order.total.toFixed(
                  2
                )}</span>
            </div>
        </div>
    `
    )
    .join("");
}

function updateOrderStatus(orderId, newStatus) {
  if (!newStatus) return;

  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveToLocalStorage();
    renderAdminOrders();
    showNotification("Estado actualizado");
  }
}

function openProductFormModal(product = null) {
  document.getElementById("productFormTitle").textContent = product
    ? "Editar Producto"
    : "Agregar Producto";

  if (product) {
    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("productDescription").value = product.description;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productImage").value = product.image || "";
  } else {
    document.getElementById("productForm").reset();
    document.getElementById("productId").value = "";
  }

  document.getElementById("productFormModal").classList.add("active");
}

function editProduct(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    openProductFormModal(product);
  }
}

function deleteProduct(productId) {
  if (!confirm("¿Estás seguro?")) return;

  products = products.filter((p) => p.id !== productId);
  saveToLocalStorage();
  renderProductsMenu();
  renderAdminProducts();
  showNotification("Producto eliminado");
}

function handleProductSave(e) {
  e.preventDefault();

  const id = document.getElementById("productId").value;
  const productData = {
    name: document.getElementById("productName").value,
    description: document.getElementById("productDescription").value,
    price: parseFloat(document.getElementById("productPrice").value),
    category: document.getElementById("productCategory").value,
    image: document.getElementById("productImage").value,
  };

  if (id) {
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
      Object.assign(product, productData);
    }
  } else {
    productData.id = productIdCounter++;
    products.push(productData);
  }

  saveToLocalStorage();
  renderProductsMenu();
  renderProductosDestacados();
  renderAdminProducts();
  document.getElementById("productFormModal").classList.remove("active");
  showNotification(id ? "Actualizado" : "Agregado");
  e.target.reset();
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--success-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

console.log("Snack Center inicializado");
