/* ==================== ESTILOS GENERALES ==================== */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: #111;
  color: #fff;
}

h2 {
  font-size: 1rem;
  margin: 10px 0;
  text-align: center;
}

/* ==================== CATÁLOGO ==================== */
#catalogo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 30px;
}

.producto {
  background: #1a1a1a;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;
}

.producto:hover {
  transform: translateY(-5px);
}

.producto img {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* ==================== PRECIOS ==================== */
.precio-anterior {
  text-decoration: line-through;
  color: #888;
  font-size: 0.9rem;
}

.precio {
  font-size: 1.2rem;
  font-weight: bold;
  color: #FFD700;
}

/* ==================== OFERTA ==================== */
.oferta {
  position: absolute;
  top: 10px;
  left: 10px;
  background: red;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 5px 8px;
  border-radius: 8px;
}

/* ==================== BOTONES ==================== */
.boton {
  margin-top: 10px;
  background: #FFD700;
  color: #000;
  border: none;
  padding: 10px 14px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.boton:hover {
  background: #ffb700;
  transform: scale(1.05);
}

/* ==================== CARRITO ==================== */
#carrito-icono {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #FFD700;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
}

#cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 50%;
}
