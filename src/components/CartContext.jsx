// src/components/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cada item en el carrito tendrá: { id, nombre, precio:"$20", img, quantity }
  const [cart, setCart] = useState(() => {
    // 🔹 Cargamos carrito desde localStorage si existe
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 🔹 Guardamos el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar producto
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Quita UNA unidad; si queda en 0, lo elimina
  const removeFromCart = (id) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === id);
      if (!found) return prev;
      if (found.quantity > 1) {
        return prev.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        );
      }
      return prev.filter((p) => p.id !== id);
    });
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
