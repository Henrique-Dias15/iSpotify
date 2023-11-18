import React, {useEffect, useState} from 'react'
import "./PaginaCadastro.css"
import { Link } from "react-router-dom"
import api  from  "./api.js"


function PaginaCadastro () {

    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');
    const[name,setName] = useState('');
   

    async function handleSubmit() {
      try {
        await api.post("/users", {
          name: name,
          email: email,
          password: senha,
          role: "user",
        });
  
        console.log("deu certo");
      } catch (error) {
        
        alert(error.response?.data || "Erro desconhecido");
      }
    }
  

    const handleInscrever = () =>{
        return Navigate("/")
      };
      
    return (
        <div className='PaginaCadastro'>
        <div className='Titulos'>
            <h1>Inscrever-se em uma</h1>
            <h1>conta grátis do</h1>
            <h1>iSpotify ®</h1>
        </div>
        <div className='FormularioCadastro'>
            <input className="inputEmail"type="email"   value={email} onChange={(e) => {setEmail(e.target.value);}} placeholder='Email'/>
            <input className="inputPassword" type="password"  value={senha} onChange={(e) => {setSenha(e.target.value);}}  placeholder='Crie uma Senha'/>
            <input className="inputName" type="name" value={name} onChange={(e) => {setName(e.target.value);}} placeholder='Como devemos chamar você?'/>
            <button className='btnCadastrar' onClick={handleSubmit}>CADASTRAR</button>
            <div className='msgBottom'>
              <p>Ja é um usuário do iSpotify?  <Link to="/">FAÇA LOGIN</Link></p>
            </div>
        </div>
    </div>

)}



export default PaginaCadastro