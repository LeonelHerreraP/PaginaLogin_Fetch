import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import PaginaInicio from './PaginaInicio';
import PaginaUsuario from './PaginaUsuario';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PaginaInicio />}/>
      <Route path="/usuario" element={<PaginaUsuario />}/>
    </Routes>
  );
}

export default App;
