import React, { useEffect, useState } from 'react'
import Animacion from './Animacion';
import person1 from '../assets/testimoniales-img/person1.jpg';
import star from '../assets/star.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper/modules';


function Testimoniales() {

    const [isMobile, setIsMobile] = useState(1);

    const testimonios = [
        {img : person1, nombre: 'Rodrigo', area: 'Ingeniero', comentario: 'Excelente colaboración y experiencia en desarrollo web. Ahora el sitio es más responsivo y fácil de usar. ¡Altamente recomendado!'},
        {img : person1, nombre: 'Jorge', area: 'Fotografo Profesional', comentario: 'Excelente servicio y atención al detalle. Mi aplicación web luce genial y ahora refleja perfectamente mi trabajo.'},
        {img : person1, nombre: 'Luz', area: 'Empresaria', comentario: 'Servicio excepcional y resultados impresionantes. Mi sitio web es moderno y fácil de navegar, ¡Gracias por todo!'},
        {img : person1, nombre: 'Juan', area: 'Empresario', comentario: 'Trabajo personalizado y atento a mis necesidades. Mi sitio web quedó exactamente como lo imaginé. ¡Muy satisfecho con el resultado!'},
    ];

    useEffect(() => {   
        ajustarSlidesPerView();
    
        // Agregar el evento de escucha del tamaño de la pantalla
        window.addEventListener('resize', ajustarSlidesPerView);
    
        // Limpiar el evento de escucha al desmontar el componente
        return () => {
          window.removeEventListener('resize', ajustarSlidesPerView);
        };
    }, []);

    const ajustarSlidesPerView = () => {
        const anchoVentana = window.innerWidth;
        if (anchoVentana >= 768) {
          // Ancho mayor o igual a 768px (tablets y desktops)
          setIsMobile(2);
          return;
        } 
        // Ancho menor a 768px (móviles)
        setIsMobile(1);
    };

  return (
    <section className='contenedor testimoniales'>
        <Animacion>
            <h5 className="testimoniales__h5">Revisión De</h5>
        </Animacion>
        <Animacion>
            <h2 className="testimoniales__heading">Mis Testimonios</h2>
        </Animacion>


        <div className="testimoniales__contenido">
            <Swiper
                modules={[Autoplay]}
                className="mySwiper testimoniales__swiper"
                autoplay= {{
                    delay: 3000,
                }}
                loop={true}
                spaceBetween={20}
                effect='fade'
                slidesPerView={isMobile} 
            >
                {testimonios.map( (testimonio, i) => 
                    <SwiperSlide key={i} className='testimoniales__slide'>
                        <div className="testimonial">
                            {/* <div className="testimonial__img-container">
                                <img src={testimonio.img} alt={`Foto${testimonio.nombre}`} className="testimonial__img" />
                            </div> */}

                            <div className="testimonial__puntuacion">
                                <img className='testimonial__star' src={star} alt="Star" />
                                <img className='testimonial__star' src={star} alt="Star" />
                                <img className='testimonial__star' src={star} alt="Star" />
                                <img className='testimonial__star' src={star} alt="Star" />
                                <img className='testimonial__star' src={star} alt="Star" />
                            </div>

                            <h3 className="testimonial__nombre">{testimonio.nombre}</h3>
                            <p className="testimonial__area">{testimonio.area}</p>
                            <p className="testimonial__comentario">
                                {testimonio.comentario}                                    
                            </p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>


    </section>
  )
}

export default Testimoniales;