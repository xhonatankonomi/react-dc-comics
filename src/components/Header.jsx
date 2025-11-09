import Logo from './Logo'
import Navbar from './Navbar'
import React from 'react';
import '../styles/Header.css'

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-content-wrapper">
                <Logo />
                <Navbar />
            </div>
        </header>
    );
};

export default Header;