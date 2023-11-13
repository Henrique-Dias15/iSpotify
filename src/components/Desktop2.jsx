import React from "react";
import "./Desktop2.css";
import Artistas from "./Artistas";

function Desktop2() {
  return (
    <div className="Display">
      <div className="SideBar">
        <h1>iSpotify ®</h1>
        <div className="Artistas">
          <img src="src\assets\symbols\Roda.svg" alt="" />
          <p>Artistas</p>
        </div>
        <div className="MusicasCurtidas">
          <img src="src\assets\symbols\Coração Cheio.svg" />
          <p>Músicas Curtidas</p>
        </div>
        <div className="Logout">
          <img src="src\assets\symbols\logout.svg" />
          <p>Logout</p>
        </div>
      </div>
      <div className="Main2">
        <h1 id="titulo">Artistas</h1>
        <div className="divArtistas">
          <Artistas />
        </div>
      </div>
    </div>
  );
}

export default Desktop2;
