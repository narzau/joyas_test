// pages/api/miapi.js

import { verUnProducto } from '../../../db/Controladores/Productos/ver'; // Ajusta la ruta según tu estructura de carpetas

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = await verUnProducto(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: 'Ruta no encontrada' });
  }
};