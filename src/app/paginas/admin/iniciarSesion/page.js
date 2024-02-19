'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function IniciarSesion() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      usuario,
      contraseña
    };

    try {
      const respuesta = await fetch('/api/Usuario/singIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario)
      });

      if (respuesta.status === 201) {
        console.log('Inicio de sesion con éxito');
        setUsuario('');
        setContraseña('');
        router.push('/paginas/admin/dashboard')
      } else {
        console.error('Error al ingreso del usuario', error);
        
      }
      e.target.reset()
    } catch (err) {
      console.log('Error de red:', err);
    }
  };
  return (
    <main className="w-screen h-screen bg-[#FFF1C1] flex flex-col justify-around">      
      <div className="bg-[#FFBEE3] w-1/3 mx-auto flex flex-col justify-around p-5 text-[#000000] rounded-xl shadow-md">
      <h1 className="text-black text-xl mx-auto">Iniciar Sesion</h1>
        <img className="drop-shadow-lg w-1/2 mx-auto" src="/logo-nonebg.png" /> 
        <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-row justify-between cursor-pointer text-lg items-center">
            <label htmlFor="user" >Usuario</label>
            <input name="user" id="user" type="text" 
            className="p-3 rounded"
            onChange={(e) => setUsuario(e.target.value)}/>
          </div>
          <div className="flex flex-row justify-between cursor-pointer text-lg items-center">
            <label htmlFor="pass" >Contraseña</label>
            <input name="pass" id="pass" type="password" 
            className="p-3 rounded"
            onChange={(e) => setContraseña(e.target.value)}/>
          </div>
          <input type="submit" value="Ingresar" className="font-bold uppercase hover:shadow-lg hover:scale-100 scale-90 transition-all rounded-xl p-5 cursor-pointer bg-black text-[#FFF1C1]"/>
        </form>     
      </div>      
    </main>
  )
}