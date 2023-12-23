import React from 'react';
import foto from '../assets/foto.png';
import Marcofoto from '../assets/marco-banner.png';

function Hero() {
  return (
    <section className='hero'>
        <div className="hero__contenedor">
            <div className="hero__contenido">
                <h1 className="hero__heading">Hola, Soy Sebastian! <span className='hero__heading-span'>Front-End</span> Developer</h1>
                <p className="hero__descripcion">Soy un apasionado diseñador UI/UX con la misión de crear experiencias digitales encantadoras e intuitivas. Con una base sólida en principios de diseño y un gran ojo para los detalles, me especializo en traducir ideas complejas en interfaces fáciles de usar que cautivan y atraen.</p>
                <a href="#" className="hero__boton">Descargar CV</a>
            </div>

            <div className="hero__banner">
                <img className='hero__foto' src={foto} alt="foto" />
            </div>
        </div>
    </section>
  )
}

export default Hero;