import React, { useState } from "react";
import "./PáginaLogIn.css";
import { useNavigate } from "react-router-dom";
import PaginaCadastro from "./PaginaCadastro";
import api from "./api.js";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

function PáginaLogIn() {
  const [emailLogin, setEmailLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  const navigate = useNavigate();
  const inputs = [emailLogin, senhaLogin];
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  async function login() {
    try {
      await api.post("/users/login", {
        email: emailLogin,
        password: senhaLogin,
      });
      navigate("/Desktop2");
      console.log("deu certo");
    } catch (error) {
      alert(error.response?.data || "Erro desconhecido");
    }
  }

  function verificarInputsVazios(inputs) {
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i] || inputs[i].trim() === "") {
        return true;
      }
    }
    return false;
  }

  const handleClick = () => {
    if (verificarInputsVazios(inputs)) {
      setMostrarAlerta(true);
    } else {
      login();
    }
  };

  const handleCloseAlerta = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMostrarAlerta(false);
  };

  return (
    <div className="PaginaLogin">
      <div className="Titulos">
        <h1>iSpotify ®</h1>
        <h2>Música para todos.</h2>
      </div>
      <div className="FormularioLogin">
        <input
          className="inputEmail"
          type="email"
          value={emailLogin}
          onChange={(e) => {
            setEmailLogin(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          className="inputPassword"
          type="password"
          value={senhaLogin}
          onChange={(e) => {
            setSenhaLogin(e.target.value);
          }}
          placeholder="Senha"
        />

        <button className="btnEntrar" onClick={handleClick}>
          ENTRAR
        </button>
        <div className="msgBottom">
          <p>
            NÃO TEM UMA CONTA ? <a href="PaginaCadastro">INSCREVA-SE</a>
          </p>
        </div>
      </div>
      <div className="Alerta">
        <Stack sx={{ width: "200%" }} spacing={2}>
          <Snackbar
            open={mostrarAlerta}
            autoHideDuration={6000}
            onClose={handleCloseAlerta}
          >
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Um dos campos está vazio — <strong>Verifique!</strong>
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
}

export default PáginaLogIn;
