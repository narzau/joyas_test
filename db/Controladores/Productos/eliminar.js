import conexion from '../../db';
import Producto from '../../Modelos/productos'

export async function eliminarUnProducto(props) {
  conexion();
  try {
    // Consulta tus datos en MongoDB usando Mongoose
    const data = await Producto.findByIdAndDelete(props);
  } catch (error) {
    console.error('Error al Eliminar datos de MongoDB:', error);
    throw new Error('Error al eliminar los datos');
  }
}