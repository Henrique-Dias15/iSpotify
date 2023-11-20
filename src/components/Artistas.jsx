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
  /* const [listArtistas, setListaArtistas] = useState ([
    {
      nome: "Engenheiros do Hawaii", 
      imagem: "src/assets/images/engenheiros 1.svg",
    },
    {
      nome: "Cidade Negra",
      imagem: "src/assets/images/cidade 1.svg",
    },
    {
      nome: "Capital Inicial",
      imagem: "src/assets/images/capital 1.svg",
    },
    {
      nome: "Skank",
      imagem: "src/assets/images/skank 1.svg",
    },
    {
      nome: "Paralamas do Sucesso",
      imagem: "src/assets/images/paralalamas 1.svg",
    },
    {
      nome: "Lulu Santo",
      imagem: "src/assets/images/lulu 1.svg",
    },
    {
      nome: "Cazuza",
      imagem: "src/assets/images/cazuza 1.svg",
    },
    {
      nome: "Kid Abelha",
      imagem: "src/assets/images/kid 1.svg",
    },
    {
      nome: "Biquini Cavadão",
      imagem: "src/assets/images/biquini 1.svg",
    },
    {
      nome: "O Rappa",
      imagem: "src/assets/images/rappa 1.svg"
    },
  ]);
 */
  return (
    <div className="caixaArtistas">
         {apidata.map((e, i) => {
        return (
          <div className='ListaArtistas' key={i}>
            <img src={e.image} />
            <h1>{e.name}</h1>
            <p>Artista</p>
          </div>
        );
      })}
   

     {/*  {listArtistas.map((artista, index) => {
        return (
          <div className='ListaArtistas'>
            <img src={artista.imagem}/>
    
              <h1>{artista.nome}</h1>
              <p>Artista</p>
            
          </div>
        );
      })} */}
    </div>
  );
}

export default Artistas;
