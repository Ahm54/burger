import React from 'react'
import BurgerLogo from '../assets/burgerlogo.jpg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
 
export const Navbar =()=> {
  return (
    <div className='navbar'>
      <div className='main'>
        <img src={BurgerLogo} alt="Logo" />
        <div className='mainLink'>
            <Link to="/">Anasayfa</Link>
            <Link to="/Menu">Menü</Link>
            <Link to="/About">Hakkımızda</Link>
            <Link to="/Contact">İletişim</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
