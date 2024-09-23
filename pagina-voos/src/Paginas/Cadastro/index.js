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
`;

class Cadastrar extends React.Component{
    render(){
        return(
            <>
                <div className="container-cadastro">
                
                <span>Companhia Aérea</span>
                <Input defaultValue="Latam" type="text" />

                <span>Companhia Aérea</span>
                <Input defaultValue="Latam" type="text" />

                </div>
            </>
        );
    }
}

export default Cadastrar;