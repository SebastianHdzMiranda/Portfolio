import React from 'react'
import aboutImg from '../assets/about_img.jpg';

function About() {
  return (
    <section className='about contenedor'>
        <div className="about__contenido">
            <h5 className="about__h5">About Me</h5>
            <h2 className="about__heading">Transforming visions into exceptional portfolios</h2>
            <div className="about__info">
              <p className="about__texto">Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
              <a href="#" className="about__enlace">Descargar CV</a>
            </div>
        </div>

        <div className="about__grafico">
            <img src={aboutImg} alt="about_imagen" />
        </div>
    </section>
  )
}

export default About