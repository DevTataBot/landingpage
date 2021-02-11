import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'


import '../style/Footer.css'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <figure>
                    <img src={logo} alt="Logo loopstudios"/>
                </figure>
               
                <div className="footer__redes">
                    <img src={facebook} alt=""/>
                    <img src={twitter} alt=""/>
                    <img src={pinterest} alt=""/>
                    <img src={instagram} alt=""/>
                </div>
                
                <ul className="footer__menu">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
                <div className="footer__info">
                    <span>© 2021 Loopstudios. All rights reserved.</span>
                    <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.Coded by <a href="https://github.com/TatianaBotia">Tatiana Botia</a>.</p>
                </div>
            
            </footer>
        </React.Fragment>
    )
}

export default Footer
