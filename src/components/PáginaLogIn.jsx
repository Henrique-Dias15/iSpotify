import React,{useState} from 'react'
import "./PáginaLogIn.css"
import { useNavigate} from "react-router-dom"
import PaginaCadastro from './PaginaCadastro'
import api  from  "./api.js"


function PáginaLogIn() {


  const[emailLogin,setEmailLogin] = useState('');
  const[senhaLogin,setSenhaLogin] = useState('');
  const navigate = useNavigate();
 

  async function login() {
    try {
      await api.post("/users/login", {
        email: emailLogin,
        password: senhaLogin,
      });
      navigate('/Desktop2');
      console.log("deu certo");
    } catch (error) {
      
      alert(error.response?.data || "Erro desconhecido");
    }
  }





  return (
    <div className='PaginaLogin'>
        <div className='Titulos'>
            <h1>iSpotify ®</h1>
            <h2>Música para todos.</h2>
        </div>
        <div className='FormularioLogin'>
            <input className="inputEmail" type="email"  value={emailLogin} onChange={(e) => {setEmailLogin(e.target.value);}} placeholder='Email'/>
            <input className="inputPassword" type="password" value={senhaLogin} onChange={(e) => {setSenhaLogin(e.target.value);}}  placeholder='Senha'/>
            <button className='btnEntrar' onClick={login} >ENTRAR</button>
            <div className='msgBottom'>
              <p>NÃO TEM UMA CONTA ?  <a href='PaginaCadastro'>INSCREVA-SE</a></p>
            </div>
        </div>
    </div>
  )
}

export default PáginaLogIn