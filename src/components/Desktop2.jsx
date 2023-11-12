import React from "react";
import "./Desktop2.css";
import Artistas from "./Artistas";
function Desktop2() {
  return (
    <div className="Display">
      <div className="SideBar">
        <h1>iSpotify ®</h1>
        <div className="Artistas">
          <img src="src\assets\Roda.svg" alt="" />
          <p>Artistas</p>
        </div>
        <div className="MusicasCurtidas">
          <img src="src\assets\Coração Cheio.svg" />
          <p>Músicas Curtidas</p>
        </div>
        <div className="Logout">
          <img src="src\assets\logout.svg" />
          <p>Logout</p>
        </div>
      </div>
      <div className="Main">
        <h1>Artistas</h1>
        <div className="divArtistas"></div>
        <Artistas></Artistas> 
      </div>
    </div>
  );
}

/* Engenheiros do Hawaii
[
  {
    "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
    "height": 300,
    "width": 300
  }
] */

export default Desktop2;
