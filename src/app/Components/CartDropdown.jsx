import React, { useState } from 'react';

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleDropdown}
      >
        Carrito de Compra
      </button>
      {isOpen && (
        <div className="absolute top-full text-slate-950 left-0 bg-white border border-gray-300 p-4 w-48">
          {/* Aquí puedes agregar contenido dentro del desplegable */}
          <p className="mb-2">Item 1</p>
          <p className="mb-2">Item 2</p>
          <p className="mb-2">Item 3</p>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
