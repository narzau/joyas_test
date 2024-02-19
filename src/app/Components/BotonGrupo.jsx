import React from "react";

export default function BotonGrupo({ src, alt, titulo, setClasificacion }) {
  return (
    <div className="flex items-center justify-center">
      <a
        onClick={(e) => {
          e.preventDefault();
          setClasificacion(titulo);
        }}
        href="/products"
        className="lg:h-40 h-20 scale-90 hover:scale-100 transition-all p-4 bg-[#D8EBB5] shadow-md rounded-xl flex flex-col justify-around items-center"
      >
        <img className="hidden lg:block w-20 h-3/4 object-cover" src={src} alt={alt} />
        <p className="w-20 text-slate-950 text-center">{titulo}</p>
      </a>
    </div>
  );
}
