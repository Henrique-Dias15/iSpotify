import React, { useEffect, useState } from "react";
import "./MusicasCurtidas.css";
import lixo from "/src/assets/symbols/lixo.svg";
import api from "./api";
import { useNavigate } from "react-router-dom";
import coracao from "/src/assets/symbols/Coração Cheio.svg";
import roda from "/src/assets/symbols/roda.svg";
import coracaonovo from "/src/assets/symbols/coraçãoDefault.svg";
import botaoplay from "/src/assets/symbols/botãoPlay.svg";
import botaodownload from "/src/assets/symbols/botãoDownload.svg";
import logoutimg from "/src/assets/symbols/logout.svg";
import musicascurtidas from "/src/assets/symbols/MusicasCurtidas.svg";
import linha from "/src/assets/symbols/linha.svg";
import rosto from "/src/assets/symbols/Conta.svg";

function MusicasCurtidas() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState([]);
  const [musicasCurtidas, setMusicasCurtidas] = useState([]);
  const [nomeArtista, setNomeArtista] = useState([]);

  async function logout() {
    try {
      await api.post("/users/logout", {});
      navigate("/");
    } catch (error) {
      alert(error.response?.data || "Erro desconhecido");
    }
  }

  async function removerMusicaCurtida(index) {
    try {
      const IdparaDeletar = musicasCurtidas[index]?.id;
      await api.delete(`/users-songs/${IdparaDeletar}`);
      const novaLista = musicasCurtidas.filter((_, i) => i !== index);
      setMusicasCurtidas(novaLista);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function loadData() {
      try {
        const usuarioResponse = await api.get("/users/user");
        setUsuario(usuarioResponse.data);
        const musicasCurtidasResponse = await api.get(
          `/users-songs/users/${usuarioResponse.data.id}`
        );
        setMusicasCurtidas(musicasCurtidasResponse.data);
        const artistIds = musicasCurtidasResponse.data.map(
          (musica) => musica.artist_id
        );
        const promises = artistIds.map(async (artistId) => {
          const response = await api.get(`/artists/${artistId}`);
          return response.data;
        });
        const nomesArtistas = await Promise.all(promises);
        console.log(nomesArtistas);
        setNomeArtista(nomesArtistas);
      } catch (error) {
        console.log("Erro ao carregar dados:", error);
      }
    }

    loadData();
  }, []);

  return (
    <div className="Display">
      <div className="SideBar">
        <h1>iSpotify ®</h1>
        <div className="Artistas">
          <button
            onClick={() => {
              navigate(`/Desktop2`);
            }}
          >
            <img src={roda} />
            Artistas
          </button>
        </div>
        <div className="MusicasCurtidas">
          <button
            onClick={() => {
              navigate(`/MusicasCurtidas`);
            }}
          >
            <img src={coracao} />
            <p>Músicas Curtidas</p>
          </button>
        </div>
        <div className="MinhaConta">
          <button
            onClick={() => {
              navigate(`/PaginaConta`);
            }}
          >
            <img src={rosto} />
            <p>Minha Conta</p>
          </button>
        </div>
        <div className="Logout">
          <button onClick={logout}>
            {" "}
            <img src={logoutimg} />
            Logout
          </button>
        </div>
      </div>

      <div className="MainMC">
        <div className="Infos">
          <img src={musicascurtidas} />
          <div className="InfosTexto">
            <h2>Playlist</h2>
            <h1>Músicas Curtidas</h1>
          </div>
        </div>

        <div className="BotõesMC">
          <input type="image" src={botaoplay} id="botãoplay" />
          <input type="image" src={botaodownload} id="download" />
        </div>
        <div className="Playlist">
          <div className="Cabeçalho">
            <p>#TÍTULO</p>
            <p id="genero">Gênero</p>
          </div>
          <img className="Divisao" src={linha} id="linha" />
          <div className="MusicasPagina">
            {musicasCurtidas.map((musica, index) => {
              const nomeDoArtista = nomeArtista[index]?.name;
              return (
                <div className="Musica">
                  <div className="MusicasNomes">
                    <p id="numero">{index + 1}</p>
                    <div className="Nomes">
                      <p>{musica.title}</p>
                      <p>{nomeDoArtista}</p>
                    </div>
                  </div>
                  <p id="generoMusica">{musica.genre}</p>
                  <div className="MusicasSimbolos">
                    <input
                      type="image"
                      id="lixo"
                      src={lixo}
                      onClick={() => removerMusicaCurtida(index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicasCurtidas;
