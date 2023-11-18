import React from 'react'
import "./PáginaLogIn.css"
import { Link } from "react-router-dom"
import PaginaCadastro from './PaginaCadastro'


function PáginaLogIn() {
  return (
    <div className='PaginaLogin'>
        <div className='Titulos'>
            <h1>iSpotify ®</h1>
            <h2>Música para todos.</h2>
        </div>
        <div className='Formulario'>
            <input className="inputEmail"type="email" placeholder='Email'/>
            <input className="inputPassword" type="password" placeholder='Senha'/>
            <button className='btnEntrar'>ENTRAR</button>
            <div className='msgBottom'>
              <p>NÃO TEM UMA CONTA ?  <a href='PaginaCadastro'>INSCREVA-SE</a></p>
            </div>
        </div>
    </div>
  )
}

export default PáginaLogIn