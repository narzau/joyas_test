import { useEffect, useState } from "react";

export default function VerMas({idProducto, setVerProduct, selectProduct}) {
  const [data, setData] = useState()
  useEffect(() => {
    fetch("/api/Producto/verUnProducto", {
      method: "POST",
      body: idProducto,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la data");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      })
  }, [idProducto]);
  return(
    <div className="bg-blur backdrop-blur-md top-0 left-0 w-screen h-screen fixed z-50 flex items-center justify-center">
      
    {data ? 
      <div className="p-6 top-0 left-0 w-[60vw] h-[90vh] bg-white z-50 rounded-2xl shadow-xl flex flex-col justify-between items-center">
        <div className="flex flex-row h-1/3 gap-3">

          <div className="w-1/2">
            <img src={data.imgDir}/>
          </div>

          <div className="text-black flex flex-col justify-around items-center w-1/2">
            <div>
              <p className="font-bold uppercase">{data.nombre}</p>
            </div>
            <div>
              <p className="">{data.descripcionCorta}</p>
            </div>

          </div>
        </div>



        <div className="text-black flex flex-col justify-between items-center gap-5 p-10 h-1/3">
          <p>${data.precio}</p>
          <div onClick={() => selectProduct(idProducto)} className="bg-[#D8EBB5] rounded-md p-3 uppercase font-bold">
            Agregar Al Carrito
          </div>
          <div onClick={() => setVerProduct(null)} className="bg-[#D8EBB5] rounded-md p-3 uppercase font-bold">
            <p>Atras</p>
          </div>
        </div>
        </div>
      

    : <p>Hola</p> }
    
    </div>
  )
}