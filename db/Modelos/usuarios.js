import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  usuario: { type: String, unique: true, required: true },
  contraseña: { type: String, required: true },
});

// Antes de guardar un usuario en la base de datos, hasheamos su contraseña
/* userSchema.pre('save', async function (next) {
  if (!this.isModified('contraseña')) return next();

  try {
    const hashedContraseña = await bcrypt.hash(this.contraseña, 10);
    this.contraseña = hashedContraseña;
    next();
  } catch (error) {
    return next(error);
  }
}); */

const Usuario = mongoose.models.Usuario || mongoose.model('Usuario', userSchema);

export default Usuario;