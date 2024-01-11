import React, { useEffect, useRef, useState } from 'react'
import Animacion from './Animacion';

function Educacion({educacionSeccion, skills}) {

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
                <h5 className="educacion__h5">Education & skill</h5>
                <h2 className="educacion__heading">Showcasing your talent amplifying your impact</h2>
            </Animacion>

                <div className="educacion__grid">

                    {educacionSeccion.map( (seccion, i) => 
                        <Animacion position={'x'}>
                            <div className="educacion__seccion" key={i}>
                                <span className="educacion__date">{seccion.date}</span>
                                <h3 className="educacion__seccion-heading">{seccion.title}</h3>
                                <p className="educacion__text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</p>
                            </div>
                        </Animacion>    
                    )}
                </div>

            <div className="skills" ref={miRef}>

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