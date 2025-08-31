const productos = [
  {
    id: 1,
    nombre: "TNT MEGA MASS GAINER 10LB",
    precio: 195000,
    precioAnterior: 215000,
    imagen: "https://via.placeholder.com/200x200.png?text=TNT+10LB",
    oferta: true,
  },
  {
    id: 2,
    nombre: "SMART GAINER 3LB",
    precio: 90000,
    precioAnterior: 98000,
    imagen: "https://via.placeholder.com/200x200.png?text=SMART+3LB",
    oferta: true,
  },
  {
    id: 3,
    nombre: "TNT MEGA MASS GAINER 3LB",
    precio: 77000,
    precioAnterior: 97000,
    imagen: "https://via.placeholder.com/200x200.png?text=TNT+3LB",
    oferta: true,
  },
  {
    id: 4,
    nombre: "CARNIVOR MASS 6LB",
    precio: 252000,
    precioAnterior: 272000,
    imagen: "https://via.placeholder.com/200x200.png?text=CARNIVOR+6LB",
    oferta: true,
  },
];

let carrito = [];

function renderCatalogo() {
  const contenedor = document.getElementById("catalogo");
  contenedor.innerHTML = "";

  productos.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      ${p.oferta ? '<span class="oferta">¡OFERTA!</span>' : ""}
      <img src="${p.imagen}" alt="${p.nombre}">
      <h2>${p.nombre}</h2>
      <p class="precio-anterior">$${p.precioAnterior.toLocaleString()}</p>
      <p class="precio">$${p.precio.toLocaleString()}</p>
      <button class="boton" onclick="agregarCarrito(${p.id})">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  carrito.push(producto);
  document.getElementById("cart-count").textContent = carrito.length;
}

renderCatalogo();
