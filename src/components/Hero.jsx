import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "4rem 2rem",
        backgroundColor: "#0a0f1c",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        AS — donde el estilo se convierte en poder
      </h1>
      <p style={{ marginBottom: "2rem", fontSize: "1.1rem", color: "#ccc" }}>
        Descubre prendas que elevan tu presencia. Calidad, diseño y actitud.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Link
          to="/productos/blancos"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            background: "#f5c542",
            color: "black",
          }}
        >
          Ver productos
        </Link>

        <Link
          to="/contacto"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            border: "1px solid #f5c542",
            color: "#f5c542",
          }}
        >
          Contáctanos
        </Link>
      </div>
    </section>
  );
};

export default Hero;
