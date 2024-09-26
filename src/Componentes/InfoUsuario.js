import React, { useEffect, useState } from 'react';
import { getUserData } from '../Servicios/UserService';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate(); // Usar useNavigate
  
    useEffect(() => {
      const data = getUserData();
      setUserData(data);
    }, []);
  
    const handleProfileClick = () => {
      navigate('/profile'); // Redirigir a la ruta del perfil
    };
  
    return (
      <div className="container text-center my-4">
        <img
          src="https://cdn.discordapp.com/attachments/938625558382784532/1288666661536268308/Profile.jpg?ex=66f603da&is=66f4b25a&hm=11bde99b7e3f7b6e812add33dacdb1f11b3c1025748ff7a0fa3bfd6d2894a8ef&"
          alt="User Avatar"
          className="rounded-circle img-thumbnail"
          style={{ width: '150px', height: '150px', cursor: 'pointer' }}
          onClick={handleProfileClick} // Manejar clic
        />
        <h2>{userData.fullName}</h2>
        <p>{userData.description}</p>
        <a href={`https://${userData.url}`} target="_blank" rel="noreferrer">
          {userData.url}
        </a>
        <div className="d-flex justify-content-center my-3">
          <div className="mx-3">{userData.posts} posts</div>
          <div className="mx-3">{userData.followers} followers</div>
          <div className="mx-3">{userData.following} following</div>
        </div>
      </div>
    );
  };
  
  export default UserInfo;