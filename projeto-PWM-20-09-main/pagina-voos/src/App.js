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
      <h1>Lista Voos</h1>
      <ListaVoos voos={voos} carregaVoos={carregaVoos} isDelete={"false"} />
    </>
  );
}

export default App;