// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"; // 👈 importa el logo desde src

const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav-container">
        <Link to="/" className="brand">
          {/* Logo ahora viene de src/logo.png */}
          <img
            src={logo}
            alt="AS Clothing"
          />
          <span>AS Clothing</span>
        </Link>

        <nav>
          <ul className="menu">
            <li><Link to="/">Inicio</Link></li>

            <li className="dropdown">
              <span className="drop-trigger">Productos ▾</span>
              <ul className="submenu">
                <li><Link to="/productos/blancos">Blancos</Link></li>
                <li><Link to="/productos/negros">Negros</Link></li>
              </ul>
            </li>

            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/carrito" className="cart-link">🛒 Carrito</Link></li>
          </ul>
        </nav>
      </div>

      {/* Estilos embebidos */}
      <style>{`
        .nav {
          background: #0d1117;
          color: #fff;
          position: relative;
          z-index: 1000;
          border-bottom: 2px solid #FFD700;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: inherit;
        }
        .brand img {
          height: 56px;
          width: auto;
          display: block;
          border-radius: 8px;
        }
        .brand span {
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 0.5px;
          color: #FFD700;
        }
        .menu {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 24px;
          margin: 0;
          padding: 0;
        }
        .menu a, .drop-trigger {
          color: #fff;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 6px;
          display: inline-block;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .menu a:hover, .drop-trigger:hover {
          background: rgba(255, 215, 0, 0.15);
          color: #FFD700;
        }
        .dropdown { position: relative; }
        .submenu {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          min-width: 180px;
          background: #111827;
          border: 1px solid rgba(255,215,0,0.2);
          border-radius: 8px;
          padding: 6px 0;
          display: none;
          box-shadow: 0 8px 20px rgba(0,0,0,0.35);
        }
        .dropdown:hover .submenu { display: block; }
        .submenu li { list-style: none; }
        .submenu a {
          display: block;
          padding: 10px 14px;
          border-radius: 0;
        }
        .submenu a:hover {
          background: rgba(255,215,0,0.12);
          color: #FFD700;
        }

        /* Carrito resaltado */
        .cart-link {
          background: #FFD700;
          color: #0d1117 !important;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 6px;
        }
        .cart-link:hover {
          background: #e6c200;
        }

        /* Responsive simple */
        @media (max-width: 720px) {
          .brand span { display: none; }
          .menu { gap: 14px; }
          .brand img { height: 48px; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
