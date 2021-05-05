import React from 'react'
import styled from 'styled-components';
import LogoImg from '../Assets/astronomy.svg';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
// background-color:green;
position:sticky;
height:80px;

`;
const NavbarWrap = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;

`;
const Logo = styled.div`
width:128px;
height:22px;
background-image: url(${LogoImg});

`;
const Nav = styled.nav`


`;



const Navlink = styled(Link)`
margin:5px;
text-decoration:none;

`;
const SearchBar = styled.div`
margin:0px 5px 5px;

`;
const Button = styled.div`
margin:0px 5px 5px;

`;
const Input = styled.input`


`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarWrap>
                <Logo></Logo>
                <Nav>
                    <Navlink to ="/">Accueil</Navlink>
                    <Navlink to ="/Streams">Streams</Navlink>
                    <Navlink to ="/Auth">Compte</Navlink>
                    <Navlink to ="/Games">Jeux</Navlink>
                </Nav>
                <SearchBar>
                    <Input type="text" placeholder="Streamers, jeux..."/>
                </SearchBar>
                <Button>Connexion</Button>
                <Button>Inscription</Button>
            </NavbarWrap>
        </NavbarContainer>
    );
};

export default Navbar
