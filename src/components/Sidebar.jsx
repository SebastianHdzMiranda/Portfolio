import React from 'react';
import logo from '../assets/logo2.svg'
import Formulario from './Formulario';


function Sidebar({mostrarNav, animarSidebar}) {
  return (
    <div className={`sidebar ${animarSidebar ? 'sidebar--activo' : ''}`}>
        <div className="sidebar__contenido">
            <div className="sidebar__header">
                <div className="sidebar__contentLogo">
                    <div className="sidebar__logo">
                        <a href='/'>
                            <img className='sidebar__img' src={logo} alt="Logo"/>
                        </a>
                    </div>
                </div>

                <div className="sidebar__hamburger">
                    <a className="sidebar__iconMenu hamburger hamburger--slider is-active" type="button" id="menu" onClick={mostrarNav}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                    </a>
                </div>
            </div>

            <div className="sidebar__about">
                <h3 className="sidebar__about-heading">Acerca de Mí</h3>
                <p className="sidebar__about-texto">Soy un entusiasta de la tecnología que disfruta creando y resolviendo problemas. Me encanta aprender cosas nuevas y encontrar nuevas formas de ayudar a las personas.</p>

            </div>

            <div className="formulario formulario-sidebar">
                <h2 className="formulario__heading formulario-sidebar__heading">Quieres contactarme?</h2>

                <Formulario />
            </div>
        </div>
    </div>
  )
}

export default Sidebar;