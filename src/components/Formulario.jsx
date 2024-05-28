import React, { useEffect, useState } from 'react'
import Alerta from './Alerta';
import { enviarDatos } from '../data/enviarDatos'
import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.scss';

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const [alerta, setAlerta] = useState('');
    const [alertaEmail, setAlertaEmail] = useState('');
    const [alertaNumero, setAlertaNumero] = useState('');


    const handleSubmit = async (e)=> {
        e.preventDefault();

        // Validaciones
        const validar = [nombre, email, telefono, mensaje].includes('');
        if (validar || alertaEmail.length > 0 || alertaNumero.length > 0) {
            // Crear Alerta
            setAlerta('*Todos los campos son obligatorios');
            return;
        }

        setAlerta('');
        const datos = {nombre, email, telefono, mensaje};

        const resultado = await Swal.fire({
            title: "¿Está seguro?",
            text: "¡Se enviaran los datos registrados!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#55e6a5",
            cancelButtonColor: "#dc2626",
            confirmButtonText: "¡Si, enviar!",
            cancelButtonText: "¡No, cancelar!"
          });
          if (resultado.isConfirmed) {
            Swal.fire({
            title: "Enviado",
            text: "Sus datos fueron enviados, en breve nos comunicaremos",
            icon: "success"
            });
            // Enviar datos a la api
            const data = await enviarDatos(datos);
            console.log(data);
            // resetar formulario
            setNombre('');
            setEmail('');
            setTelefono('');
            setMensaje('');
        }
        

    }

    const validarEmail = ()=> {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);

        if(!resultado) {
            setAlertaEmail('*El email no es valido');
            return;
        }
        setAlertaEmail('');
    }

    const validarNumero = ()=> {
        if(isNaN(telefono) || telefono < 1 || telefono.length !== 10) {
            setAlertaNumero('*Digita un numero valido');
            return;
        }
        setAlertaNumero('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="formulario__campo">
                <input 
                    className='formulario__input' 
                    type="text" 
                    placeholder='Tu nombre' 
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                />
            </div>

            <div className="formulario__campo">
                <input 
                    className='formulario__input' 
                    type="text" 
                    placeholder='Tu Email' 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    onBlur={validarEmail}                            
                />
                {alertaEmail && <Alerta>{alertaEmail}</Alerta>}
            </div>

            <div className="formulario__campo">
                <input 
                    className='formulario__input' 
                    type="text" 
                    placeholder='Tu Telefono (10 digitos)' 
                    value={telefono}
                    onChange={(e)=> setTelefono(e.target.value)}
                    onBlur={validarNumero}
                />
                {alertaNumero && <Alerta>{alertaNumero}</Alerta>}
            </div>
            <textarea 
                className='formulario__textArea' 
                placeholder='Mensaje...'
                value={mensaje}
                onChange={(e)=> setMensaje(e.target.value)}
            >
            </textarea>

            {alerta && <Alerta>{alerta}</Alerta>}

            <input 
                className='formulario__submit' 
                type="submit" 
                value="Enviar" 
            />
        </form>
    )
}

export default Formulario;