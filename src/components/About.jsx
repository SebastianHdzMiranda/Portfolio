import React from 'react'
import aboutImg2 from '../assets/pic2.jpeg';
import Animacion from './Animacion';

function About() {
  return (
    <section className='about contenedor' id='about'>
        <div className="about__contenido">
            <Animacion>
              <h5 className="about__h5">Acerca de Mi</h5>
            </Animacion>
            <Animacion>
              <h2 className="about__heading">Hecha un vistazo a quién soy y qué hago.</h2>
            </Animacion>
            <div className="about__info">
              <p className="about__texto">¡Hola! Te invito a conocerme mejor a través de mi CV. Descubre mi pasión por el desarrollo web y cómo puedo ser parte de tu equipo.</p>
              <a href="./cv.pdf" download='SebastianHernandezCV.pdf' className="about__enlace">Descargar CV</a>
            </div>
        </div>

        <Animacion position={'x'}>
          <div className="about__grafico">
              <div className="about__grafico-content">
                <img className='about__img' src={aboutImg2} alt="about_imagen" />
              </div>
          </div>
        </Animacion>
    </section>
  )
}

export default About