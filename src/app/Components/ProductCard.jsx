import React from "react";

const ProductCard = ({
  ideProducto,
  key,
  selectProduct,
  imageSrc,
  title,
  description,
  price,
  setVerProduct
}) => {
  return (
    <div className="cursor-pointer flex-1 max-w-full flex flex-col items-center justify-between h-full mx-auto rounded-lg p-4 scale-100 transition-all">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h3 className="text-center text-xl font-semibold mt-2 text-slate-950">
        {title}
      </h3>
      <p className="text-center text-gray-600">{description}</p>
      <p className="text-lg font-semibold mt-2 text-slate-950">${price}</p>
      <div className="w-full flex flex-col border-solid border-[1px] border-black rounded-lg scale-75 hover:shadow-lg">
        <p onClick={() => setVerProduct(ideProducto)} className="bg-transparent w-full text-center uppercase font-medium hover:bg-[#FFBEE3] transition-all text-black p-3 rounded-t-lg">
          Ver Mas
        </p>
        <div className="flex flex-row justify-between w-full">
          <p
            onClick={() => selectProduct(ideProducto)}
            className="bg-transparent w-full text-center uppercase font-medium hover:bg-[#FFBEE3] transition-all text-black p-3 rounded-bl-lg"
          >
            Agregar
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
