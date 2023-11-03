import React from "react";
import "./Desktop1.css";
import Musicas from "./Musicas.jsx"

function Desktop1() {
  return (
    <div className="Display">
      <div className="SideBar"></div>

      <div className="Main">
        <div className="Infos">
          <img src="src/assets/album.png" alt="" />

          <div className="InfosTexto">
            <h2>Playlist</h2>
            <h1>Daily Mix 1</h1>
            <h2>Red Hot Chili Peppers, Coldplay e mais</h2>

            <div className="InfosQuantidades">
              <h3>Spotify - 50 músicas</h3>
              <p>1h 7min</p>
            </div>
          </div>
        </div>

        <div className="Botões">
          <input type="image" src="src/assets/botãoPlay.svg" id="play" />
          <input type="image" src="src\assets\coraçãoDefault.svg" id="coração" />
          <input type="image" src="src/assets/botãoDownload.svg"  id="download" />
          <input type="image" src="src/assets/3pontos.svg"  id="pontos" />
        </div>

        <div className="Playlist">
          <div className="Cabeçalho">
            <p id="titulo">#TÍTULO</p>
            <p id="album">ÁLBUM</p>
            <img src="src/assets/relogio.svg" alt="" id="relogio" />
          </div>
          <img src="src/assets/linha.svg" alt="" />

          <div className="Musicas">
            <Musicas numero = {1} musica = "The Zephyr Song" artista = "Red Hot Chili Peppers" album = "By The Way" id = "coraçãomsc1" />
            <Musicas numero = {2} musica = "Cidade Negra" artista = "Firmamento" album = "Cidade Negra Acústico MTV" id = "coraçãomsc3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
