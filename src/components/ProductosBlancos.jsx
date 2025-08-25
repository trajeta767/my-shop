import React from "react";
import { useCart } from "./CartContext";

const BASE = import.meta.env.BASE_URL;

const productos = [
  { id: 1, nombre: "Camisa Blanca", precio: "$40.000", img: `${BASE}camisa.png` },
  { id: 2, nombre: "Camiseta Blanca", precio: "$27.000", img: `${BASE}camiseta.png` },
  { id: 3, nombre: "Pantalón Sudadera", precio: "$52.0000", img: `${BASE}pantalon.png` },
  { id: 4, nombre: "Pantalón Sudadera Importado", precio: "$72.000", img: `${BASE}pantalon.png` },
  { id: 5, nombre: "Buso", precio: "$65.000", img: `${BASE}buso.png` },
  { id: 6, nombre: "Buso Importado", precio: "$82.000", img: `${BASE}buso.png` },
  { id: 7, nombre: "Gorra", precio: "$32.000", img: `${BASE}gorra.png` },
];

function Productos() {
  const { addToCart } = useCart();

  return (
    <section
      id="productos"
      style={{
        minHeight: "100vh",
        padding: "60px 30px",
        background: "linear-gradient(135deg, #FFD700, #E6B800)",
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
          color: "#000",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "40px",
          textShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        Productos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {productos.map((p) => (
          <article
            key={p.id}
            style={{
              background: "#0a0a0a",
              border: "2px solid #FFD700",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              color: "#fff",
              boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 12px 28px rgba(0,0,0,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.35)";
            }}
          >
            {/* Imagen del producto */}
            <div style={{ marginBottom: "15px" }}>
              <img
                src={p.img}
                alt={p.nombre}
                style={{
                  maxWidth: "100%",
                  height: "200px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>

            {/* Nombre del producto */}
            <h3 style={{ color: "#FFD700", marginBottom: "10px" }}>
              {p.nombre}
            </h3>

            {/* Precio */}
            <p style={{ marginBottom: "15px", fontWeight: "bold" }}>
              {p.precio}
            </p>

            {/* Botón añadir */}
            <button
              style={{
                backgroundColor: "#FFD700",
                color: "#000",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#E6B800")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#FFD700")
              }
              onClick={() => addToCart(p)}
            >
              Añadir al carrito
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Productos;
