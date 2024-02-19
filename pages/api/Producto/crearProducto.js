import crearProducto from '../../../db/Controladores/Productos/crear';

export default async function handler(req, res) {
  console.log('Creando Producto')
  if (req.method === 'POST') {
    crearProducto(req, res);
    console.log('Producto Creado')
    console.log(req.body)    
  } else {
    res.status(405).end(); 
  }
}
