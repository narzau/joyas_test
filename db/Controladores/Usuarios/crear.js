import Usuario from '../../Modelos/usuarios'; // Importa el modelo de usuario
import conexion from '../../db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { usuario , contraseña } = req.body;
    conexion();
    try {
      // Crea un nuevo usuario
      const nuevoUsuario = new Usuario({ usuario , contraseña });

      // Guarda el usuario en la base de datos
      await nuevoUsuario.save();

      res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar usuario' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
