import React from 'react'
import '../style/Navbar.css'

const Navbar = ( { open } ) => {
    return(
        <ul className={open ? "menu_bar menu" : "menu_bar oculto"} open={open}>
            <li className="menu-item">About</li>
            <li className="menu-item">Careers</li>
            <li className="menu-item">Events</li>
            <li className="menu-item">Products</li>
            <li className="menu-item">Support</li>
        </ul>
    )
}

export default Navbar