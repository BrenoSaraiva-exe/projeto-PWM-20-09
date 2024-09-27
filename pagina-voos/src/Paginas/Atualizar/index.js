import "./style.css";
import NavBar from "../../Components/NavBar";
import styled from "styled-components";
import React from "react";
import axios from "axios";

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
    height: 80px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    background-color: #FF6600;
    border-radius: 80px;
    border: none;
    box-shadow: 0px 4px 16px 0px #00000025;
    cursor: pointer;
    margin-top: 30px;
`;

class Atualizar extends React.Component {
    render() {
        return (
            <>

                <NavBar />

                <div className="body-atualizar">

                    <div className="container-atualizar">

                        <span className="title-atualizar">Atualize os Dados do Voo</span>

                        <span className="etiqueta-input-atualizar">Companhia Aérea</span>
                        <Input defaultValue="Latam" type="text" />

                        <span className="etiqueta-input-atualizar">Aeroporto Ida</span>
                        <Input defaultValue="Londres" type="text" />

                        <span className="etiqueta-input-atualizar">Aeroporto Volta</span>
                        <Input defaultValue="Guarulhos" type="text" />

                        <span className="etiqueta-input-atualizar">Data Ida</span>
                        <Input defaultValue="26/09/2025" type="date" />

                        <span className="etiqueta-input-atualizar">Data Volta</span>
                        <Input defaultValue="26/09/2025" type="date" />

                        <span className="etiqueta-input-atualizar">Horário Ida</span>
                        <Input defaultValue="08:00" type="text" />

                        <span className="etiqueta-input-atualizar">Horário Volta</span>
                        <Input defaultValue="08:00" type="text" />

                        <Button type="button" onClick={atualizaVoo}>Atulizar Voo</Button>
                    </div>
                </div>
            </>
        );
    }
}

function atualizaVoo() {
    const companhiaAerea = document.getElementById('companhiaAerea').value;
    const aeroportoIda = document.getElementById('aeroportoIda').value;
    const aeroportoVolta = document.getElementById('aeroportoVolta').value;
    const dataIda = document.getElementById('dataIda').value;
    const dataVolta = document.getElementById('dataVolta').value;
    const horarioIda = document.getElementById('horarioIda').value;
    const horarioVolta = document.getElementById('horarioVolta').value;
    const voo = { companhiaAerea, aeroportoIda, aeroportoVolta, dataIda, dataVolta, horarioIda, horarioVolta };

    console.log(voo);
    axios.put(`https://api-mpa-flightly-mn44.onrender.com/voo${voo.id}`, voo);
}

export default Atualizar;