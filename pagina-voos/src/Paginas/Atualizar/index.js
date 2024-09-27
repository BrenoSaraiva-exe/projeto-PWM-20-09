import "./style.css";
import NavBar from "../../Components/NavBar";
import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useLocation } from 'react-router';

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
    height: 100px;
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

export default function Atualizar() {


        const location = useLocation();
        const { state } = location;
        const voo = state;
        console.log(voo)
        return (
            <>

                <NavBar />

                <div className="body-atualizar">

                    <div className="container-atualizar">

                        <span className="title-atualizar">Atualize os Dados do Voo</span>

                        <span className="etiqueta-input-atualizar">Companhia Aérea</span>
                        <Input defaultValue={voo.companhia} type="text" id="companhiaAerea"/>

                        <span className="etiqueta-input-atualizar">Aeroporto Ida</span>
                        <Input defaultValue={voo.aeroportoIda} type="text" id="aeroportoIda"/>

                        <span className="etiqueta-input-atualizar">Aeroporto Volta</span>
                        <Input defaultValue={voo.aeroportoVolta} type="text" id="aeroportoVolta"/>

                        <span className="etiqueta-input-atualizar">Data Ida</span>
                        <Input defaultValue={voo.dataIda.split('T')[0]} type="date" id="dataIda"/>

                        <span className="etiqueta-input-atualizar">Data Volta</span>
                        <Input defaultValue={voo.dataVolta.split('T')[0]} type="date" id="dataVolta"/>

                        <span className="etiqueta-input-atualizar">Horário Ida</span>
                        <Input value={voo.horaIda} type="text" id="horaIda"/>

                        <span className="etiqueta-input-atualizar">Horário Volta</span>
                        <Input value={voo.horaVolta} type="text" id="horaVolta"/>

                        <input hidden value={voo._id} id="id"></input>

                        <Button type="button" onClick={atualizaVoo}>Atualizar Voo</Button>
                    </div>
                </div>
            </>
        );
    


function atualizaVoo() {
    const companhia = document.getElementById('companhiaAerea').value;
    const aeroportoIda = document.getElementById('aeroportoIda').value;
    const aeroportoVolta = document.getElementById('aeroportoVolta').value;
    const dataIda = document.getElementById('dataIda').value;
    const dataVolta = document.getElementById('dataVolta').value;
    const horaIda = document.getElementById('horaIda').value;
    const horaVolta = document.getElementById('horaVolta').value;
    const id = document.getElementById('id').value;
    const voo = { id, companhia, aeroportoIda, aeroportoVolta, dataIda, dataVolta, horaIda, horaVolta };

    console.log(voo);

    axios.put(`https://api-mpa-flightly-mn44.onrender.com/voo/${voo.id}`, voo).then(alert('Voo alterado com sucesso')).catch((err)=>alert(err));
}

}