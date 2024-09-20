import Logo from '../../logo.svg';

import style from "./style.css";
import styled from "styled-components";
import React from "react";

const Nav = styled.nav`
    width: 100%;
    height: 68px;
    background-color: #ccc;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuList = styled.ul`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
`;

const MenuItem = styled.li`
    list-style-type: none;
`;

const MenuLink = styled.a`
    text-decoration: none;
    font-size: 22px;
    color: #000;

    &:hover{
        text-decoration: underline;
    }
`;

class NavBar extends React.Component{
    render(){
        return(

            <Nav>
                <MenuList>

                    <img src={Logo} className="logo" alt="Logo Flightly"></img>

                    <MenuItem>
                        <MenuLink href="/Cadastrar">Cadastrar</MenuLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuLink href="/Atualizar">Atualizar</MenuLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuLink href="/Deletar">Deletar</MenuLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuLink href="/Listar">Listar</MenuLink>
                    </MenuItem>
                </MenuList>
            </Nav>
    
        )
    }
}

export default NavBar;
