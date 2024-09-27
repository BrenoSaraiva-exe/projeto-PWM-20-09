import React from "react";
import axios from 'axios';
import ListaVoos from "../../Components/Voos/ListaVoos";
import NavBar from "../../Components/NavBar";
import { useEffect, useState } from 'react';
        

export default function Delete() {

        const [voos, setVoos] = useState([]);

        useEffect(()=>{carregaVoos();}, []);

        function carregaVoos(){
        axios.get('https://api-mpa-flightly-mn44.onrender.com/voo')
        .then(res=>{
        setVoos(res.data);
        console.log(voos);
      });
    }
        
        return(
            <>
                <NavBar/>
                <ListaVoos isDelete={"true"}></ListaVoos>
                <spam> Teste de Deletar</spam>
            </>
        );

}
