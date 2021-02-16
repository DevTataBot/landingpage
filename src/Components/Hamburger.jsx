import React, {useState} from 'react'
import '../style/Hamburger.css'
import close from '../images/icon-close.svg'
import hamburger from '../images/icon-hamburger.svg'

const Hamburger = ({ open, handleclick }) => {

    const icons = {close, hamburger}
    const [btnMenu, setBtnMenu] = useState(icons.hamburger)

    const closeImage = () => {
        if(btnMenu === icons.hamburger){
            setBtnMenu(icons.close)
        }else{
            setBtnMenu(icons.hamburger)
        }
    }

    return (
        <button onClick={handleclick} onClickCapture={closeImage} className= {"hamburger"}>
            <img src={btnMenu} alt="menu icon"/>
        </button>
    ) 
}

export default Hamburger