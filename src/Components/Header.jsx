import React, {useState} from 'react';
import logo from '../images/logo.svg'
import '../style/Header.css'
import Hamburger from './Hamburger';
import Navbar from './Navbar';

const Header = () => {
    
    const [open, setOpen] = useState(false)

    const handleclick = () => {
        setOpen(!open)
    }

    return(
        <React.Fragment>
           <header className="header">
                <div className={!open ? "header__navbar" : "header__navbar--position header__navbar"}>
                    <figure className="header__figure">
                        <img src={logo} alt="Logo"/>
                    </figure>
                    <Hamburger handleclick={handleclick}/>
                    <Navbar open={open}/>
                </div>
                <div className="header__description">
                    <h2>Immersive experiences that deliver</h2>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header