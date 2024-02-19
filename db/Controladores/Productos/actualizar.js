import conexion from '../../db';
import Producto from '../../Modelos/productos'



// dataHandler.js

export async function actualizarCampo({idProduct, campos, datos}) {
  conexion();
  try {
    // Consulta tus datos en MongoDB usando Mongoose

    const updateObj = campos.reduce((acc, campo, index) => {
      acc[campo] = datos[index];
      return acc;
    }, {});

    const data = await Producto.findByIdAndUpdate(idProduct, updateObj);
/*     return data;
 */  } catch (error) {
    console.error('Error al Actualizar los datos de MongoDB:', error);
    throw new Error('Error al obtener los datos');
  }
}

export async function verUnProducto(props) {
  conexion();
  try {
    // Consulta tus datos en MongoDB usando Mongoose
    const data = await Producto.findById(props);
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de MongoDB:', error);
    throw new Error('Error al obtener los datos');
  }
}