import React from 'react';
import '../styles/Footer.css';
import logoFooter from '../assets/images/logo-footer.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="Kasa Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
