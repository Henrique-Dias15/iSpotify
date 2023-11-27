import React from "react";
import "./Conta.css";
import { useEffect, useState } from "react";
import Musicas from "./Musicas.jsx";
import { useParams } from "react-router-dom";
import api from "./api";
import { useNavigate } from "react-router-dom";
import coracao from "/src/assets/symbols/Coração Cheio.svg";
import roda from "/src/assets/symbols/roda.svg";
import rosto from "/src/assets/symbols/Conta.svg";
import coracaonovo from "/src/assets/symbols/coraçãoDefault.svg";
import botaoplay from "/src/assets/symbols/botãoPlay.svg";
import pontos from "/src/assets/symbols/3pontos.svg";
import botaodownload from "/src/assets/symbols/botãoDownload.svg";
import logoutimg from "/src/assets/symbols/logout.svg";
import linha from "/src/assets/symbols/linha.svg";
import relogio from "/src/assets/symbols/relogio.svg";
import PaginaCadastro from "./PaginaCadastro";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Modal from 'react-modal';


function Conta() {
  const navigate = useNavigate();
  const [useDados, changeDados] = useState ([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor e opacidade do fundo do modal
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  async function logout() {
    try {
      await api.post("/users/logout", {});
      navigate("/");
    } catch (error) {
      alert(error.response?.data || "Erro desconhecido");
    }
  }

  async function dadosUser(){
    try {
      const response = await api.get("/users/user", {});
      changeDados(response.data);
    } catch (error){
        alert(error.response?.data || "Erro desconhecido");
    }
  }

  useEffect(() => {
    dadosUser();
  }, []); 

  return (
    <div className="Display">
      <div className="SideBar">
        <h1>iSpotify ®</h1>
        <div className="Artistas">
          <button
            onClick={() => {
              navigate(`/Desktop2`);
            }}
          >
            <img src={roda} />
            Artistas
          </button>
        </div>
        <div className="MusicasCurtidas">
          <button
            onClick={() => {
              navigate(`/MusicasCurtidas`);
            }}
          >
            <img src={coracao} />
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
            <img src={logoutimg} />
            Logout
          </button>
        </div>
      </div>
      <div className="PaginaLogin">
        <div className="FormularioConta">
          <h1>Minha Conta</h1>
              <div>
                <p className="inputName">{useDados.name}</p>
                <p className="inputEmail">{useDados.email}</p>
              </div>
          <button className="btnTrocarEmail" onClick={openModal}>Trocar Email</button>
          <Modal style={customStyles} className="mdTrocaSenha" isOpen={isModalOpen} onRequestClose={closeModal}>
            <h1>Novo Email</h1>
            <input type="email" className="inputEmail" placeholder="Email"/>
            <div className="mdBotoes">
              <button id="mdCancelar" onClick={closeModal}>Cancelar</button>
              <button id="mdConfirmar" onClick={closeModal}>Confirmar</button>
            </div>
          </Modal>
          <button className="btnTrocarSenha">Trocar Senha</button>
        </div>
      </div>
    </div>
  );
}

export default Conta;
