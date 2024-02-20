
import nodemailer from 'nodemailer';

async function handler(text) {
    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'arzautignacio@gmail.com',
                pass: 'lyfgticcayyzfplr'
            }
        });

        await transporter.sendMail({
            from: 'arzautignacio@gmail.com',
            to: 'arzautignacio+1@gmail.com',
            subject: 'Nueva Posible Compra',
            text: text
        });

        /* await transporter.sendMail({
            from: 'ghersinichmatias@outlook.com',
            to: 'ghersinichmatias@outlook.com',
            subject: 'Nueva Posible Compra',
            text: text
        }); */

        console.log('Correo electrónico enviado correctamente.');
        return true; // Indica que el correo se envió correctamente
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        throw error; // Propaga el error para que sea manejado por el controlador
    }
}

export default async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { text } = req.body;
            
            // Ejecutar handler con un límite de tiempo
            const response = await handler(text)
            
            // Si handler termina dentro del tiempo límite
            if (response) {
                console.log('Correo enviado con éxito.');
                res.status(200).json('Mail enviado');
            } else {
                console.error('El envío del correo excedió el tiempo límite.');
                res.status(500).json({ error: 'El envío del correo excedió el tiempo límite.' });
            }
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(404).json({ error: 'Ruta no encontrada' });
    }
};
    
