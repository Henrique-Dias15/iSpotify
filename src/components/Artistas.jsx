import React, { useState, useEffect } from 'react';
import './Artistas.css';

const Artistas = () => {

  const [listArtistas, setListaArtistas] = useState ([
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

  return (
    <div>
      {listArtistas.map((artista, index) => {
        return (
          <div className='ListaArtistas'>
            <img src={artista.imagem}/>
            <div className='ArtistasTexto'>
              <h1>{artista.nome}</h1>
              <p>Artista</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Artistas;
