import React from 'react'
import "./PaginaCadastro.css"
import { Link } from "react-router-dom"


function PaginaCadastro () {

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
        <div className='Formulario'>
            <input className="inputEmail"type="email" placeholder='Email'/>
            <input className="inputPassword" type="password" placeholder='Crie uma Senha'/>
            <input className="inputName" type="name" placeholder='Como devemos chamar você?'/>
            <button className='btnCadastrar'>CADASTRAR</button>
            <div className='msgBottom'>
              <p>Ja é um usuário do iSpotify?  <Link to="/">FAÇA LOGIN</Link></p>
            </div>
        </div>
    </div>

)}



export default PaginaCadastro