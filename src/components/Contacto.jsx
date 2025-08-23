// src/components/Contacto.jsx
import React from "react";

function Contacto() {
  return (
    <section style={styles.contact}>
      <h2 style={styles.title}>Contáctanos</h2>
      <div style={styles.infoBox}>
        <p style={styles.text}>
          📱 <strong>Celulares:</strong> +57 3184858646 | +57 3017719151
        </p>
        <p style={styles.text}>
          📧 <strong>Correo:</strong> tiendaderopaas0610@gmail.com
        </p>
        <p style={styles.text}>
          🎵 <strong>TikTok:</strong>{" "}
          <a
            href="https://www.tiktok.com/@tiendaderopaas?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            @tiendaderopaas
          </a>
        </p>
        <p style={styles.text}>
          📸 <strong>Instagram:</strong>{" "}
          <a
            href="https://www.instagram.com/tiendaas2025/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            @tiendaas2025
          </a>
        </p>
      </div>
    </section>
  );
}

const styles = {
  contact: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0a0a, #1c1c1c)", // fondo negro elegante
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px 20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#FFD700", // dorado
    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
  },
  infoBox: {
    backgroundColor: "rgba(255, 215, 0, 0.08)", // dorado muy suave transparente
    border: "2px solid #FFD700",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
    maxWidth: "600px",
    width: "100%",
  },
  text: {
    fontSize: "1.2rem",
    margin: "15px 0",
  },
  link: {
    color: "#FFD700",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
};

export default Contacto;
