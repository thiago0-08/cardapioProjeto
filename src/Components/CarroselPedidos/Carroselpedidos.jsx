import React from 'react';
import './Carroselpedidos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../assets/produto1.jpg';
import img2 from '../../assets/produto2.jpg';
import img3 from '../../assets/produto3.jpg';
import img4 from '../../assets/produto4.jpg';
import img5 from '../../assets/produto5.jpg';

const Carroselpedidos = () => {
  const produtos = [img1, img2, img3, img4, img5];

  return (
    <section className="carrosel-container">
      <h2 className="titulo-carrosel">Os Mais Pedidos!</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          }
        }}
      >
        {produtos.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="card-produto">
              <img src={img} alt={`Produto ${index + 1}`} />
              <div className="info-produto">
                <p>Nome Produto</p>
                <span>R$ - VALOR</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carroselpedidos;
