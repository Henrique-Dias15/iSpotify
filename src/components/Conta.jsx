import React from "react";
import "./Conta.css";
import { useEffect, useState } from "react";
import api from "./api";
import { useNavigate } from "react-router-dom";
import coracao from "/src/assets/symbols/Coração Cheio.svg";
import roda from "/src/assets/symbols/roda.svg";
import rosto from "/src/assets/symbols/Conta.svg";
import logoutimg from "/src/assets/symbols/logout.svg";
import Modal from 'react-modal';


function Conta() {
  const navigate = useNavigate();
  const [useDados, changeDados] = useState ([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [novoEmail, setNovoEmail] = useState("");
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmaSenha, setConfirmaNovaSenha] = useState("");


  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor e opacidade do fundo do modal
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openModal2 = () => setModalOpen2(true);
  const closeModal2 = () => setModalOpen2(false);



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

  async function TrocarEmail(){
    try{
      await api.put(`/users/${useDados.id}`, {
        email : novoEmail,
      });
      dadosUser();
    }catch (error){
        alert(error.response?.data || "Erro desconhecido");
    }
  }

  async function TrocarSenha(){
    try{
      await api.put(`/users/${useDados.id}`, {
        password : novaSenha,
      });
      dadosUser();
    }catch (error){
        alert(error.response?.data || "Erro desconhecido");
    }
  }


  useEffect(() => {
    dadosUser();
  }, []); 

  function handleConfirmar(){
    TrocarEmail();
    closeModal();
  }

  function handleConfirmarSenha(){
    if( novaSenha === confirmaSenha /* adcionar verificação da senha atual */ ){
    TrocarSenha();
    closeModal2();
    } else 
      alert( "Informações sobre a senha estão erradas");
    
     
  }



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
            <input type="email" className="inputEmail" value={novoEmail}  onChange={(e) => {setNovoEmail(e.target.value); }}placeholder="Email"/>
            <div className="mdBotoes">
              <button id="mdCancelar" onClick={closeModal}>Cancelar</button>
              <button id="mdConfirmar" onClick={handleConfirmar}>Confirmar</button>
            </div>
          </Modal>
          <button className="btnTrocarSenha" onClick={openModal2}>Trocar Senha</button>
          <Modal style={customStyles} className="mdTrocaSenha" isOpen={isModalOpen2} onRequestClose={closeModal}>
            <h1>Nova Senha</h1>
            <input type="password" className="inputPassword"  placeholder="Senha atual"/>
            <input type="password" className="inputPassword" value={novaSenha}  onChange={(e) => {setNovaSenha(e.target.value); }}placeholder="Nova Senha"/>
            <input type="password" className="inputPassword" value={confirmaSenha}  onChange={(e) => {setConfirmaNovaSenha(e.target.value); }}placeholder="Confirmar nova Senha"/>
            <div className="mdBotoes">
              <button id="mdCancelar" onClick={closeModal2}>Cancelar</button>
              <button id="mdConfirmar" onClick={handleConfirmarSenha}>Confirmar</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Conta;
