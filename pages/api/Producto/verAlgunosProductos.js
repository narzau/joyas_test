import { verAlgunosProductos } from '../../../db/Controladores/Productos/ver'; // Ajusta la ruta según tu estructura de carpetas

export default async (req, res) => {
  if (req.method === 'POST') {
    const valores = JSON.parse(req.body)
    try {
      const data = await verAlgunosProductos(valores.campo, valores.valor);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: 'Ruta no encontrada' });
  }
};