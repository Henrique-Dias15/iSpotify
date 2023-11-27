import React from "react";
import "./Musicas.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "./api";
import coracaobranco from "/src/assets/symbols/coraçãoDefault.svg";
import coracaoverde from "/src/assets/symbols/coraçãoVerde.svg";
import lixo from "/src/assets/symbols/lixo.svg";

const Musicas = () => {
  const { id } = useParams();
  const [listaMusica, setListaMusica] = useState([]);
  const [fotoArtistas, setImagens] = useState([]);
  const [idMusica, setMusicaID] = useState([]);
  const [usuario, setUsuario] = useState([]);

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

  async function getUsuario() {
    try {
      const response = await api.get("/users/user");
      setUsuario(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSongsById();
    getArtistById();
    getUsuario();
  }, []);

  function removermusica(index) {
    const novaLista = listaMusica.filter((i) => i !== index);
    setListaMusica(novaLista);
  }

  function changeCoração(index) {
    setListaMusica(
      listaMusica.map((musicas, i) => {
        if (i === index) {
          if (musicas.coração === coracaobranco) {
            return { ...musicas, coração: { coracaoverde } };
          } else {
            return { ...musicas, coração: { coracaobranco } };
          }
        } else {
          return { ...musicas };
        }
      })
    );
  }

  function addCurtidas(index) {
    try {
      const idDaMusica = listaMusica[index]?.id;
      if (idDaMusica) {
        api.post(`/users-songs/${idDaMusica}`);
      }
    } catch (error) {
      alert(error.response?.data || "Erro desconhecido");
    }
  }

  function handleCurtir(index) {
    addCurtidas(index);
    changeCoração(index);
  }

  return (
    <div>
      {listaMusica.map((musica, index) => {
        return (
          <div className="Musica" key={index}>
            <div className="MusicasNomes">
              <p id="numero">{index + 1}</p>
              <div className="Nomes">
                <p>{musica.title},</p>
                <p>{fotoArtistas.name}</p>
              </div>
            </div>
            <p id="musicaAlbum">{musica.genre}</p>
            <div className="MusicasSimbolos">
              <input
                type="image"
                src={coracaobranco}
                id="coracao"
                onClick={() => handleCurtir(index)}
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
