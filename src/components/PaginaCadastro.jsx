import React, { useEffect, useState } from "react";
import "./PaginaCadastro.css";
import { Link, useNavigate } from "react-router-dom";
import api from "./api.js";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import styled from "styled-components";

function PaginaCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const inputs = [email, senha, name];
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  async function inscrever() {
    try {
      await api.post("/users", {
        name: name,
        email: email,
        password: senha,
        role: "user",
      });
      navigate("/");
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

  function handleClick() {
    verificarInputsVazios(inputs);
    if (verificarInputsVazios(inputs)) {
      setMostrarAlerta(true);
    } else {
      inscrever();
    }
  }

  const handleCloseAlerta = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMostrarAlerta(false);
  };

  return (
    <div className="PaginaCadastro">
      <div className="Titulos">
        <h1>Inscrever-se em uma</h1>
        <h1>conta grátis do</h1>
        <h1>iSpotify ®</h1>
      </div>
      <div className="FormularioCadastro">
        <input
          className="inputEmail"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          className="inputPassword"
          type="password"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
          placeholder="Crie uma Senha"
        />
        <input
          className="inputName"
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Como devemos chamar você?"
        />
        <button className="btnCadastrar" onClick={handleClick}>
          CADASTRAR
        </button>
        <div className="msgBottom">
          <p>
            Ja é um usuário do iSpotify? <Link to="/">FAÇA LOGIN</Link>
          </p>
        </div>
      </div>
      <div>
        <Stack className="Alerta" sx={{ width: "200%" }} spacing={2}>
          <Snackbar
            open={mostrarAlerta}
            autoHideDuration={6000}
            onClose={handleCloseAlerta}
          >
            <Alert className="Alerta" severity="error">
              <AlertTitle className="Alerta">Error</AlertTitle>
              Um dos campos está vazio —{" "}
              <strong className="Alerta">Verifique!</strong>
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
}

export default PaginaCadastro;
