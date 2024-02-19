// pages/api/miapi.js

import { actualizarCampo } from '../../../db/Controladores/Productos/actualizar'; // Ajusta la ruta según tu estructura de carpetas

export default async (req, res) => {
  
  if (req.method === 'POST') {
    try {
      const {idProduct, campos, datos} = JSON.parse(req.body)
      const data = await actualizarCampo({ idProduct, campos, datos });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: 'Ruta no encontrada' });
  }
};