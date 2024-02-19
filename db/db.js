import mongoose from "mongoose";

export default async function conexion() {
  try {
    await mongoose.connect('mongodb+srv://MGH:M4tistartv!@felicejoyas.rtetduf.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
  
}


/*export default connectDB;*/
