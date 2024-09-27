import "./style.css";
import NavBar from "../../Components/NavBar";
import styled from "styled-components";

import React from "react";
import axios from "axios";
import "../../index.js";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$inputColor || "#FF6600"};
  background: white;
  border: solid 0.5px;
  border-radius: 3px;
  width: 80%;
`;

const Button = styled.button`
    width: 85%;
    height: 20%;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    background-color: #FF6600;
    border-radius: 50px;
    border: none;
    box-shadow: 0px 4px 16px 0px #00000025;
    cursor: pointer;
    margin-top: 30px;
`;

class Cadastrar extends React.Component {
    render() {
        return (
            <>

                <NavBar />

                <div className="body-cadastro">

                    <div className="container-cadastro">

                        <span className="title-cadastro">Cadastre o seu Voo</span>

                        <span className="etiqueta-input-cadastro">Companhia Aérea</span>
                        <Input defaultValue="Latam" type="text" id="companhiaAerea" />

                        <span className="etiqueta-input-cadastro">Aeroporto Ida</span>
                        <Input defaultValue="Londres" type="text" id="aeroportoIda" />

                        <span className="etiqueta-input-cadastro">Aeroporto Volta</span>
                        <Input defaultValue="Guarulhos" type="text" id="aeroportoVolta" />

                        <span className="etiqueta-input-cadastro">Data Ida</span>
                        <Input defaultValue="26/09/2025" type="date" id="dataIda" />

                        <span className="etiqueta-input-cadastro">Data Volta</span>
                        <Input defaultValue="26/09/2025" type="date" id="dataVolta" />

                        <span className="etiqueta-input-cadastro">Horário Ida</span>
                        <Input defaultValue="08:00" type="text" id="horarioIda" />

                        <span className="etiqueta-input-cadastro">Horário Volta</span>
                        <Input defaultValue="08:00" type="text" id="horarioVolta" />

                        <Button type="button" onClick={cadastraVoo}>Cadastrar Voo</Button>
                    </div>
                </div>
            </>
        );
    }
}

function cadastraVoo() {

    alert("Voo cadastrado!")

    const companhia = document.getElementById('companhiaAerea').value;
    const aeroportoIda = document.getElementById('aeroportoIda').value;
    const aeroportoVolta = document.getElementById('aeroportoVolta').value;
    const dataIda = document.getElementById('dataIda').value;
    const dataVolta = document.getElementById('dataVolta').value;
    const horaIda = document.getElementById('horarioIda').value;
    const horaVolta = document.getElementById('horarioVolta').value;
    const voo = { companhia, aeroportoIda, aeroportoVolta, dataIda, dataVolta, horaIda, horaVolta };

    console.log(voo);
    axios.post('https://api-mpa-flightly-mn44.onrender.com/voo', voo);
}

export default Cadastrar;