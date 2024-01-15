import React, { useEffect, useState } from 'react'
import Animacion from './Animacion';
import person1 from '../assets/testimoniales-img/person1.jpg';
import star from '../assets/star.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';


function Testimoniales() {

    const [isMobile, setIsMobile] = useState('');

    useEffect(() => {
        // Función para actualizar el estado cuando cambia la resolución
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
    
        // Agregar el evento de escucha del tamaño de la pantalla
        window.addEventListener('resize', handleResize);
    
        // Limpiar el evento de escucha al desmontar el componente
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <section className='contenedor testimoniales'>
        <Animacion>
            <h5 className="testimoniales__h5">clients review</h5>
        </Animacion>
        <Animacion>
            <h2 className="testimoniales__heading">My testomonials</h2>
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
                slidesPerView={isMobile ? '1' : '2'} 
            >
                {/* usar .map */}
                <SwiperSlide className='testimoniales__slide'>
                    <div className="testimonial">
                        <div className="testimonial__img-container">
                            <img src={person1} alt="Person1" className="testimonail__img" />
                        </div>

                        <div className="testimonal__puntuacion">
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                        </div>

                        <h3 className="testimonial__nombre">Sebastian</h3>
                        <p className="testimonial__area">Content Manager</p>
                        <p className="testimonal__comentario">
                            Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!                                        
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='testimoniales__slide'>
                    <div className="testimonial">
                        <div className="testimonial__img-container">
                            <img src={person1} alt="Person1" className="testimonail__img" />
                        </div>

                        <div className="testimonal__puntuacion">
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                        </div>

                        <h3 className="testimonial__nombre">Armin Van Buuren</h3>
                        <p className="testimonial__area">Content Manager</p>
                        <p className="testimonal__comentario">
                            Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!                                        
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='testimoniales__slide'>
                    <div className="testimonial">
                        <div className="testimonial__img-container">
                            <img src={person1} alt="Person1" className="testimonail__img" />
                        </div>

                        <div className="testimonal__puntuacion">
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                        </div>

                        <h3 className="testimonial__nombre">Sebastian</h3>
                        <p className="testimonial__area">Content Manager</p>
                        <p className="testimonal__comentario">
                            Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!                                        
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='testimoniales__slide'>
                    <div className="testimonial">
                        <div className="testimonial__img-container">
                            <img src={person1} alt="Person1" className="testimonail__img" />
                        </div>

                        <div className="testimonal__puntuacion">
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                            <img className='testimonial__star' src={star} alt="Star" />
                        </div>

                        <h3 className="testimonial__nombre">Armin Van Buuren</h3>
                        <p className="testimonial__area">Content Manager</p>
                        <p className="testimonal__comentario">
                            Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!                                        
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>


    </section>
  )
}

export default Testimoniales;