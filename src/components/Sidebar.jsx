import React from 'react';
import logo from '../assets/logo2.svg'


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
                <h3 className="sidebar__about-heading">About us</h3>
                <p className="sidebar__about-texto">Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>

            </div>

            <div className="formulario formulario-sidebar">
                <h2 className="formulario__heading formulario-sidebar__heading">Get touch me?</h2>

                <form>
                    <input className='formulario__input' type="text" placeholder='Your Name' />
                    <input className='formulario__input' type="email" placeholder='Your Email' />
                    <input className='formulario__input' type="number" placeholder='Phone Number' />
                    <textarea className='formulario__textArea' placeholder='Message'></textarea>

                    <input className='formulario__submit' type="submit" value="Submit Now" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;