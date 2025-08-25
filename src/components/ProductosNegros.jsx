// src/components/ProductosNegros.jsx
import React from "react";
import { useCart } from "./CartContext";

const BASE = import.meta.env.BASE_URL;

const productosNegros = [
  { id: 8, nombre: "Camisa Negra",    precio: "$44.000", img: `${BASE}camisanegra.png` },
  { id: 9, nombre: "Camiseta Negra",  precio: "$28.000", img: `${BASE}camisetanegra.png` },
  { id: 10, nombre: "Pantalón Sudadera",  precio: "$52.000", img: `${BASE}pantalonnegro.png` },
  { id: 11, nombre: "Pantalón Sudadera Importado",  precio: "$72.0000", img: `${BASE}pantalonnegro.png` },
  { id: 12, nombre: "Buso Negro",  precio: "$65.000", img: `${BASE}busonegro.png` },
  { id: 13, nombre: "Buso Negro Importado",  precio: "$82.000", img: `${BASE}busonegro.png` },
  { id: 14, nombre: "Gorra Negra", precio: "$32.000", img: `${BASE}gorranegra.png` },
];

function ProductosNegros() {
  const { addToCart } = useCart();

  return (
    <section
      id="productos"
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #0a0a0a, #1c1c1c)",
        width: "100vw",
        margin: "0",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#FFD700",
          fontSize: "2.2rem",
          fontWeight: "bold",
          marginBottom: "30px",
          textShadow: "0 2px 6px rgba(0,0,0,0.6)",
        }}
      >
        Productos Negros
      </h2>

      <div
        className="productos-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          width: "100%",
          margin: "0",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        {productosNegros.map((p) => (
          <article
            key={p.id}
            className="product-card"
            style={{
              background: "#FFD700",
              border: "2px solid #333",
              borderRadius: "12px",
              padding: "16px",
              textAlign: "center",
              color: "#000",
              fontWeight: "500",
              boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div className="product-thumb" style={{ marginBottom: "12px" }}>
              <img
                src={p.img}
                alt={p.nombre}
                style={{
                  maxWidth: "100%",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="product-info">
              <h3 style={{ color: "#000", marginBottom: "8px" }}>{p.nombre}</h3>
              <p
                className="price"
                style={{ marginBottom: "12px", fontWeight: "bold" }}
              >
                {p.precio}
              </p>
              <button
                style={{
                  backgroundColor: "#000",
                  color: "#FFD700",
                  border: "2px solid #000",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFD700";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.border = "2px solid #000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#000";
                  e.currentTarget.style.color = "#FFD700";
                  e.currentTarget.style.border = "2px solid #000";
                }}
                onClick={() => addToCart(p)}
              >
                Añadir al carrito
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductosNegros;
