// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductosBlancos from "./components/ProductosBlancos";
import ProductosNegros from "./components/ProductosNegros";
import Contacto from "./components/Contacto";
import Carrito from "./components/Carrito";
import { CartProvider } from "./components/CartContext";


function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/blancos" element={<ProductosBlancos />} />
          <Route path="/productos/negros" element={<ProductosNegros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
