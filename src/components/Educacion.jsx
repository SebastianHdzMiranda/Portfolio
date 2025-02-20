import React, { useEffect, useRef, useState } from 'react'
import Animacion from './Animacion';
import { educacionSeccion, skills } from '../data/data_info';

function Educacion() {



    const [isVisible, setIsVisible] = useState(false);
    const miRef = useRef(null);

    useEffect(()=> {
        // sustituye a document.querySelector
        const animacion = miRef.current;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                return;
            }
            setIsVisible(false);
        });

       observer.observe(animacion);

        return () => {
          // Limpia el observador cuando el componente se desmonta
          observer.disconnect();
        };
    }, []);
    
    

  return (
    <section className='educacion'>
        <div className="educacion__contenido contenedor">
            <Animacion>
                <h5 className="educacion__h5">Educacion & Skills</h5>
                <h2 className="educacion__heading">Forjando un camino hacia el éxito.</h2>
            </Animacion>

                <div className="educacion__grid">

                    {educacionSeccion.map( (seccion, i) => 
                        <Animacion position={'x'} key={i}>
                            <div className="educacion__seccion" key={i}>
                                <span className="educacion__date">{seccion.date}</span>
                                <h3 className="educacion__seccion-heading">{seccion.title}</h3>
                                <p className="educacion__text">{seccion.text}</p>
                            </div>
                        </Animacion>    
                    )}
                </div>

            <div className="skills" ref={miRef} id='skills'>

                {skills.map( (skill, i) => 
                    <div className="skill" key={i}>
                        <p className="skill__nombre">{skill.nombre}</p>
                        <div className='skill__progress'  p={skill.porcentaje} style={isVisible ? {width: skill.porcentaje} : {}}></div>
                    </div>
                )}
            </div>

        </div>
    </section>
  )
}

export default Educacion;