import React, { useRef } from 'react'
import logo from '../assets/logo2.svg'
import hamburguer from '../assets/menu.svg';
// import { mostrarNav } from '../helpers/nav';

function Header({mostrarNav, ocultarMenu}) {

  return (
    <header className='header contenedor'>
        <div className="header__contenido">

          <div className="header__logo-content">
            <div className="header__logo">
              <a href='/'>
                <img className='header__img' src={logo} alt="Logo"/>
              </a>
            </div>
          </div>

          <nav className='navegacion' onClick={ocultarMenu}>
            <ul className='navegacion__list'>
              <i className='navegacion__item'>
                <a href="#servicios" className="navegacion__enlace">Servicios</a>
              </i>
              <i className='navegacion__item'>
                <a href="#about" className="navegacion__enlace">Conoceme</a>
              </i>
              <i className='navegacion__item'>
                <a href="#skills" className="navegacion__enlace">Skills</a>
              </i>
              <i className='navegacion__item'>
                <a href="#proyectos" className="navegacion__enlace">Proyectos</a>
              </i>
              <i className='navegacion__item'>
                <a href="#contacto" className="navegacion__enlace">Contacto</a>
              </i>
            </ul>
          </nav>

          <div className="header__hamburger">
            {/* <img className="header__hamburgerImg" src={hamburguer} alt="" /> */}

            <a className="header__iconMenu hamburger hamburger--slider" type="button" id="menu" onClick={mostrarNav}>
              <span className="hamburger-box">
              <span className="hamburger-inner"></span>
              </span>
            </a>
          </div>
        </div>
    </header>
  )
}

export default Header;