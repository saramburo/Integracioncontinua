import React from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="container text-center" >
      <div className="py-4">
        <h1 className="py-4">La plataforma creada para una nueva forma de trabajar</h1>
        <p className="py-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', color: '#333' }}>
       En esta pagina web vas a poder gestionar usuarios de manera sencilla y eficiente. 
          Puedes agregar, editar, visualizar y eliminar usuarios.
        </p>
        <div className="d-block w-100">
        <img src="/Resources/ImagenInicio.jpg" alt="Inicio" className="img-fluid my-4" style={{ width: '700px', height: '500px' }} /> 
        </div>
        <div className="d-block w-100">
        </div>
      </div>
    </div>
  );
}
