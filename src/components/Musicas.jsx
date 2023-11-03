import React from "react";
import "./Musicas.css";
import { useState } from "react";

const Musicas = ({ numero, musica, artista, album, id }) => {
  const [coração, setCoração] = useState("src/assets/coraçãoDefault.svg");

  const changeCoração = () => {
    if(coração == "src/assets/coraçãoDefault.svg") {
      setCoração("src/assets/coraçãoVerde.svg");
    } else {
      setCoração("src/assets/coraçãoDefault.svg")
    }
  }

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
        <input type="image" id={id} src={coração} onClick = {() => changeCoração()}/>
        <img src="src\assets\lixo.svg" id="lixo"/>
      </div>
    </div>
  );
};

export default Musicas;
