import React, { useState } from 'react';

function NuevoProducto() {
  const [producto, setProducto] = useState({
    url_imagen: '',
    nombre: '',
    titulos: [],
    descripcion_corta: '',
    descripcion_larga: '',
    talle: {
      tipo_material: '',
      cantidad_unidades: 0,
    },
    precio: 0,
    tipo_producto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (response.status === 201) {
        // Producto creado exitosamente
        // Puedes redirigir o mostrar un mensaje de éxito aquí
        console.log('Producto creado exitosamente');
      } else {
        // Manejar errores aquí si la creación del producto falla
        console.error('Error al crear el producto');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <h2>Crear un Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="url_imagen">URL de la Imagen:</label>
          <input
          className='text-slate-700'
            type="text"
            id="url_imagen"
            name="url_imagen"
            value={producto.url_imagen}
            onChange={handleChange}
          />
        </div>
        {/* Agrega más campos para los demás detalles del producto */}
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
}

export default NuevoProducto;
