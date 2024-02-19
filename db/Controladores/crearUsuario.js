import conexion from '../db';
import Usuario from '../Modelos/usuarios'

async function crearUsuario(req, res) {
  const { usuario, contraseña } = req.body;

  const nuevoUsuario = new Usuario({
    usuario,
    contraseña,
  });
  conexion();
  try {
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al crear persona:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}

export default crearUsuario;
