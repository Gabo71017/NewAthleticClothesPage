/* ==================== VARIABLES ==================== */
let carrito = [];
const carritoIcono = document.getElementById("carrito-icono");
const cartCount = document.getElementById("cart-count");
const buscadorIcono = document.getElementById("buscador-icono");

/* ==================== MENÚ DESPLEGABLE ==================== */
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();

    // Cierra todos los submenús primero
    document.querySelectorAll(".submenu").forEach(sub => {
      if (sub !== item.nextElementSibling) {
        sub.style.display = "none";
      }
    });

    // Alterna solo el submenú clicado
    const submenu = item.nextElementSibling;
    if (submenu) {
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    }
  });
});

/* ==================== MODAL DEL CARRITO ==================== */
const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.right = "-100%";
modal.style.width = "300px";
modal.style.height = "100%";
modal.style.background = "#fff";
modal.style.color = "#000";
modal.style.borderLeft = "2px solid #000";
modal.style.boxShadow = "-4px 0 8px rgba(0,0,0,0.2)";
modal.style.transition = "right 0.3s";
modal.style.padding = "20px";
modal.style.zIndex = "9999";
modal.innerHTML = `
  <h2>🛒 Carrito</h2>
  <ul id='lista-carrito'></ul>
  <button id='vaciar-carrito'>Vaciar Carrito</button>
`;
document.body.appendChild(modal);

carritoIcono.addEventListener("click", () => {
  modal.style.right = modal.style.right === "0px" ? "-100%" : "0";
});

/* ==================== FUNCIONES DEL CARRITO ==================== */
function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  carrito.forEach((prod, index) => {
    const li = document.createElement("li");
    li.textContent = `${prod.nombre} - ${prod.precio}`;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.addEventListener("click", () => {
      carrito.splice(index, 1);
      actualizarCarrito();
    });
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
  cartCount.textContent = carrito.length;
}

// Detectar clicks en botones "Agregar al carrito"
document.querySelectorAll(".boton").forEach(boton => {
  boton.addEventListener("click", () => {
    const producto = {
      nombre: boton.getAttribute("data-nombre"),
      precio: boton.getAttribute("data-precio")
    };
    carrito.push(producto);
    actualizarCarrito();
  });
});

// Vaciar carrito
document.getElementById("vaciar-carrito").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});

/* ==================== BUSCADOR ==================== */
buscadorIcono.addEventListener("click", () => {
  const termino = prompt("🔍 ¿Qué producto buscas?");
  if (termino) {
    document.querySelectorAll(".producto").forEach(prod => {
      const nombre = prod.querySelector("h2").textContent.toLowerCase();
      prod.style.display = nombre.includes(termino.toLowerCase()) ? "block" : "none";
    });
  }
});
