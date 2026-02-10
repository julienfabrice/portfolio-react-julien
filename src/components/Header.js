import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Julien</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setIsOpen(false)}>
          À propos
        </NavLink>

        <NavLink to="/projects" onClick={() => setIsOpen(false)}>
          Projets
        </NavLink>
         {/* Nouveau lien pour TodoApp */}
        <NavLink to="/todo" onClick={() => setIsOpen(false)}>
          Todo App
        </NavLink>
        <NavLink to="/skills" onClick={() => setIsOpen(false)}>
          Compétences
        </NavLink>

        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </NavLink>
      </div>

      {/* Burger menu */}
      <div
        className={`burger ${isOpen ? "toggle" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}