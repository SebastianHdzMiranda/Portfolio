import React from 'react'
import Animacion from './Animacion'

function Footer() {
  return (
    <footer className='footer contenedor'>
        <div className="footer__contactos">
            <div className="footer__contactos-grid">
                
                <Animacion position={'x'}> 
                    <div className="footer__contacto">
                        <div className="footer__contacto-imgContent">
                            <img src='https://wp.shsarker.xyz/zyan/wp-content/themes/zyan/assets/svg/map.svg' alt="Img map" className="footer__contacto-img" />
                        </div>

                        <div className="footer__contacto-info">
                            <h3 className="footer__contacto-heading">Address</h3>
                            <p className='footer__contacto-texto'>Xochimilco, San Mateo Xalpa, Amapolas Mz5 Lot.17</p>
                        </div>
                    </div>
                </Animacion>

                <Animacion position={'x'}> 
                    <div className="footer__contacto">
                        <div className="footer__contacto-imgContent">
                            <img src='https://wp.shsarker.xyz/zyan/wp-content/themes/zyan/assets/svg/phone.svg' alt="img phone" className="footer__contacto-img" />
                        </div>

                        <div className="footer__contacto-info">
                            <h3 className="footer__contacto-heading">Lets talk us</h3>
                            <p className='footer__contacto-texto'>(55) 84956420 <br />(55) 15691051</p>
                        </div>
                    </div>
                </Animacion>

                <Animacion position={'x'}> 
                    <div className="footer__contacto">
                        <div className="footer__contacto-imgContent">
                            <img src='https://wp.shsarker.xyz/zyan/wp-content/themes/zyan/assets/svg/envelope.svg' alt="img email" className="footer__contacto-img" />
                        </div>

                        <div className="footer__contacto-info">
                            <h3 className="footer__contacto-heading">Send us email</h3>
                            <p className='footer__contacto-texto'>sebastian.cdmx@outlook.com</p>
                            <p className='footer__contacto-texto'>sebashm68@gmail.com</p>
                        </div>
                    </div>
                </Animacion>
                
            </div>
        </div>
        <div className="footer__copyright">
            <p className="footer__copyright-text">&copy; SebastianHdz 2024 | All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer