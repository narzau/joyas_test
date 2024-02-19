import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProductCart({
  total,
  setTotal,
  productsSelected,
  productId,
  seRepite,
  items,
  setItems,
  selectProduct,
  restarUnProduct,
  articulos,
  setArticulos
}) {
  const [data, setData] = useState({});
  useEffect(() => {
    if (typeof data.precio === "number") {
      /* console.log(seRepite) */
      const seEncuentra = articulos.some((articulo) => productId === articulo.idProduct)
      if(seRepite===1 && !seEncuentra){
        const valores = [...articulos]
        valores.push({idProduct: productId, precio: data.precio, seRepite: seRepite})
        setArticulos(valores)
      }else if(seRepite>=1){
        let indice
        for(let i=0 ; i<articulos.length ; i++) {
          if(articulos[i].idProduct === productId){
            indice=i
            break
          }
        }
        const valores = [...articulos]
        valores.splice(indice,1)
        valores.push({idProduct: productId, precio: data.precio, seRepite: seRepite})
        setArticulos(valores)
      }
      if(seRepite>1){
        let matriz = [...items]        
        var indiceAEliminar = matriz.findIndex((eliminado) => {return eliminado.title === data.nombre});
        
        var elementoEliminado = matriz.splice(indiceAEliminar, 1)[0];
        elementoEliminado.quantity = seRepite;
        matriz.push(elementoEliminado)
        setItems(matriz)
        
        
      } else {
        let matriz = [...items]
        if(matriz.findIndex((eliminado) => {return eliminado.title === data.nombre}) < 0){
          matriz.push({
            title: data.nombre,
            currency_id: "ARS",
            picture_url: data.imgDir,
            description: data.descripcionCorta,
            category_id: data.clasificacion,
            quantity: seRepite,
            unit_price: data.precio,
          })
          setItems(matriz) 
        } else {
          var indiceAEliminar = matriz.findIndex((eliminado) => {return eliminado.title === data.nombre});
        
        var elementoEliminado = matriz.splice(indiceAEliminar, 1)[0];
        elementoEliminado.quantity = seRepite;
        matriz.push(elementoEliminado)
        setItems(matriz)
        }

      }
    }
    
  }, [data.precio, seRepite]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/Producto/verAlgunosProductos", {
          method: "POST",
          body: JSON.stringify({
            campo: "_id",
            valor: productId,
          }),
        });

        if (!response.ok) {
          throw new Error("No se pudo obtener la data");
        }

        const responseData = await response.json();
        setData(responseData[0]);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    

    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full h-20 scale-90 hover:scale-100 transition-transform">
        <img
          className="rounded object-cover w-24 h-24"
          src={data.imgDir}
          alt="Producto"
        />
        <div className="p-3 text-white w-3/5 text-center flex flex-col items-start justify-between h-full">
          <p>{data.nombre}</p>
          <div className=" flex flex-row gap-3">
            <p onClick={() => restarUnProduct(productId)} className="border-solid border-white border-[1px] p-2 text-lg"> - </p>
            <p type="number" className="border-solid border-white border-[1px] p-2 text-lg"> {seRepite} </p> 
            <p onClick={() => selectProduct(productId)} className="border-solid border-white border-[1px] p-2 text-lg"> + </p>
          </div>
        </div>
        <p>${seRepite*data.precio}</p>
      </div>
    </>
  );
}