import React from "react";
import "./Musicas.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const Musicas = ({ numero, musica, artista, album, id,}) => {
  const [coração, setCoração] = useState("src/assets/coraçãoDefault.svg");


  const [listaMusica, setListaMusica] = useState([
    {
      numero:"1",
      musica:"The Zephyr Song",
      artista:"Red Hot Chili Peppers",
      album:"By The Way",
    },
    {
      numero:"2",
      musica:"Talk",
      artista:"Coldplay",
      album:"X&Y",
    },
    {
      numero: "3",
      musica: "Firmamento",
      artista: "Cidade Negra",
      album: "Cidade Negra Acústico MTV",
    },
  ]);
  
  
  function removermusica(index) {
    const novaLista = listaMusica.filter((musica,i) => i !== index)
    setListaMusica(novaLista)
  }
  
 /*  const handleLixoClick = () => {
    window.location.replace(desk);
  }; */


  const changeCoração = (index) => {
    const linhacoração = coração;
    if(coração == "src/assets/coraçãoDefault.svg") {
      setCoração("src/assets/coraçãoVerde.svg");
    } else {
      setCoração("src/assets/coraçãoDefault.svg")
    }
  }

  return (
        <div>   
          {listaMusica.map((musica,index) => {
            return(
            <div className="Musica"> 
               <div className="MusicasNomes">
                  <p id="numero">{musica.numero}</p>
                  <div> 
                  <p>{musica.musica}</p>
                  <p>{musica.artista}</p>
                  </div>
                  </div>
                  <p id="musicaAlbum">{musica.album}</p>
                  <div className="MusicasSimbolos">
            <input type="image" id={id} src={coração} onClick = {() => changeCoração(index)}/>
            <input type="image" id="lixo" src="src\assets\lixo.svg" onClick={ () => removermusica(index)} />
                   
                  </div>
                </div>
            
          );
          })}
         
        </div>
  );
};

export default Musicas;
