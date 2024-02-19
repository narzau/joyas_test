import React from "react";
import BotonGrupo from "./BotonGrupo";

export default function GruposArticulos({ props, clasificacion }) {
  return (
    <>
      <div className="py-0 mx-auto flex flex-row flex-wrap w-3/4 justify-around items-center">
        {props.map((seccion) => (
          <BotonGrupo
            key={seccion.id}
            src={seccion.src}
            alt={seccion.alt}
            titulo={seccion.titulo}
            setClasificacion={clasificacion}
          />
        ))}
      </div>
    </>
  );
}
