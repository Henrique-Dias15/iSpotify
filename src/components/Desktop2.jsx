import React from "react";
import "./Desktop2.css";
import Artistas from "./Artistas";
import api from "./api.js";
import { useNavigate } from "react-router-dom";
import rosto from "/src/assets/symbols/Conta.svg";

function Desktop2() {
  const navigate = useNavigate();

  async function logout() {
    try {
      await api.post("/users/logout", {});
      navigate("/");
    } catch (error) {
      alert(error.response?.data || "Erro desconhecido");
    }
  }

  return (
    <div className="Display">
      <div className="SideBar">
        <h1>iSpotify ®</h1>
        <div className="Artistas">
          <img src="src\assets\symbols\Roda.svg" alt="" />
          <p>Artistas</p>
        </div>
        <div className="MusicasCurtidas">
          <button
            onClick={() => {
              navigate(`/MusicasCurtidas`);
            }}
          >
            <img src="src\assets\symbols\Coração Cheio.svg" />
            <p>Músicas Curtidas</p>
          </button>
        </div>
        <div className="MinhaConta">
          <button
            onClick={() => {
              navigate(`/PaginaConta`);
            }}
          >
            <img src={rosto} />
            <p>Minha Conta</p>
          </button>
        </div>
        <div className="Logout">
          <button onClick={logout}>
            {" "}
            <img src="src\assets\symbols\logout.svg" />
            Logout
          </button>
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
