export default function NavGalery({ clasificacion, props }) {
  return (
    <div className="p-0 lg:p-6 box-content w-1/4">
      <ul
        className={`box-border p-1 lg:p-4 rounded-e-lg lg:rounded-2xl gap-4 shadow-2xl bg-[#FFBEE3] flex flex-col justify-start items-center ${
          props ? " box-border sticky  overflow-y-auto w-full top-28" : "w-full"
        }`}
      >
        <li
          onClick={() => clasificacion("Abridores")}
          className="text-center shadow-lg cursor-pointer hover:bg-[#D8EBB5] rounded-lg p-3 lg:p-5 scale-90 hover:scale-100 transition-all border-b-2 border-slate-700 text-black w-full"
        >
          Abridores
        </li>
        <li
          onClick={() => clasificacion("Collares")}
          className="text-center shadow-lg cursor-pointer hover:bg-[#D8EBB5] rounded-lg p-3 lg:p-5 scale-90 hover:scale-100 transition-all border-b-2 border-slate-700 text-black w-full"
        >
          Collares
        </li>
        <li
          onClick={() => clasificacion("Aros")}
          className="text-center shadow-lg cursor-pointer hover:bg-[#D8EBB5] rounded-lg p-3 lg:p-5 scale-90 hover:scale-100 transition-all border-b-2 border-slate-700 text-black w-full"
        >
          Aros
        </li>
        <li
          onClick={() => clasificacion("Aros Argolla")}
          className="text-center shadow-lg cursor-pointer hover:bg-[#D8EBB5] rounded-lg p-3 lg:p-5 scale-90 hover:scale-100 transition-all border-b-2 border-slate-700 text-black w-full"
        >
          Aros Argolla
        </li>
        <li
          onClick={() => clasificacion("Pulseras")}
          className="text-center shadow-lg cursor-pointer hover:bg-[#D8EBB5] rounded-lg p-3 lg:p-5 scale-90 hover:scale-100 transition-all border-b-2 border-slate-700 text-black w-full"
        >
          Pulseras
        </li>
        <li
          onClick={() => clasificacion("Conjuntos")}
          className="text-center shadow-lg cursor-pointer hover:bg-[#D8EBB5] rounded-lg p-3 lg:p-5 scale-90 hover:scale-100 transition-all border-b-2 border-slate-700 text-black w-full"
        >
          Conjuntos
        </li>
      </ul>
    </div>
  );
}
