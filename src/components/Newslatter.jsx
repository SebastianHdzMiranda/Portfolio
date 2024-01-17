import React from 'react'

function Newslatter() {
  return (
    <section className='newsletter'>
        <h2 className='newsletter__heading'>SUBSCRIBE MY NEWSLETTER</h2>

        <form className="newsletter__form">
            <div className="newsletter__form-content contenedor">
                <input className='newsletter__input'  type="email"  placeholder='Enter Your Email'/>

                <input className='newsletter__submit' type="submit" value='Notify Now' />
            </div>
        </form>
    </section>
  )
}

export default Newslatter;