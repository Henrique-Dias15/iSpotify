import React, { useState, useEffect } from 'react';
import './Artistas.css';
import api  from  "./api.js"
const Artistas = () => {
  
  const [apidata, setapidata] = useState([]);

  useEffect(() => {
    getArtists();
  }, []);

  async function getArtists() {
    try {
      const response = await api.get("/artists");
      setapidata(response.data);
      console.log("deu certo");
    } catch (error) {
      alert(error.response.data);
    }
  }

  const vetorArtistas = apidata.slice(0,10);

 
  
  return (
    <div className="caixaArtistas">
         {vetorArtistas.map((e, i) => {
        return (
          <div className='ListaArtistas' key={i}>
            <img src={e.image} />
            <h1>{e.name}</h1>
            <p>Artista</p>
          </div>
        );
      })}
   


    </div>
  );
}

export default Artistas;
