import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className=" footer">
        <div className=" footer-option">
          <NavLink className="footer-link">Contáctanos</NavLink>
        </div>
        <div className=" footer-option">
          <NavLink className="footer-link">Términos y Condiciones</NavLink>
        </div>
        <div className=" footer-option">
          <NavLink className="footer-link">Política de Privacidad</NavLink>
        </div>
      </footer>
    </>
  );
}
