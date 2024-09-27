import './App.css';
import NavBar from "./Components/NavBar";
import axios from 'axios';
import ListaVoos from "./Components/Voos/ListaVoos/index.js"
import { useEffect, useState } from 'react';

function App() {
  const [voos, setVoos] = useState([]);
  useEffect(() => {
    carregaVoos();
  }, []);


  function carregaVoos() {
    axios.get('https://api-mpa-flightly-mn44.onrender.com/voo')
      .then(res => {
        setVoos(res.data);
        console.log(voos);
      });
  }



  return (
    <>
      <NavBar />
      <div className='body-listagem'>
        <h1>Listagem de Voos</h1>
        <ListaVoos voos={voos} carregaVoos={carregaVoos} isDelete={true} />
      </div>
    </>
  );
}

export default App;