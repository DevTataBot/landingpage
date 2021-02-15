import React from 'react';
import logo from '../images/logo.svg'
import '../style/Header.css'

const Header = () => {
    
    return(
        <React.Fragment>
           <header className="header">
                <div className="header__navbar">
                    <figure className="header__figure">
                        <img src={logo} alt="Logo"/>
                    </figure>
                    <div className="hamburger">menu</div>
                    <ul className="header__menu">
                        <li className="header__menu-item">About</li>
                        <li className="header__menu-item">Careers</li>
                        <li className="header__menu-item">Events</li>
                        <li className="header__menu-item">Products</li>
                        <li className="header__menu-item">Support</li>
                    </ul>
                </div>
                <div className="header__description">
                    <h2>Immersive experiences that deliver</h2>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header