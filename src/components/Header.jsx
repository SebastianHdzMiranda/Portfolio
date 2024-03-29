import React, { useRef } from 'react'
import logo from '../assets/logo2.svg'
import hamburguer from '../assets/menu.svg';
// import { mostrarNav } from '../helpers/nav';

function Header({mostrarNav}) {

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

          <nav className='navegacion'>
            <ul className='navegacion__list'>
              <i className='navegacion__item'>
                <a href="#" className="navegacion__enlace">Home</a>
              </i>
              <i className='navegacion__item'>
                <a href="#" className="navegacion__enlace">About</a>
              </i>
              <i className='navegacion__item'>
                <a href="#" className="navegacion__enlace">Service</a>
              </i>
              <i className='navegacion__item'>
                <a href="#" className="navegacion__enlace">Project</a>
              </i>
              <i className='navegacion__item'>
                <a href="#" className="navegacion__enlace">Contact</a>
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