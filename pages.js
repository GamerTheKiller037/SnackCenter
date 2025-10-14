// ==================== FUNCIÓN PRINCIPAL ====================
function loadPageContent(page) {
  if (page === "inicio") {
    loadInicio();
  } else if (page === "menu") {
    loadMenu();
  } else if (page === "contacto") {
    loadContacto();
  }
}

// ==================== PÁGINA INICIO ====================
function loadInicio() {
  const pageInicio = document.getElementById("pageInicio");
  if (!pageInicio) return;

  pageInicio.innerHTML = `
    <section class="hero-section" style="background-image: url('assets/hero-banner.jpg')">
      <div class="hero-overlay">
        <div class="container">
          <div class="hero-content">
            <h2>SNACK CENTER</h2>
            <p>La mejor comida rápida de Aguascalientes</p>
            <div class="hero-buttons">
              <button class="btn-primary btn-large" onclick="showPage('menu'); return false;">
                Ver Menú
              </button>
              <button class="btn-primary btn-large" onclick="showPage('contacto'); return false;">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="productos-destacados">
      <div class="container">
        <h2 class="section-title">Productos Destacados</h2>
        <div class="productos-grid" id="productosDestacados">
          <!-- Se llena dinámicamente -->
        </div>
        <div class="ver-todos-container">
          <button class="btn-ver-todos" onclick="showPage('menu'); return false;">
            Ver Todos los Productos <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h3>¿Listo para ordenar?</h3>
          <p>
            Haz tu pedido ahora y disfruta de la mejor comida rápida de
            Aguascalientes
          </p>
          <button class="btn-cta" onclick="showPage('menu'); return false;">
            Ordenar Ahora <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  `;
  renderProductosDestacados();
}

function renderProductosDestacados() {
  const grid = document.getElementById("productosDestacados");
  if (!grid) return;

  const destacados = products.slice(0, 3);

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
                    <span class="product-price">$${product.price.toFixed(
                      2
                    )}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${
                      product.id
                    })">
                        <i class="fas fa-cart-plus"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// ==================== PÁGINA MENÚ ====================
function loadMenu() {
  const pageMenu = document.getElementById("pageMenu");
  if (!pageMenu) return;

  pageMenu.innerHTML = `
    <section class="menu-section">
      <div class="container">
        <h2 class="section-title">Nuestro Menú</h2>

        <div class="category-filters">
          <button class="filter-btn active" data-category="todos" onclick="filterMenuProducts('todos'); return false;">
            Todos
          </button>
          <button class="filter-btn" data-category="hamburguesas" onclick="filterMenuProducts('hamburguesas'); return false;">
            Hamburguesas
          </button>
          <button class="filter-btn" data-category="hotdogs" onclick="filterMenuProducts('hotdogs'); return false;">
            Hot Dogs
          </button>
          <button class="filter-btn" data-category="bebidas" onclick="filterMenuProducts('bebidas'); return false;">
            Bebidas
          </button>
          <button class="filter-btn" data-category="acompañamientos" onclick="filterMenuProducts('acompañamientos'); return false;">
            Acompañamientos
          </button>
        </div>

        <div class="products-grid" id="productsGridMenu">
          <!-- Se llena dinámicamente -->
        </div>
      </div>
    </section>
  `;

  // Renderizar productos inmediatamente
  setTimeout(() => {
    renderMenuProducts("todos");
  }, 10);
}

function renderMenuProducts(category = "todos") {
  const grid = document.getElementById("productsGridMenu");
  if (!grid) return;

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
                    <span class="product-price">$${product.price.toFixed(
                      2
                    )}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${
                      product.id
                    })">
                        <i class="fas fa-cart-plus"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function filterMenuProducts(category) {
  // Actualizar botones activos
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  const activeBtn = document.querySelector(`[data-category="${category}"]`);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }

  // Renderizar productos filtrados
  renderMenuProducts(category);
}

// ==================== PÁGINA CONTACTO ====================
function loadContacto() {
  const pageContacto = document.getElementById("pageContacto");
  if (!pageContacto) return;

  pageContacto.innerHTML = `
    <section class="contacto-section">
      <div class="container">
        <h2 class="section-title">Contacto</h2>
        <div class="contacto-content">
          <div class="contacto-info">
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h3>Dirección</h3>
                <p>Avenida Principal #123<br />Aguascalientes, AGS 20000</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fas fa-phone"></i>
              <div>
                <h3>Teléfono</h3>
                <p>+52 449 123 4567</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>info@snackcenter.com</p>
              </div>
            </div>
            <div class="info-item">
              <i class="fas fa-clock"></i>
              <div>
                <h3>Horario</h3>
                <p>Lun - Dom: 10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
          <div class="contacto-whatsapp">
            <h3>¿Tienes alguna pregunta?</h3>
            <p>Contáctanos directamente por WhatsApp</p>
            <button class="btn-whatsapp" onclick="openWhatsApp(); return false;">
              <i class="fab fa-whatsapp"></i> Chatear por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function openWhatsApp() {
  const whatsappNumber = "5214491234567";
  const message = "¡Hola! Me gustaría hacer una consulta sobre sus productos.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
  return false;
}
