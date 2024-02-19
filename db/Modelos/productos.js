import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
  clasificacion: String,
  nombre: String,
  descripcionCorta: String,
  precio: Number,
  imgDir: String,
  descripcionLarga: String,
  materiales: [String],
  tamaños: [String],
  stock: mongoose.Schema.Types.Mixed
});

const Producto = mongoose.models.Producto || mongoose.model('Producto', productSchema);

export default Producto;