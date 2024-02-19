import conexion from '../../db';
import Producto from '../../Modelos/productos'



// dataHandler.js

export async function verProductos() {
  conexion();
  try {
    // Consulta tus datos en MongoDB usando Mongoose
    const data = await Producto.find();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de MongoDB:', error);
    throw new Error('Error al obtener los datos');
  }
}

export async function verProductosLimitados(limite) {
  conexion();
  try {
    // Consulta tus datos en MongoDB usando Mongoose
    const data = await Producto.find().limit(limite);
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de MongoDB:', error);
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

export async function verAlgunosProductos(campo, valor) {
  conexion();
  try {
    // Consulta tus datos en MongoDB usando Mongoose
    const data = await Producto.find({[campo]: valor });
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de MongoDB:', error);
    throw new Error('Error al obtener los datos');
  }
}
