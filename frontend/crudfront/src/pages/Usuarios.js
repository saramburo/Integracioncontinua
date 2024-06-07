import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Modal } from 'bootstrap';
import MyModal from '../components/Modal';

export function Home() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try{const response = await fetch("/users");
    const data = await response.json();
    setUsers(data);
  } catch(error){
    console.log(error);
  }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`/user/${id}`, {
        method: 'DELETE',
      });
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const [modalOptions, setModalOptions] = useState({});

  const showModal = (idUser) => {
    setUserId(idUser)
    const myModalElement = document.getElementById('myModal');
    const myModal = new Modal(myModalElement, modalOptions);
    myModal.show();
  };

  return (
    <div className="container py-5">
      <div className="py-5">
        <table className="table border shadow">
          <thead>
            <tr>          
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Editar
                  </Link>
                    <button type="button" className="btn btn-danger mx-2" onClick={() => showModal(user.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <MyModal options={modalOptions} title="¿Desea Eliminar?" textBody="Esta acción no se puede deshacer." buttonClass="btn-danger" textFunction="Eliminar" onSubmit={() => deleteUser(userId)} />
    </div>
  );
  
}