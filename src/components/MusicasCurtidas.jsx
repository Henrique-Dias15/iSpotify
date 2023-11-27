import React,{ useEffect, useState } from "react";
import "./MusicasCurtidas.css";
import Musicas from "./Musicas.jsx"
import api from "./api";
import { useNavigate} from "react-router-dom"
import coracao from "/src/assets/symbols/Coração Cheio.svg"
import roda from "/src/assets/symbols/roda.svg"
import coracaonovo from "/src/assets/symbols/coraçãoDefault.svg"
import botaoplay  from "/src/assets/symbols/botãoPlay.svg"
import botaodownload  from "/src/assets/symbols/botãoDownload.svg"
import logoutimg from "/src/assets/symbols/logout.svg"
import musicascurtidas from "/src/assets/symbols/MusicasCurtidas.svg"
import linha from "/src/assets/symbols/linha.svg"


function MusicasCurtidas(){

const navigate = useNavigate();

const [musicasCurtidas,setMusicasCurtidas] = useState([]);
const [usuario,setUsuario] = useState([]);





  async function logout() {
    try {
      await api.post("/users/logout", {
      });
      navigate('/');
    } catch (error) {
      
      alert(error.response?.data || "Erro desconhecido");
    }
  }

  async function getMusicasCurtidas() {
    try {
            const response = await api.get(`/users-songs/users/${usuario.id}`);
            setMusicasCurtidas(response.data);
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
    getMusicasCurtidas();
    getUsuario();
  }, []);



    return(
        <div className="Display">
      <div className="SideBar">
        <h1>iSpotify ®</h1>
        <div className="Artistas">
          <button onClick={ () =>{ navigate(`/Desktop2`)}}>
          <img src={roda} />Artistas
          </button>
         
        </div>
        <div className="MusicasCurtidas">
        <button onClick={ () =>{ navigate(`/MusicasCurtidas`)}} >
          <img src={coracao} />
          <p>Músicas Curtidas</p>
          </button>
        </div>
        <div className="Logout">
          <button onClick={logout}> <img src={logoutimg}/>Logout</button>
        </div>
      </div>
            
      <div className="MainMC">
        <div className="Infos"  >
        <img src={musicascurtidas} />
        <div className="InfosTexto">
            <h2>Playlist</h2>
            <h1>Músicas Curtidas</h1>
            </div>
        </div>
   
            
        <div className="BotõesMC">
          <input type="image" src={botaoplay} id="botãoplay" />
          <input type="image" src={botaodownload}  id="download" />
        </div>
        <div className="Playlist">
          <div className="Cabeçalho">
          <p >#TÍTULO</p>
            <p id="album">Gênero</p>
          </div>
          <img className="Divisao" src={linha} id="linha" />
          <div className="MusicasPagina">
          {musicasCurtidas.map((musica, index) => {
        return (
          <div className="Musica">
            <div className="MusicasNomes">
              <p id="numero">{index + 1}</p>
              <div className="Nomes">
                <p>{musica.title}</p>
                <p>{musica.artist}</p>
              </div>
            </div>
            <p id="musicaAlbum">{musica.genre}</p>
            <div className="MusicasSimbolos">
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

        </div>
        </div>
      </div>
    ); 
}

export default MusicasCurtidas