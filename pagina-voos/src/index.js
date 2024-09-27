import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

import App from './App';
import Cadastro from './Paginas/Cadastro';
import Atualizar from './Paginas/Atualizar';
import Deletar from './Paginas/Deletar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="Paginas/Cadastro" element={<Cadastro/>}/>
        <Route path="Paginas/Atualizar" element={<Atualizar/>}/>
        <Route path="Paginas/Deletar" element={<Deletar/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
