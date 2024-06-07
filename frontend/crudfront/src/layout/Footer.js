import React from "react";
import { NavLink } from "react-router-dom";
import Contact from "../pages/Contact";

export default function Footer() {
  return (
    <>
      <footer className="position-fixed bg-secondary fixed-bottom d-flex flex-row justify-content-between align-items-center">
        <div className="my-2 mx-5">
          <NavLink
            to="/contact"
            className="text-light fs-5 text-decoration-none link-dark link-offset-2"
          >
            Contáctanos
          </NavLink>
        </div>
        <div className="my-2 mx-5">
          <NavLink className="text-light fs-5 text-decoration-none link-dark link-offset-2">
            Términos y Condiciones
          </NavLink>
        </div>
        <div className="my-2 mx-5">
          <NavLink className="text-light fs-5 text-decoration-none link-dark link-offset-2">
            Política de Privacidad
          </NavLink>
        </div>
      </footer>
    </>
  );
}
