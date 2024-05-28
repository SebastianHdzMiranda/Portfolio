import React from 'react'
import Animacion from './Animacion'
import location from '../assets/location.svg';
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';

function Footer() {
  return (
    <footer className='footer contenedor'>
        <div className="footer__contactos">
            <div className="footer__contactos-grid">
                
                <Animacion position={'x'}> 
                    <div className="footer__contacto">
                        <div className="footer__contacto-imgContent">
                            <img src={location} alt="Img map" className="footer__contacto-img" />
                        </div>

                        <div className="footer__contacto-info">
                            <h3 className="footer__contacto-heading">Dirección</h3>
                            <p className='footer__contacto-texto'>Xochimilco, San Mateo Xalpa, Amapolas Mz5 Lot.17</p>
                        </div>
                    </div>
                </Animacion>

                <Animacion position={'x'}> 
                    <div className="footer__contacto">
                        <div className="footer__contacto-imgContent">
                            <img src={phone} alt="img phone" className="footer__contacto-img" />
                        </div>

                        <div className="footer__contacto-info">
                            <h3 className="footer__contacto-heading">Telefóno</h3>
                            <a href='tel:5584956420' className='footer__contacto-texto'>(55) 84956420</a>
                            <a href='tel:5521564946' className='footer__contacto-texto'>(55) 21564946</a>
                        </div>
                    </div>
                </Animacion>

                <Animacion position={'x'}> 
                    <div className="footer__contacto">
                        <div className="footer__contacto-imgContent">
                            <img src={email} alt="img email" className="footer__contacto-img" />
                        </div>

                        <div className="footer__contacto-info">
                            <h3 className="footer__contacto-heading">Contacto</h3>
                            <a href='mailto:sebashm68@gmail.com' className='footer__contacto-texto'>sebashm68@gmail.com</a>
                            <a href='mailto:sebastian.cdmx@outlook.com' className='footer__contacto-texto'>sebastian.cdmx@outlook.com</a>
                        </div>
                    </div>
                </Animacion>
                
            </div>
        </div>
        <div className="footer__copyright">
            <p className="footer__copyright-text">&copy; SebastianHdz 2024 | Todos los Derechos Reservados</p>
        </div>
    </footer>
  )
}

export default Footer