import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Menu.css';
import Button from '../Button';
import ButtonLink from './components/ButtonLink';


function Menu(){
    return (
        <nav className = "Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt = "minhaflix logo"/>
            </Link>

            <ButtonLink  className= "ButtonLink" to= "/pages/cadastro/video">
                Novo Vídeo
            </ButtonLink>

            <Button as='a' href='https://github.com/GabrielHenriP'>
                GabrielHenriP
            </Button>
        </nav>
    );
}

export default Menu;