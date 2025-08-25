// src/components/Hero.jsx
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>AS — donde el estilo se convierte en poder</h1>
        <p>Descubre prendas que elevan tu presencia. Calidad, diseño y actitud.</p>
        <div className="hero-actions">
          <a href="/my-shop/productos" className="btn btn-primary">Ver productos</a>
          <a href="/my-shop/contacto" className="btn btn-outline">Contáctanos</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
