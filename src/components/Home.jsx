// src/components/Home.jsx
import React from "react";

function Home() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}></div> {/* capa oscura encima */}
      <div style={styles.content}>
        <h1 style={styles.title}>AS — donde el estilo se convierte en poder</h1>
        <p style={styles.subtitle}>
          Descubre prendas que elevan tu presencia. Calidad, diseño y actitud.
        </p>
        <div style={styles.buttons}>
          <a href="/productos/blancos" style={styles.buttonPrimary}>
            Ver productos
          </a>
          <a href="/contacto" style={styles.buttonSecondary}>
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    height: "100vh",
    backgroundImage: "url('/logo.png')",
    backgroundSize: "150px 150px", // tamaño del patrón
    backgroundRepeat: "repeat", // se repite como patrón
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.6))",
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#FFD700", // Dorado brillante
    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
  },
  subtitle: {
    fontSize: "1.4rem",
    marginBottom: "30px",
    color: "#e5e7eb", // Gris claro elegante
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  buttonPrimary: {
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "12px 26px",
    borderRadius: "8px",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  },
  buttonSecondary: {
    border: "2px solid #FFD700",
    color: "#FFD700",
    padding: "12px 26px",
    borderRadius: "8px",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
};

export default Home;
