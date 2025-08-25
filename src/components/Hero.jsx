import React from "react";

function Hero() {
  const logo = `${import.meta.env.BASE_URL}logo.png`; // ✅ dinámico: funciona en local y en GitHub Pages

  return (
    <section
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px",
        backgroundColor: "#0a0f1c",
        padding: "80px 16px 56px",
        textAlign: "center",
        color: "white",
      }}
    >
      <div>
        <h1>AS — donde el estilo se convierte en poder</h1>
        <p>Descubre prendas que elevan tu presencia. Calidad, diseño y actitud.</p>
      </div>
    </section>
  );
}

export default Hero;
