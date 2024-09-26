import React, { useEffect, useState } from 'react';
import { getUserData } from '../Servicios/UserService';

const Profile = () => {
  // Definimos un estado inicial para almacenar los datos del usuario
  const [userData, setUserData] = useState({
    username: '',
    fullName: '',
    description: '',
    url: '',
  });

  // Simulamos la obtención de los datos del usuario cuando se carga el componente
  useEffect(() => {
    const data = getUserData();
    setUserData(data); // Actualizamos el estado con los datos obtenidos
  }, []);

  // Función para manejar los cambios en los inputs y actualizar el estado
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Obtenemos el nombre y el valor del input
    setUserData((prevState) => ({
      ...prevState,
      [name]: value, // Actualizamos solo el campo que cambia
    }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4" style={{ width: '350px' }}>
        <div className="text-center">
          <img
            src="user-avatar-url"
            alt="User Avatar"
            className="rounded-circle mb-3"
            style={{ width: '100px', height: '100px' }}
          />
        </div>

        {/* Campos del formulario */}
        <div className="mb-3">
          <label className="form-label">Nombre de usuario</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            disabled // Este campo no se puede editar
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={userData.fullName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción del perfil</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={userData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">URL página personal</label>
          <input
            type="text"
            className="form-control"
            name="url"
            value={userData.url}
            onChange={handleInputChange}
          />
        </div>

        {/* Botón para guardar cambios */}
        <div className="d-grid">
          <button className="btn btn-outline-danger">Guardar Cambios</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;