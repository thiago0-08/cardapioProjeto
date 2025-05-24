import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShareNodes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <header className='header'>
        <a href="/" className='logo'><img src={logo} alt="" /></a>

        <nav className='buttons-options'>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <button><FontAwesomeIcon icon={faShareNodes} /></button>
        </nav>
    </header>
  )
}

export default Navbar