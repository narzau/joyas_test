/* import nodemailer from 'nodemailer'; */

// Configura el transporte

// Manejador de la ruta API
/* export default async function handler(req, res) { */
    /* const transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: 'ghersinichmatias@outlook.com', // Cambia esto por tu dirección de correo electrónico
            pass: 'M4tistartv' // Cambia esto por tu contraseña
        }
    });  */   
    
    /* if (req.method === 'POST') {
        const { text } = req.body;
        
        try {	   
            await nodemailer
              .createTransport({
                service: 'Outlook',
                auth: {
                  user: 'ghersinichmatias@outlook.com',
                  pass: 'M4tistartv'
                },
              })
              .sendMail({
                from: 'ghersinichmatias@outlook.com', // Dirección de correo electrónico del remitente
                to: 'ghersinichmatias@outlook.com', // Dirección de correo electrónico del destinatario
                subject: 'Nueva Posible Compra', // Asunto del correo electrónico
                text: text
              })
            console.log('Email sent to ' + email)
            res.status(200).json({ message: 'Correo electrónico enviado correctamente.' });
        } catch (e) {
          console.error(e)
        } */
        /* // Configura los detalles del correo electrónico
        const mailOptions = {
            from: 'ghersinichmatias@outlook.com', // Dirección de correo electrónico del remitente
            to: 'ghersinichmatias@outlook.com', // Dirección de correo electrónico del destinatario
            subject: 'Nueva Posible Compra', // Asunto del correo electrónico
            text: text // Cuerpo del correo electrónico
        };
        
        try {
            // Verifica la conexión con el servidor de correo electrónico
            await new Promise((resolve, reject) => {
                // verify connection configuration
                transporter.verify(function (error, success) {
                    if (error) {
                        console.log(error);
                        reject(error);
                    } else {
                        console.log("Server is ready to take our messages");
                        resolve(success);
                    }
                });
            });
            
            // Envía el correo electrónico
            await new Promise((resolve, reject) => {
                // send mail
                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        console.log(info);
                        resolve(info);
                    }
                });
            });
            res.status(200).json({ message: 'Correo electrónico enviado correctamente.' });
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
            res.status(500).json({ message: 'Error al enviar el correo electrónico.' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido.' });
    } */

    /* import { handler } from '../../../../db/Controladores/Mailing/sendMail';  */
    import nodemailer from 'nodemailer';

    async function handler(text) {
        try {
            const transporter = nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                port: 587,
                secureConnection: false,
                auth: {
                    user: 'ghersinichmatias@outlook.com',
                    pass: 'M4tistartv'
                },
                tls: {
                    ciphers:'SSLv3'
                }
            });
    
            await transporter.sendMail({
                from: 'ghersinichmatias@outlook.com',
                to: 'ghersinichmatias@outlook.com',
                subject: 'Nueva Posible Compra',
                text: text
            });
    
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
    
