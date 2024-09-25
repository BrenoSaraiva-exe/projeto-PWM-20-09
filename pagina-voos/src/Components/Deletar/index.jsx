import style from "styled-components";
import React from "react";

const PopUp = style.div`
    width: 450px;
    height: 350px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    background: #fff;
    border-radius: 20px;
    border-style: solid;
    border-color: #ff6600;  
    `

class DeletarPoP extends React.Component{

    render(){
        return(
            <>
            <PopUp>
                <div>
                    <spam>
                        Gostaria de Excluir este arquivo mesmo 
                    </spam>
                </div>
            </PopUp>
            </>
        )
    }
}

export default DeletarPoP;