import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react'
import Swal from 'sweetalert2';

function PaginaInicio() {
  // Inputs
  const user = useRef("");
  const password = useRef("");
  const nav = useNavigate();

  // Datos login
  const userDefinido = "Admin";
  const passDefinido = "123456";

  function verificar(e) {
    e.preventDefault();

    // Que no es esten vacios los inputs
    if (user.current.value !== "" && password.current.value !== "") {
      // Que los inputs coincidan con los "Datos login"
      if (user.current.value !== userDefinido && password.current.value !== passDefinido) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrectos!'
        });
      }
      else {
        // Dirigir a pagina usuario
        nav("/usuario");
      }
    }
    else {
      Swal.fire({
        icon: 'question',
        title: 'Oops...',
        text: 'Campos vacíos!'
      });
    }

  }

  return (
    <div className="App row">
      <div className='col divIzq'></div>
      <div className='col divDer'>
        <div id='divLogin' className=''>
          <img src="/imgs/user-icon.png" alt='user-icon' className="App-logo mb-3"></img>
          <h3 className='mb-3'>Iniciar Sesión</h3>
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-transparent border-end-0" id="basic-addon1"><img src="/imgs/usuario.png" alt="icon-user" className='icono'></img></span>
              </div>
              <input ref={user} type="text" className="form-control border-start-0" placeholder="Usuario" ></input>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-transparent border-end-0" id="basic-addon1"><img src="/imgs/key.png" alt="icon-key" className='icono'></img></span>
              </div>
              <input ref={password} type="password" className="form-control border-start-0" placeholder="Password"></input>
            </div>

            <button className='mt-3 botonEntrar' onClick={verificar}>Entrar</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default PaginaInicio;
