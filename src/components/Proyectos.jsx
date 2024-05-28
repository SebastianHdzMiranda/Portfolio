import React from 'react'
import Animacion from './Animacion';

function Proyectos({proyectos}) {

    const imageFormats = ['avif', 'webp', 'jpg'];

  return (
    <section className='proyectos contenedor' id='proyectos'>
        <Animacion>
            <h5 className="proyectos__h5">Mis Proyectos</h5>
            <h2 className="proyectos__heading">Descubre mis creaciones y conoce mi experiencia de desarrollo.</h2>
        </Animacion>

        <div className="proyectos__grid">

            {proyectos.map( (proyecto, i) => 
                <div className="proyecto" key={i}>
                    <picture>
                        {imageFormats.map((format, i) => (
                            <source key={i} srcSet={`./portafolio/${proyecto.img}.${format}`} type={`image/${format}`} />
                        ))} 
                        <img className='proyecto__img' src={`./portafolio/${proyecto.img}.png`} alt={`Imagen de ${proyecto.img}`} />
                    </picture>

                    <div className="proyecto__info">
                        <div className="proyecto__contenido">
                            <h3 className="proyecto__heading">{proyecto.titulo}</h3>
                            <div className="proyecto__tags">
                                {proyecto.tags.map( (tag,i)=>  
                                    <p className="proyecto__tag" key={i}>{tag}</p>
                                )}
                            </div>
                            <div className="proyecto__links">
                                <a href={proyecto.linkGitHub} target="_blank" className="experiencia__vinculo">
                                    <i className="experiencia__icon ri-github-fill"></i>
                                    
                                </a>
                                <a href={proyecto.linkDemo} target="_blank" className="experiencia__vinculo">
                                    <i className="experiencia__icon ri-link"></i>
                                    
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </section>
  )
}

export default Proyectos;