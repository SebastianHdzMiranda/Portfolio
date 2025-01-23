import React from 'react'
import logo from '../assets/logo2.svg'
import { menuElements } from '../data/data_info';
// import { mostrarNav } from '../helpers/nav';

function Header({mostrarNav, ocultarMenu, menuActive}) {

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

          <nav className={`navegacion ${menuActive && 'navegacion--activo'}`} onClick={ocultarMenu}>
            <ul className='navegacion__list'>
              {menuElements.map( element => 
                <i className='navegacion__item' key={element.title}>
                  <a href={element.href} className="navegacion__enlace">{element.title}</a>
                </i>
              )}
            </ul>
          </nav>

          <div className="header__hamburger">
            {/* <img className="header__hamburgerImg" src={hamburguer} alt="" /> */}

            <a className={`header__iconMenu hamburger hamburger--slider ${menuActive && 'is-active'}`} type="button" id="menu" onClick={mostrarNav}>
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