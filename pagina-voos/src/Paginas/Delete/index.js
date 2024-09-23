import style from "styled-components";
import React from "react"
import NavBar from "../../Components/NavBar/index.jsx"



class Delete extends React.Components{


    const Menu = style.form`
        width: 400px;
        height: 400px;
        align-content: center;
        display: flex;
        flex-direction: colunm;
        `
    const Button = style.button`
        color: #BF4F74;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #BF4F74;
        border-radius: 3px;
    `
    render(){
        return(
            <NavBar/>
            </>
        )

    }
        
    

}