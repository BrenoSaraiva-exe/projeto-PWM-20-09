import style from "./style.css";
import styled from "styled-components";
import React from "react";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$inputColor || "#BF4F74"};
  background: white;
  border: solid 0.5px;
  border-radius: 3px;
  width: 80%;
`;

class Cadastrar extends React.Component{
    render(){
        return(
            <div className="body-cadastro">
                <div className="container-cadastro">

                <span className="title-cadastro">Cadastre o seu Voo</span>
                
                <span className="etiqueta-input-cadastro">Companhia Aérea</span>
                <Input defaultValue="Latam" type="text" />

                <span className="etiqueta-input-cadastro">Companhia Aérea</span>
                <Input defaultValue="Latam" type="text" />

                </div>
            </div>
        );
    }
}

export default Cadastrar;