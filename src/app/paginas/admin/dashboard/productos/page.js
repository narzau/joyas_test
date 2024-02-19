'use client'

import EditProduct from "@/app/Components/adminComponents/EditProducto"
import FormViewProduct from "@/app/Components/adminComponents/FormMP"
import FormNewProduct from "@/app/Components/adminComponents/FormNP"
import { useState } from "react"

export default function Productos() {
  const [active,setActive] = useState(true)
  const [idProduct, setIdProduct] = useState()
  const [activeOne, setActiveOne] = useState(false)
  const [actualId, setActualId] = useState()

  const viewForm = (e) => {
    setActiveOne(true)
    setActualId(e)
  }

  const falso = () => {
    setActive(false)
  }
  const verdadero = () => {
    setActive(true)
  }


  return(
    <main className="bg-[#FFBEE3] text-black p-5 flex flex-col items-center justify-start gap-5">
      <h1 className="uppercase p-2 text-2xl font-bold">Productos</h1>
      <nav>
        <ul className="list-none gap-3 flex flex-row items-center justify-around">
          <li onClick={verdadero} className="p-5 shadow-md uppercase rounded-md bg-[#FFF1C1] scale-90 hover:scale-100 hover:shadow-lg transition-all cursor-pointer">Crear Producto</li>
          <li onClick={falso} className="p-5 shadow-md uppercase rounded-md bg-[#FFF1C1] scale-90 hover:scale-100 hover:shadow-lg transition-all cursor-pointer">Mostrar Productos</li>
        </ul>
      </nav>
      <FormNewProduct active={active}/> 
      <FormViewProduct active={active} viewForm={viewForm}/>
      {activeOne && <EditProduct setActiveOne={setActiveOne} activeOne={activeOne} productId={actualId}/>}
        

    </main>
  )
}