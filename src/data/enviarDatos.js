export async function enviarDatos(datos) {
    const {nombre, email, telefono, mensaje} = datos;
    try {
        const enviar = await fetch('https://sheetdb.io/api/v1/cv2ppimhop52e', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        'Nombre': nombre,
                        'Email': email,
                        'Telefono': telefono,
                        'Mensaje': mensaje
                    }
                ]
            })
        })

        const data = await enviar.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}