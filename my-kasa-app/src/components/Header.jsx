import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

function Header() {
    return (
        <header>
            <a className="active" href="/"><img src={logo} alt="Logo"/></a>
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="active">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
