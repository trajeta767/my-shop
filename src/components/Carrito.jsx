// src/components/Carrito.jsx
import React from "react";
import { useCart } from "./CartContext";

function Carrito() {
  const { cart, removeFromCart, clearCart } = useCart();

  const parseMoney = (s) => Number(String(s).replace(/[^0-9.]/g, "")) || 0;
  const total = cart.reduce(
    (acc, p) => acc + parseMoney(p.precio) * (p.quantity || 1),
    0
  );

  // 🔑 Función para generar link de WhatsApp
  const handleCheckout = () => {
    const numero = "573184858646"; // tu número en formato internacional
    let mensaje = "Hola, quiero realizar una compra:\n\n";

    cart.forEach((p) => {
      mensaje += `🛍️ ${p.nombre} - ${p.quantity} x ${p.precio}\n`;
    });

    mensaje += `\n💰 Total: $${total.toFixed(2)}\n`;
    mensaje += `\nMétodo de pago: Nequi / Daviplata al número ${numero}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section style={styles.cart}>
      <h2 style={styles.title}>🛒 Tu Carrito</h2>

      {cart.length === 0 ? (
        <p style={styles.empty}>Tu carrito está vacío.</p>
      ) : (
        <div style={styles.cartBox}>
          {cart.map((p) => (
            <div key={p.id} style={styles.cartItem}>
              <img src={p.img} alt={p.nombre} style={styles.cartImg} />
              <div style={styles.cartInfo}>
                <h3 style={styles.itemName}>{p.nombre}</h3>
                <p style={styles.itemPrice}>
                  {p.precio} × {p.quantity}
                </p>
              </div>
              <button
                style={styles.removeBtn}
                onClick={() => removeFromCart(p.id)}
              >
                ❌
              </button>
            </div>
          ))}

          <div style={styles.cartTotal}>
            <h3 style={styles.totalText}>Total: ${total.toFixed(2)}</h3>
            <div style={styles.cartActions}>
              <button style={styles.btnSecondary} onClick={clearCart}>
                Vaciar carrito
              </button>
              {/* 🔑 Aquí el botón actualizado */}
              <button style={styles.btnPrimary} onClick={handleCheckout}>
                Proceder al pago
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  cart: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0a0a, #1c1c1c)", // fondo negro elegante
    color: "white",
    padding: "40px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#FFD700", // dorado
    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
  },
  empty: {
    fontSize: "1.3rem",
    marginTop: "20px",
    opacity: 0.8,
  },
  cartBox: {
    backgroundColor: "rgba(255, 215, 0, 0.08)",
    border: "2px solid #FFD700",
    padding: "20px",
    borderRadius: "12px",
    maxWidth: "700px",
    margin: "0 auto",
    boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(255,255,255,0.05)",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  cartImg: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
  },
  cartInfo: {
    flex: 1,
    marginLeft: "15px",
    textAlign: "left",
  },
  itemName: {
    fontSize: "1.2rem",
    margin: 0,
  },
  itemPrice: {
    margin: 0,
    color: "#FFD700",
    fontWeight: "bold",
  },
  removeBtn: {
    background: "transparent",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#ff4d4d",
  },
  cartTotal: {
    marginTop: "20px",
    textAlign: "center",
  },
  totalText: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#FFD700",
  },
  cartActions: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  btnSecondary: {
    backgroundColor: "transparent",
    border: "2px solid #FFD700",
    color: "#FFD700",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s",
  },
};

export default Carrito;
