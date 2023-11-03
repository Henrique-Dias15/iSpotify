import React from "react";
import "./Musicas.css";

const Musicas = ({ numero, musica, artista, album, id }) => {
  return (
    <div className="Musica">
      <div className="MusicasNomes">
        <p id="numero">{numero}</p>
        <div>   
          <p>{musica}</p>
          <p>{artista}</p>
        </div>
      </div>
      <p id="musicaAlbum">{album}</p>
      <div className="MusicasSimbolos">
        <input type="image" id={id} src="src/assets/coraçãoDefault.svg"/>
        <img src="src/assets/lixo.svg" id="lixo" />
      </div>
    </div>
  );
};

export default Musicas;
