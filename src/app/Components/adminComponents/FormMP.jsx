import { useEffect, useState } from "react";
import CardHorizontal from "./CardHorizontal";
import EditProduct from "./EditProducto";

export default function FormViewProduct({ active, viewForm }) {
  const [productos, setProductos] = useState([]);
  const [activeOne, setActiveOne] = useState(false);
  const [actualId, setActualId] = useState();
  


  


  useEffect(() => {
    // Realiza la llamada a la API dentro de useEffect
    fetch('/api/Producto/verProductos')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, [active]); // El segundo argumento de useEffect, un array vacío, garantiza que se ejecute una sola vez al montar el componente

  return (
    <div className={`${!active ? " bg-[#D8EBB5] w-2/3 rounded-xl flex flex-col items-center justify-around transition-all opacity-100 scale-100 p-10 gap-2" : "hidden"}`}>
      <p className="border-[1px] bg-[#FFF1C1] absolute top-[-20px] shadow-md border-black p-3 rounded-md text-xl z-10">Ver Productos</p>
      {/* Renderiza los productos aquí */}
      {productos.map((producto) => (
          <div className="w-full cursor-pointer" onClick={() => viewForm(producto._id)}>
            <CardHorizontal  data={producto}/>
          </div>
      ))}
      {activeOne && <EditProduct setActiveOne={setActiveOne} activeOne={activeOne} productId={actualId}/>}
      
      
    </div>
  )
}
