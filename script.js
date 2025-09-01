/* ==================== MENÚ DESPLEGABLE ==================== */
document.querySelectorAll(".submenu > .menu-item").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    const parent = item.parentElement;

    // Cierra los otros submenús
    document.querySelectorAll(".submenu").forEach(sub => {
      if (sub !== parent) {
        sub.classList.remove("active");
      }
    });

    // Alterna el submenú clicado
    parent.classList.toggle("active");
  });
});
