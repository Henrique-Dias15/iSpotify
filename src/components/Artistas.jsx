import React, { useState, useEffect } from 'react';
import './Artistas.css';
import api from './api.js';

function Artistas() {
  const [user, setUser] = useState({artist:''}); 

  useEffect(() => {
    api.get("https://localhost:3030/api/songs/0GNq4xh8uFCyihPurnunf7")
      .then((response) => {
        setUser({ artist: response.data.artist });
      })
      .catch((err) => {
        console.error("Oops! An error occurred: ", err);
      });
  }, []);

  return (
    <div>
      <p>Nome:{user.artist}</p>
    </div>
  );
}

export default Artistas;
