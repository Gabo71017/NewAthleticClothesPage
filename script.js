document.addEventListener("DOMContentLoaded", () => {
  // Botón de menú hamburguesa
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-links");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });
  }

  // Animación en los botones de productos
  const productButtons = document.querySelectorAll(".product-card button");

  productButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");

      setTimeout(() => {
        btn.classList.remove("clicked");
      }, 300);
    });
  });

  // Animación de aparición de productos con scroll
  const products = document.querySelectorAll(".product-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  products.forEach((product) => {
    observer.observe(product);
  });
});
