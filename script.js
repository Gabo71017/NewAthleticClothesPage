let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  total += precio;

  // Actualizar contador del carrito
  document.getElementById("cart-count").textContent = carrito.length;

  alert(producto + " agregado al carrito. Total: $" + total.toLocaleString());
}
