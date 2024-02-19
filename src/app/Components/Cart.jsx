import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import YourComponent from "./MercadoPago";
import { toast } from "sonner";

export default function Cart({ ...props }) {
  const [articulos, setArticulos] = useState([])
  const [totall, setTotall] = useState()

  useEffect(() => {  
    /* console.log(articulos)   */
      let totalParcial = 0
      for(let i=0 ; i<articulos.length ; i++){
        if(props.productsSelected.includes(articulos[i].idProduct)){
          totalParcial=totalParcial + (articulos[i].seRepite * articulos[i].precio)
          console.log(totalParcial)
          

        }else{
          const auxArticulos=[...articulos]       
          auxArticulos.splice(i,1)
          setArticulos(auxArticulos)
        }
      }
      setTotall(totalParcial)
      props.setTotal(totalParcial)

  }, [props.productsSelected, articulos]
  )
  


  function contarRepeticiones(array, elemento) {
    /* console.log(props.productsSelected) */
    var repeticiones = array.filter(function (item) {
        return item === elemento;
    }).length;

    return repeticiones;
}
  
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);
  const handleClick = () => {
    setIsOpen(false);
    props.setCartOpen(false);
  };

  return (
    <div
      className={`bg-blur backdrop-blur-md inset-0 z-50 top-0 left-0 w-screen h-screen bg-transparent flex items-center justify-center duration-300 transition-all fixed ${
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="overflow-auto flex gap-10 flex-col items-center justify-between rounded border-orange-200 border-8 w-full lg:w-1/2 h-4/5 bg-black p-10">
        <p
          onClick={handleClick}
          className="cursor-pointer bg-red-500 text-xl rounded w-10 h-10 text-center flex items-center justify-center text-black font-bold"
        >
          X
        </p>
        <p className="text-xl uppercase tracking-wider font-medium underline">Tu Carrito</p>
        {props.productsSelected
        .filter((elemento, indice, self) => {
          return self.indexOf(elemento) === indice;
        })
        .map((producto) => {
          return (
            <ProductCart
              seRepite={contarRepeticiones(props.productsSelected, producto)}
              productsSelected={props.productsSelected}
              productId={producto}
              setTotal={props.setTotal}
              total={props.total}
              items={props.items}
              setItems={props.setItems}
              selectProduct={props.selectProduct}
              restarUnProduct={props.restarUnProduct}
              articulos={articulos}
              setArticulos={setArticulos}
            />
          );
        })}
        <p>Total: $ {props.total}</p>
        <button className="bg-green-400 uppercase text-black font-bold tracking-widest text-xl rounded p-4 scale-90 hover:scale-100 transition-all" onClick={() => {props.siguiente(true); toast.success('Paso 1 de 3')}}>Siguiente</button>
        
      </div>
    </div>
  );
}
