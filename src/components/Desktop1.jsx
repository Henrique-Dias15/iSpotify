import React,{ useEffect, useState } from "react";
import "./Desktop1.css";
import Musicas from "./Musicas.jsx"
import { useParams } from "react-router-dom";
import api from "./api";
import { useNavigate} from "react-router-dom"
import coracao from "/src/assets/symbols/Coração Cheio.svg"
import roda from "/src/assets/symbols/roda.svg"
import coracaonovo from "/src/assets/symbols/coraçãoDefault.svg"
import botaoplay  from "/src/assets/symbols/botãoPlay.svg"
import pontos  from "/src/assets/symbols/3pontos.svg"
import botaodownload  from "/src/assets/symbols/botãoDownload.svg"
import logoutimg from "/src/assets/symbols/logout.svg"
import linha from "/src/assets/symbols/linha.svg"
import relogio from "/src/assets/symbols/relogio.svg"



function Desktop1() {
  const { id } = useParams();
  const [fotoArtistas, setImagens] = useState([]);


  async function getArtistById() {
    try {
      const response = await api.get(`/artists/${id}`);
      setImagens(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  async function logout() {
    try {
      await api.post("/users/logout", {
      });
      navigate('/');
    } catch (error) {
      alert(error.response?.data || "Erro desconhecido");
    }
  }

 

useEffect(() => {
    getArtistById();
  }, []);

  return (
    <div className="Display">
      <div className="SideBar">
        <h1>iSpotify ®</h1>
        <div className="Artistas">
          <img src={roda} />
          <p>Artistas</p>
        </div>
        <div className="MusicasCurtidas">
          <img src={coracao}/>
          <p>Músicas Curtidas</p>
        </div>
        <div className="Logout">
          <button onClick={logout}> <img src={logoutimg}/>Logout</button>
        </div>
      </div>

      <div className="Main">
        <div className="Infos"  >
        <img src={fotoArtistas.image} />
        <div className="InfosTexto">
            <h2>ARTISTA</h2>
            <h1>{fotoArtistas.name}</h1>
            </div>
        </div>
   
            
        <div className="Botões">
          <input type="image" src={botaoplay} id="coração" />
          <input type="image" src={coracaonovo} id="coração" />
          <input type="image" src={botaodownload}  id="download" />
          <input type="image" src={pontos} id="pontos" />
        </div>

        <div className="Playlist">
          <div className="Cabeçalho">
          <p >#TÍTULO</p>
            <p id="album">Gênero</p>
            <img src={relogio} alt="" id="relógio" />
          </div>
          <img className="Divisao" src={linha} alt="" />
          <div className="MusicasPagina">
            <Musicas  id = "coraçãomsc1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
