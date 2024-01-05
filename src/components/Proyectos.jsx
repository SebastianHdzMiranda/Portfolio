import React from 'react'
import cafeteria from '../assets/portafolio/cafeteria.png';

function Proyectos({proyectos}) {

  return (
    <section className='proyectos contenedor'>
        <h5 className="proyectos__h5">Mi Portafolio</h5>

        <h2 className="proyectos__heading">Elevate your brand to new heights with our portfolio expertise</h2>

        <div className="proyectos__grid">

            {proyectos.map( (proyecto, i) => 
                <div className="proyecto" key={i}>
                    <img className='proyecto__img' src={proyecto.img} alt="imagen proyecto" />

                    <div className="proyecto__info">
                        <div className="proyecto__contenido">
                            <div className="proyecto__links">
                                <a href={proyecto.linkGitHub} target="_blank" className="experiencia__vinculo">
                                    <i className="experiencia__icon ri-github-fill"></i>
                                </a>
                                <a href={proyecto.linkDemo} target="_blank" className="experiencia__vinculo">
                                    <i className="experiencia__icon ri-link"></i>
                                </a>
                            </div>
                            <h3 className="proyecto__heading">{proyecto.titulo}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </section>
  )
}

export default Proyectos;