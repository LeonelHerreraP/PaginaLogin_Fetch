import './App.css';
import React from 'react';


function TarjetaPersona({ Prop }) {
    // Fotos de usuario hombre/mujer
    let mujer = "https://imi.migracion.gob.do/foto/silueta/silueta-dgm-m.png";
    let hombre = "https://imi.migracion.gob.do/foto/silueta/silueta-dgm-h.png";
    let icono = "";

    // Verificar si es mujer o hombre
    if (Prop.genero === "F") {
        icono = mujer;
    } else {
        icono = hombre;
    }

    return (
        <div className='mx-auto'>
            <img className='fotico' alt='iconGenero' src={icono}></img>
            <table className='table mt-3 tablecita ms-auto me-auto pt-1'>
                <tbody>
                    <tr className=''>
                        <th className=''>ID Autor</th>
                        <td>{Prop.id_autor}</td>
                    </tr>
                    <tr>
                        <th>Nombre</th>
                        <td>{Prop.nombre}</td>
                    </tr>
                    <tr>
                        <th>Apellido</th>
                        <td>{Prop.apellido}</td>
                    </tr>
                    <tr>
                        <th>Telefono</th>
                        <td>{Prop.telefono}</td>
                    </tr>
                    <tr>
                        <th>Direccion</th>
                        <td>{Prop.direccion}</td>
                    </tr>
                    <tr>
                        <th>Ciudad</th>
                        <td>{Prop.ciudad}</td>
                    </tr>
                    <tr>
                        <th>Estado</th>
                        <td>{Prop.estado}</td>
                    </tr>
                    <tr>
                        <th>Pais</th>
                        <td>{Prop.pais}</td>
                    </tr>
                    <tr>
                        <th>Cod Postal</th>
                        <td>{Prop.cod_postal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default TarjetaPersona;


