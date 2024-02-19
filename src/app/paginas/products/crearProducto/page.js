'use client'
import React, { useState } from 'react';

export default function CrearProducto() {
  const [nombre, setNombre] = useState('');
  const [descripcionCorta, setDescripcionCorta] = useState('');
  const [precio, setPrecio] = useState('');
  const [imgDir, setImgDir] = useState('');
  const [descripcionLarga, setDescripcionLarga] = useState('');
  const [tamaño, setTamaño] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProducto = {
    nombre,
    descripcionCorta,
    precio,
    imgDir,
    descripcionLarga,
    tamaño
    };

    try {
      const respuesta = await fetch('/api/Producto/crearProducto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoProducto)
      });

      if (respuesta.status === 201) {
        console.log('Producto creado con éxito');
        setNombre('');
        setDescripcionCorta('');
        setPrecio('');
        setImgDir('');
        setDescripcionLarga('');
        setTamaño('');
      } else {
        console.error('Error al crear Producto');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <h1>Crear Nuevo Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            className='text-black'
            type="text"            
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Descripciion Corta:</label>
          <input
            className='text-black'
            type="text"            
            onChange={(e) => setDescripcionCorta(e.target.value)}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            className='text-black'
            type="number"            
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            className='text-black'
            type="text"            
            onChange={(e) => setImgDir(e.target.value)}
          />
        </div>
        <div>
          <label>Descripciion Larga:</label>
          <input
            className='text-black'
            type="text"            
            onChange={(e) => setDescripcionLarga(e.target.value)}
          />
        </div>
        <div>
          <label>Tamaño:</label>
          <input
            className='text-black'
            type="number"            
            onChange={(e) => setTamaño(e.target.value)}
          />
        </div>
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
}