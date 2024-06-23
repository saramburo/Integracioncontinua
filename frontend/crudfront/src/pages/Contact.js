import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container text-center d-inline">
        <div className="py-4">
          <h1 className="py-4"> Contáctanos</h1>
          <p
            className="py-4"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "20px",
              color: "#333",
            }}
          >
            Dinos qué piensas! Escríbenos y danos tu opinión.
            Test Jenkins
          </p>
        </div>
        <form className="w-full max-w-sm">
          <br />
          <input
            type="text"
            id="name"
            name="name"
            size="40"
            value="Nombre"
            placeholder="email"
            required
          />
          <br />

          <br />
          <input
            type="email"
            id="email"
            name="email"
            size="40"
            value="Correo"
            required
          />
          <br />

          <br />
          <div></div>
          <textarea
            type="text"
            id="comentarios"
            name="comentarios"
            rows="5"
            cols="43"
            value="Escribe tus comentarios"
            required
          ></textarea>
          <br />
          <button type="submit" value="Enviar">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
