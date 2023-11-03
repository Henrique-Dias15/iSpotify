import React from "react";
import "./Musicas.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const Musicas = ({ numero, musica, artista, album, id,desk  }) => {
  const [coração, setCoração] = useState("src/assets/coraçãoDefault.svg");
  
  const handleLixoClick = () => {
    window.location.replace(desk);
  };


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
        <Link to={desk}><img src="src\assets\lixo.svg" id="lixo" onClick={handleLixoClick}/> </Link>
      </div>
    </div>
  );
};

export default Musicas;
