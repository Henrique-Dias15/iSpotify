import React from "react";
import "./Musicas.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "./api";
import coracaobranco from "/src/assets/symbols/coraçãoDefault.svg"
import coracaoverde from "/src/assets/symbols/coraçãoVerde.svg"
import lixo from "/src/assets/symbols/lixo.svg"

const Musicas = () => {
  const { id } = useParams();
  const [listaMusica, setListaMusica] = useState([]);
  const [fotoArtistas, setImagens] = useState([]);
 async function getSongsById() {
    try {
      const response = await api.get(`/songs/artist/${id}`);
      console.log(response.data);
      setListaMusica(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getArtistById() {
    try {
      const response = await api.get(`/artists/${id}`);
      setImagens(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSongsById();
    getArtistById();
  }, []);


  function removermusica(index) {
    const novaLista = listaMusica.filter((i) => i !== index);
    setListaMusica(novaLista);
  }

  function changeCoração(index) {
    setListaMusica(
      listaMusica.map((musicas, i) => {
        if (i === index) {
          if (musicas.coração === coracaobranco ) {
            return { ...musicas, coração: {coracaoverde} };
          } else {
            return { ...musicas, coração: {coracaobranco} };
          }
        } else {
          return { ...musicas };
        }
      })
    );
  }

  return (
    <div>
      {listaMusica.map((musica, index) => {
        return (
          <div className="Musica">
            <div className="MusicasNomes">
              <p id="numero">{index + 1}</p>
              <div className="Nomes">
                <p>{musica.title}</p>
                <p>{fotoArtistas.name}</p>
              </div>
            </div>
            <p id="musicaAlbum">{musica.genre}</p>
            <div className="MusicasSimbolos">
              <input
                type="image"
                src={coracaobranco}
                id="coracao"
                onClick={() => changeCoração(index)}
              />
              <input
                type="image"
                id="lixo"
                src={lixo}
                onClick={() => removermusica(index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Musicas;
