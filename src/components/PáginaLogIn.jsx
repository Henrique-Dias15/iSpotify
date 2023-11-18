import React from 'react'
import "./PáginaLogIn.css"


function PáginaLogIn() {
  return (
    <div className='PaginaLogin'>
        <div className='Titulos'>
            <h1>iSpotify ®</h1>
            <h2>Música para todos.</h2>
        </div>
        
        <div className='Formulario'>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Senha'/>
        </div>
    </div>
  )
}

export default PáginaLogIn