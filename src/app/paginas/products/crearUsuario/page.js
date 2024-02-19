'use client'
import React, { useState } from 'react';

export default function CrearUsuario() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      usuario,
      contraseña
    };

    try {
      const respuesta = await fetch('/api/crearUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario)
      });

      if (respuesta.status === 201) {
        console.log('Usuario creado con éxito');
        setUsuario('');
        setContraseña('');
      } else {
        console.error('Error al crear usuario');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <h1>Crear Nuevo Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            className='text-black'
            type="text"
            /*value={nombre}*/
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            className='text-black'
            type="pass"
            /*value={correo}*/
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
}
