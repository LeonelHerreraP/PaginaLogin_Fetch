import './styles/PaginaUsuario.css';
import React, { useState } from 'react';
import { useRef } from "react";
import TarjetaPersona from './TarjetaPersona';
import Swal from 'sweetalert2'


function PaginaUsuario() {
    // Inputs
    const nombre = useRef("");
    const apellido = useRef("");

    // Datos de la persona
    const [state, setState] = useState({})

    //Para saber si ya se buscó una persona
    const [busquedaActiva, setBusquedaActiva] = useState(0);

    async function getResponse(e) {
        //Para que no se refresque la pagina
        e.preventDefault();
        if(nombre.current.value !== "" && apellido.current.value !== ""){
            const response = await fetch(
                'https://localhost:7255/BuscarAutor',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain',
                        "Content-Type": "application/json; charset=utf-8"
                    },
                    mode: 'cors',
                    body: JSON.stringify({
                        nombre: nombre.current.value,
                        apellido: apellido.current.value
                    })
                }
            );
            // Control error
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const persona = await response.json();
            // Verificar que no llego null
            if (persona) {
                setState(persona);
            }
            setBusquedaActiva(1);
        }
        else{
            // Alerta en caso de que los campos esten vacios
            Swal.fire({
                icon: 'question',
                title: 'Oops...',
                text: 'Campos vacíos!'
              });
        }
    }

    // Funcion que quita la tarjeta con los datos
    function limpiarCard(e) {
        e.preventDefault();
        setBusquedaActiva(0);
        // Limpiar los inputs
        nombre.current.value = "";
        apellido.current.value = "";
    }

    return (
        <div className='cuerpo'>
            <div className="grid-container divGrid ">
                <div className='grid-item card tarjeta'>
                    <h1 className='h1_usuarios'>Usuarios</h1>
                    <br></br>
                    <form className='p-3'>
                        <div className='mb-2'>
                            <label className='form-label d-block'>Nombre</label>
                            <input ref={nombre} className='form-control' id='nombre' name="nombre" type="text"></input>
                        </div>
                        <div className='mb-2'>
                            <label className='form-label'>Apellido</label>
                            <input ref={apellido} className='form-control' id='apellido' name="apellido" type="text"></input>
                        </div>
                        <button onClick={getResponse} className='botonEntrar'>Buscar</button>
                        <button onClick={limpiarCard} className='botonEntrar mt-2'>Limpiar</button>

                    </form>
                </div>
                {/* Solo se muestra la tarjeta si se dió al btn de busqueda*/
                 busquedaActiva === 1 &&
                    <div className='card grid-item'>
                        <TarjetaPersona Prop={state} />
                    </div>
                }

            </div>
        </div>
    );
}

export default PaginaUsuario;
