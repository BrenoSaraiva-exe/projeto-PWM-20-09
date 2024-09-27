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

class Atualizar extends React.Component {
    render() {
        const { voo } = ;
        return (
            <>

                <NavBar />

                <div className="body-atualizar">

                    <div className="container-atualizar">

                        <span className="title-atualizar">Atualize os Dados do Voo</span>

                        <span className="etiqueta-input-atualizar">Companhia Aérea</span>
                        <Input defaultValue={voo.companhiaAerea} type="text" />

                        <span className="etiqueta-input-atualizar">Aeroporto Ida</span>
                        <Input defaultValue={voo.aeroportoIda} type="text" />

                        <span className="etiqueta-input-atualizar">Aeroporto Volta</span>
                        <Input defaultValue={voo.aeroportoVolta} type="text" />

                        <span className="etiqueta-input-atualizar">Data Ida</span>
                        <Input defaultValue={voo.dataIda} type="date" />

                        <span className="etiqueta-input-atualizar">Data Volta</span>
                        <Input defaultValue={voo.dataVolta} type="date" />

                        <span className="etiqueta-input-atualizar">Horário Ida</span>
                        <Input defaultValue={voo.horaIda} type="text" />

                        <span className="etiqueta-input-atualizar">Horário Volta</span>
                        <Input defaultValue={voo.horaVolta} type="text" />

                        <Button type="button" onClick={atualizaVoo}>Atualizar Voo</Button>
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
    const horaIda = document.getElementById('horaIda').value;
    const horaVolta = document.getElementById('horaVolta').value;
    const voo = { companhiaAerea, aeroportoIda, aeroportoVolta, dataIda, dataVolta, horaIda, horaVolta };

    console.log(voo);
    axios.put(`https://api-mpa-flightly-mn44.onrender.com/voo/${voo._id}`, voo);
}

export default Atualizar;