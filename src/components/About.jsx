import React from 'react'
import aboutImg from '../assets/about_img.jpg';
import Animacion from './Animacion';

function About() {
  return (
    <section className='about contenedor'>
        <div className="about__contenido">
            <Animacion>
              <h5 className="about__h5">About Me</h5>
            </Animacion>
            <Animacion>
              <h2 className="about__heading">Transforming visions into exceptional portfolios</h2>
            </Animacion>
            <div className="about__info">
              <p className="about__texto">Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
              <a href="#" className="about__enlace">Descargar CV</a>
            </div>
        </div>

        <Animacion position={'x'}>
          <div className="about__grafico">
              <img src={aboutImg} alt="about_imagen" />
          </div>
        </Animacion>
    </section>
  )
}

export default About