import { eliminarUnProducto } from '../../../db/Controladores/Productos/eliminar';



export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = await eliminarUnProducto(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: 'Ruta no encontrada' });
  }
};