import React from 'react';
import logo from '../../assets/logo.png'
import './Menu.css';
import Button from '../Button';
import ButtonLink from './components/ButtonLink';


function Menu(){
    return (
        <nav className = "Menu">
            <a href="/">
                <img className="Logo" src={logo} alt = "minhaflix logo"/>
            </a>

            <ButtonLink className= "ButtonLink" href= '/'>
                Novo Vídeo
            </ButtonLink>

            <Button as='a' className='github' href='https://github.com/GabrielHenriP'>
                GabrielHenriP
            </Button>
        </nav>
    );
}

export default Menu;