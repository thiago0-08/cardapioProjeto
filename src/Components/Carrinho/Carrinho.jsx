
import React from 'react'
import Navbar from '../NavBar/Navbar'
import './carrinho.css'
import { useNavigate } from 'react-router-dom'

const Carrinho = () => {
  return (
    <div>
      <Navbar />
        <div className='container'>
            <h1>Carrinho</h1>
            <p>Adicione produtos ao carrinho e finalize sua compra.</p>
        </div>
    </div>
  )
}

export default Carrinho
