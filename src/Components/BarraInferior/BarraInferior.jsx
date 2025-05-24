import React from 'react'
import './barraInferior.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const barraInferior = () => {
  return (
    <div className='nav-bar'>
        <div className='inicio'>
            <FontAwesomeIcon icon={faHouse} className='icone'/>
            <p>Inicio</p>
        </div>
        <div className='carrinho'>
            <FontAwesomeIcon icon={faCartShopping} className='icone' />
            <p>Carrinho</p>
        </div>
    </div>
  )
}

export default barraInferior