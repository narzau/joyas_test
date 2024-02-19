import conexion from '../../db';
import Producto from '../../Modelos/productos'

async function crearProducto(req, res) {
  const { 
    clasificacion,
    nombre,
    descripcionCorta,
    precio,
    imgDir,
    descripcionLarga,
    tamaños,
    materiales,
    stock } = req.body;

  const nuevoProducto = new Producto({
    clasificacion,
    nombre,
    descripcionCorta,
    precio,
    imgDir,
    descripcionLarga,
    tamaños,
    materiales,
    stock
  });
  conexion();
  try {
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}

export default crearProducto;