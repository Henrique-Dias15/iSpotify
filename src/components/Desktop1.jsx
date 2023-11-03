import React from "react";
import "./Desktop1.css";

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
          <img src="src/assets/botãoPlay.svg" alt="" id="play" />
          <img src="src/assets/coraçãoDefault.svg" alt="" id="coração" />
          <img src="src/assets/botãoDownload.svg" alt="" id="download" />
          <img src="src/assets/3pontos.svg" alt="" id="pontos" />
        </div>

        <div className="Playlist">
          <div className="Cabeçalho">
            <p id="titulo">#TÍTULO</p>
            <p id="album">ÁLBUM</p>
            <img src="src/assets/relogio.svg" alt="" id="relogio" />
          </div>
          <img src="src/assets/linha.svg" alt="" />

          <div className="Musicas">
            <div className="Um">
              <div className="MusicasNomes">
                <p id="numero">1</p>
                <div>
                  <p>The Zephyr Song</p>
                  <p>Red Hot Chili Peppers</p>
                </div>
              </div>
              <p id="musicaAlbum">By The Way</p>
              <div className="MusicasSimbolos">
                <img
                  src="src/assets/coraçãoDefault.svg"
                  alt=""
                  id="coraçãomsc"
                />
                <img src="src/assets/lixo.svg" alt="" id="lixo" />
              </div>
            </div>

            <div className="Dois">
              <div className="MusicasNomes">
                <p id="numero">2</p>
                <div>
                  <p>Talk</p>
                  <p>Coldplay</p>
                </div>
              </div>
              <p id="musicaAlbum">X&Y</p>
              <div className="MusicasSimbolos">
                <img
                  src="src/assets/coraçãoDefault.svg"
                  alt=""
                  id="coraçãomsc"
                />
                <img src="src/assets/lixo.svg" alt="" id="lixo" />
              </div>
            </div>

            <div className="Tres">
              <div className="MusicasNomes">
                <p id="numero">3</p>
                <div>
                  <p>Cidade Negra</p>
                  <p>Firmamento</p>
                </div>
              </div>
              <p id="musicaAlbum">Cidade Negra Acústico MTV</p>
              <div className="MusicasSimbolos">
                <img
                  src="src/assets/coraçãoDefault.svg"
                  alt=""
                  id="coraçãomsc"
                />
                <img src="src/assets/lixo.svg" alt="" id="lixo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
