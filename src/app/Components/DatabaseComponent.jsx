import React, { useState } from 'react';
import data from '../data.json'; // Ajusta la ruta según la ubicación de tu archivo JSON

function DatabaseDisplay() {
  const [database, setDatabase] = useState(data);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEdit = (id) => {
    setEditingId(id);
    setEditedData({});
  };

  const handleSave = (id) => {
    // Encuentra el índice del registro que se está editando
    const index = database.findIndex(item => item.id === id);

    // Actualiza los datos en la base de datos con los valores editados
    setDatabase(prevDatabase => {
      const updatedDatabase = [...prevDatabase];
      updatedDatabase[index] = { ...updatedDatabase[index], ...editedData };
      return updatedDatabase;
    });

    // Finaliza el modo de edición
    setEditingId(null);
    setEditedData({});
  };

  const handleDelete = (id) => {
    // Filtra la base de datos para eliminar el registro
    setDatabase(prevDatabase => prevDatabase.filter(item => item.id !== id));

    // Finaliza el modo de edición si se estaba editando el registro eliminado
    if (editingId === id) {
      setEditingId(null);
      setEditedData({});
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedData({});
  };

  return (
    <div className='text-zinc-950'>
      {database.map(item => (
        <div key={item.id}>
          {editingId === item.id ? (
            <div>
              <input
                type="text"
                value={editedData.nombre || item.nombre}
                onChange={e => setEditedData({ ...editedData, nombre: e.target.value })}
              />
              {/* Otros campos de edición */}
              <button onClick={() => handleSave(item.id)}>Guardar</button>
              <button onClick={() => handleDelete(item.id)}>Eliminar</button>
              <button onClick={() => handleCancel()}>Cancelar</button>
            </div>
          ) : (
            <div>
              <p>Nombre: {item.nombre}</p>
              <p>Edad: {item.edad}</p>
              <p>Email: {item.email}</p>
              <button onClick={() => handleEdit(item.id)}>Editar</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DatabaseDisplay;
