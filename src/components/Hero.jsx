import React from 'react';
import foto from '../assets/foto.png';
import Animacion from './Animacion';

function Hero() {
  return (
    <section className='hero'>
        <div className="hero__contenedor">
              <div className="hero__contenido">
                  <h1 className="hero__heading">Hola, Soy Sebastian! <br /> 
                    <Animacion slide={true}>
                      <span className='hero__heading-span'>Front-End</span>
                    </Animacion>
                   {' '}Developer</h1>
                <Animacion>
                  <p className="hero__descripcion">Soy un apasionado desarrollador web con la misión de crear experiencias digitales encantadoras e intuitivas. Con una base sólida en principios de front-end, me especializo en traducir ideas complejas en interfaces fáciles de usar que cautivan y atraen.</p>
                </Animacion>
                <Animacion>
                  <a href="#" className="hero__boton">Descargar CV</a>
                </Animacion>

              </div>

            <div className="hero__banner">
                <img className='hero__foto' src={foto} alt="foto" />
            </div>
        </div>
    </section>
  )
}

export default Hero;