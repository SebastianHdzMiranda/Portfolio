import React from 'react'
import styled from '@emotion/styled';

const DivPorcentaje = styled.div`
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${(props) => props.p};
    height: .6rem;
    background-color: #55e6a5;
`;
function Educacion({educacionSeccion, skills}) {

  return (
    <section className='educacion'>
        <div className="educacion__contenido contenedor">
            <h5 className="educacion__h5">Education & skill</h5>
            <h2 className="educacion__heading">Showcasing your talent amplifying your impact</h2>

            <div className="educacion__grid">

                {educacionSeccion.map( (seccion, i) => 
                    
                    <div className="educacion__seccion" key={i}>
                        <span className="educacion__date">{seccion.date}</span>
                        <h3 className="educacion__seccion-heading">{seccion.title}</h3>
                        <p className="educacion__text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem</p>
                    </div>
                )}
            </div>

            <div className="skills">

                {skills.map( (skill, i) => 
                    <div className="skill" key={i}>
                        <p className="skill__nombre">{skill.nombre}</p>
                        <DivPorcentaje p={skill.porcentaje} ></DivPorcentaje>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default Educacion;