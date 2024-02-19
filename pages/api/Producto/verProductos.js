// pages/api/miapi.js

import { verProductos, verProductosLimitados } from '../../../db/Controladores/Productos/ver'; // Ajusta la ruta según tu estructura de carpetas

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const data = await verProductos();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const body = JSON.parse(req.body)
      console.log(body.limite)
      const data = await verProductosLimitados(body.limite);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: 'Ruta no encontrada' });
  }
};
