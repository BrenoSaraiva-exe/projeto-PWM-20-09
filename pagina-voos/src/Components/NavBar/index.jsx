import Logo from '../../aviao.png';

import "./style.css";
import styled from "styled-components";
import React from "react";

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    border-bottom: solid 0.75px #ff6600;
    margin: 0;

    display: grid;
    grid-template-columns: 80px auto;
    align-items: center;
`;

const MenuList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const MenuItem = styled.li`
    list-style-type: none;
`;

const MenuLink = styled.a`
    text-decoration: none;
    font-size: 20px;
    font-weight: 300;
    color: #ff6600;

    &:hover{
        text-decoration: underline;
    }
`;

class NavBar extends React.Component{
    render(){
        return(
            
            <Nav>
                <MenuLink href="/">
                <img src={Logo} className="logo" alt="Logo Flightly"></img>
                </MenuLink>

                <MenuList>

                    <MenuItem>
                        <MenuLink href="../../Paginas/Cadastro">Cadastrar</MenuLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuLink href="../../Paginas/Atualizar">Atualizar</MenuLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuLink href="../../Paginas/Deletar">Deletar</MenuLink>
                    </MenuItem>

                </MenuList>
            </Nav>
    
        );
    }
}

export default NavBar;
