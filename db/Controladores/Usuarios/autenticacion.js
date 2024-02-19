import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import conexion from '../../db';
import Usuario from '../../Modelos/usuarios';
// En tu componente de inicio de sesión o donde recibes el token del servidor
import Cookies from 'js-cookie';
import { serialize } from 'cookie';

conexion();

const secretKey = '57962G20'; // Reemplaza esto con tu clave secreta

export async function signin(req, res) {
  const { usuario, contraseña } = req.body;

  try {
    // Busca al usuario en la base de datos
    const nuevoUsuario = await Usuario.findOne({ usuario });

    if (!nuevoUsuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(contraseña, nuevoUsuario.contraseña);
    

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Genera un token JWT
    const token = jwt.sign({ userId: nuevoUsuario._id }, secretKey);

    // Guarda el token en una cookie llamada "token" con una duración de 1 hora
    const serialized = serialize('myToken', token, { 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 *60 *60 *24 *30 ,
      path: '/'}); // 1 hora
    console.log(serialized);
    res.setHeader('Set-Cookie', serialized);
    return res.status(201).json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
}
