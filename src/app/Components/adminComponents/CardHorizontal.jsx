export default function CardHorizontal({data}) {
  return(
    <div className="p-3 border-[1px] border-black gap-0 flex flex-row bg-white rounded-lg h-40 scale-90 hover:scale-100 transition-all w-full items-center justify-left"  >
      <img src={data.imgDir} className="h-full"/>
      <div className="ml-3 h-full w-full flex flex-col gap-1 justify-start">
        <h3 className="font-thin text-sm">
          {data.clasificacion}
        </h3>
        <h2 className="font-semibold text-xl">
          {data.nombre}
        </h2>
        <p className="text-md">
          {data.descripcionCorta}
        </p>
      </div>
      <p className="font-bold bg-black text-white rounded-md p-2 whitespace-nowrap ">$ {data.precio}</p>
      
    </div>
  )
}