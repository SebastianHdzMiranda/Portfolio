import React from 'react'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className='header contenedor'>
        <div className="header__logo-content">
          <div className="header__logo">
            <a href='/'>
              <img className='header__img' src={logo} alt="Logo"/>
            </a>
          </div>
        </div>

        <nav className='navegacion'>
          <a href="#" className="navegacion__enlace">Home</a>
          <a href="#" className="navegacion__enlace">About</a>
          <a href="#" className="navegacion__enlace">Service</a>
          <a href="#" className="navegacion__enlace">Projects</a>
          <a href="#" className="navegacion__enlace">Contact</a>
        </nav>

        <div className="header__hamburger">

        </div>
    </header>
  )
}

export default Header;