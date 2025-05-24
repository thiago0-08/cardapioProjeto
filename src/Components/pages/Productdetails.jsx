import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './ProductDetails.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BarraInferior from '../BarraInferior/barraInferior'

const ProductDetails = () => {
  
  const { state } = useLocation();
  const { produto } = state || {};
  const { id } = useParams()

  const navigate = useNavigate();
  

  if (!produto){
    return <p>Produto não encontrado para o ID: {id}</p>
  }

  return (
    <div className='produto-detail-container'>
        <div className='bar-header'>
            <FontAwesomeIcon icon={faArrowLeft} size= '2x' className='icon-back' onClick={() => navigate('/')}/>
        </div>

        <div className='details-product'>
            <div className='detail-product-infos'>
                <div className='img-container'>
                    <img src={produto.imagemUrl} alt={`Imagem do ${produto.nome}`} />
                </div>
                <div className='detail-product-infos-texts'>
                    <div className='detail-product-infos-texts-names'>
                        <h1>{produto.nome}</h1>
                        <span>R$ {produto.preco}</span>
                        <p>{produto.descricao}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='more-products'>
            <h1>Escolha mais itens</h1>
        </div>

        <BarraInferior/>

    </div>
  )
}

export default ProductDetails
