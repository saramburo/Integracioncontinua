import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, );

    const loadUser = async () => {
      const result = await axios.get(`/user/${id}`);
      setUser(result.data);
    };

  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalle del usuario</h2>

          <div className="card">
            <div className="card-header">
              ID : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nombre: </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Usuario: </b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Correo: </b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/Usuarios"}>
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}