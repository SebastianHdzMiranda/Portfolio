import React from 'react'
import Animacion from './Animacion';
import { serviciosData } from '../data/data_info';
// import { serviciosData } from '../data/data_info';


function servicios() {
  return (
    <section className='servicios contenedor' id='servicios'>
      <Animacion>
        <h5 className="servicios__h5">Mis Servicios</h5>
      </Animacion>
      <Animacion>
        <h2 className="servicios__heading">Creando experiencias a través del diseño y la innovación.</h2>
      </Animacion>

        <div className="servicios__grid">
          {serviciosData.map( servicio => 
            <Animacion position='x' key={servicio.title}>
              <div className="servicio">                
                <>{servicio.svg()}</>
                <h3 className="servicio__heading">{servicio.title}</h3>
                <p className="servicio__texto">{servicio.description}</p>
              </div>
            </Animacion>
          )}
        </div>

    </section>
  )
}

export default servicios;
