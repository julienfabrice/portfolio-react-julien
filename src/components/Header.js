import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      style={{
        padding: "20px",
        backgroundColor: "#222",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
        À propos
      </Link>

      <Link style={{ color: "#fff", textDecoration: "none" }} to="/projects">
        Projets
      </Link>

      <Link style={{ color: "#fff", textDecoration: "none" }} to="/skills">
        Compétences
      </Link>

      <Link style={{ color: "#fff", textDecoration: "none" }} to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Header;