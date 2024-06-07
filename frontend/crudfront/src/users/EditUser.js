import axios from "axios";
import { Modal } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MyModal from '../components/Modal';

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/user/${id}`, user);
    navigate("/Usuarios");
  };

  const loadUser = async () => {
    const result = await axios.get(`/user/${id}`);
    setUser(result.data);
  };

  const [modalOptions, setModalOptions] = useState({});

  const showModal = () => {
    const myModalElement = document.getElementById('myModal');
    const myModal = new Modal(myModalElement, modalOptions);
    myModal.show();
  };

  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Usuario</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Nombre
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese su nombre"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Usuario
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese su usuario"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Correo
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese su correo"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <Link className="btn btn-outline-danger mx-2" to="/Usuarios">
              Cancelar
            </Link>
            <button type="button" className="btn btn-outline-primary" onClick={showModal}>
              Guardar
            </button>
          </form>
        </div>
      </div>
      <MyModal options={modalOptions} title="¿Desea Guardar?" textBody="Recuerde verificar los datos antes de guardar." buttonClass="btn-success" textFunction="Guardar" onSubmit={(e) => onSubmit(e)} />
    </div>
  );
}