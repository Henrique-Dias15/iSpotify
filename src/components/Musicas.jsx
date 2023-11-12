import React from "react";
import "./Musicas.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Musicas = ({ numero, musica, artista, album, id }) => {
  const [listaMusica, setListaMusica] = useState([
    {
      numero: "1",
      musica: "The Zephyr Song",
      artista: "Red Hot Chili Peppers",
      album: "By The Way",
      coração: "src/assets/coraçãoDefault.svg",
    },
    {
      numero: "2",
      musica: "Talk",
      artista: "Coldplay",
      album: "X&Y",
      coração: "src/assets/coraçãoDefault.svg",
    },
    {
      numero: "3",
      musica: "Firmamento",
      artista: "Cidade Negra",
      album: "Cidade Negra Acústico MTV",
      coração: "src/assets/coraçãoDefault.svg",
    },
  ]);

  function removermusica(index) {
    const novaLista = listaMusica.filter((musica, i) => i !== index);
    setListaMusica(novaLista);
  }

  function changeCoração(index) {
    setListaMusica(
      listaMusica.map((musicas, i) => {
        if (i === index) {
          if (musicas.coração === "src/assets/coraçãoDefault.svg") {
            return { ...musicas, coração: "src/assets/coraçãoVerde.svg" };
          } else {
            return { ...musicas, coração: "src/assets/coraçãoDefault.svg" };
          }
        } else {
          return { ...musicas };
        }
      })
    );
  }

  return (
    <div>
      {listaMusica.map((musica, index) => {
        return (
          <div className="Musica">
            <div className="MusicasNomes">
              <p id="numero">{index + 1}</p>
              <div>
                <p>{musica.musica}</p>
                <p>{musica.artista}</p>
              </div>
            </div>
            <p id="musicaAlbum">{musica.album}</p>
            <div className="MusicasSimbolos">
              <input
                type="image"
                id={id}
                src={musica.coração}
                onClick={() => changeCoração(index)}
              />
              <input
                type="image"
                id="lixo"
                src="src\assets\lixo.svg"
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
