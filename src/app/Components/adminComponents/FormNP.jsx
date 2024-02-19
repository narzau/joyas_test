import ProductCard from "@/app/Components/ProductCard";
import { uploadFiles, showImg } from "@/firebase/config"
import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function FormNewProduct({active}) {
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedSize, setSelectedSize] = useState([])
  const [clasificacion, setClasificacion] = useState('Aros')
  const [nuevoProducto, setNuevoProducto] = useState({})
  const [mostrarCard, setMostrarCard] = useState(false)
  const cantidad = {}
  const handleSubmit = async (e) => {
    e.preventDefault();    
    for(let i = 19 ; i<30; i++ ){
      if(e.target[i].type === 'number'){
        cantidad[e.target[i].name] = e.target[i].value
      } else if(e.target[i].type === 'submit') {
        break
      }}
    
    
    await uploadFiles(e.target[0].files[0], e.target[2].value)
    const url = await showImg(e.target[2].value)
    const producto = {
      clasificacion: e.target[1].value,
      nombre: e.target[2].value,
      descripcionCorta: e.target[3].value,
      descripcionLarga: e.target[4].value,
      precio: e.target[5].value,
      materiales: selectedMaterials,
      tamaños: selectedSize,
      imgDir: url, 
      stock: cantidad
  }
    setNuevoProducto(producto)
    toast('Producto Guardado')
    const res = await fetch('/api/Producto/crearProducto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto)
    })
    
    e.target.reset()
    mostrarTarjeta()
  }

  const cerrarTarjeta = () => {
    setMostrarCard(false)
  }

  const mostrarTarjeta = () => {
    setMostrarCard(true)
    setTimeout(cerrarTarjeta, 3000)

  }

  const handleClasificacion = (e) => {    
    setClasificacion(e.target.value)
    
  }
  return(
    <div className={`${active ? "bg-[#D8EBB5] gap-5 p-12 w-1/2 rounded-xl flex flex-col items-center justify-between transition-all opacity-100 scale-100" : "hidden"}`}>
        <p className="border-[1px] bg-[#FFF1C1] absolute top-[-20px] shadow-md border-black p-3 rounded-md text-xl">Crear Producto</p>
        <div className="flex flex-row items-center justify-around w-full hidd">
        <form className="gap-4 h-full w-1/2 flex flex-col justify-around items-center" onSubmit={handleSubmit}>
          <label className="font-thin text-xl" htmlFor='img'>Imagen</label>
          <input id='img' type='file'/>
          <label className="font-thin text-xl" htmlFor='clasificacion'>Clasificacion</label>
          <select className="rounded-lg" onChange={handleClasificacion} id='clasificacion' name='tipoDeProducto'>
            <option value='Aros'>Aros</option>
            <option value='Aros Argolla'>Aros Argolla</option>
            <option value='Abridores'>Abridores</option>
            <option value='Anillos'>Anillos</option>
            <option value='Pulseras'>Pulseras</option>
            <option value='Collares'>Collares</option>
            <option value='Conjuntos'>Conjuntos</option>
          </select>
          <label className="font-thin text-xl" htmlFor='titulo'>Titulo</label>
          <input className="rounded-lg p-2" id='titulo' type='text'/>
          <label className="font-thin text-xl" htmlFor='descripcion-sm'>Descripcion Corta</label>
          <textarea className="rounded-lg p-2" id='descripcion-sm' type='text'/>
          <label className="font-thin text-xl" htmlFor='descripcion-lg'>Descripcion Larga</label>
          <textarea className="rounded-lg p-2" id='descripcion-lg'  type='text'/>
          <label className="font-thin text-xl" htmlFor='precio'>Precio</label>
          <input className="rounded-lg p-2" id='precio' type='number'/>
          <fieldset onChange={e => {
            const checkboxes = e.currentTarget.querySelectorAll('input[type="checkbox"]');
            const selectedValues = Array.from(checkboxes)
              .filter(checkbox => checkbox.checked)
              .map(checkbox => checkbox.value);
            setSelectedMaterials(selectedValues)
          }}>
            <legend className="font-thin text-xl">Material del Producto:</legend>
            <label>
              <input type="checkbox" name="material[]" value="Acero Quirurgico"/> Acero Quirurgico
            </label>
            <br/>
            <label>
              <input type="checkbox" name="material[]" value="Acero Dorado"/> Acero Dorado
            </label>
            <br/>
            <label>
              <input type="checkbox" name="material[]" value="Plata"/> Plata
            </label>
            <br/>
          </fieldset>          
          <fieldset disabled={clasificacion === 'Aros' || clasificacion === 'Dijes' } onChange={e => {
            const checkboxes = e.currentTarget.querySelectorAll('input[type="checkbox"]');
            const selectedValues = Array.from(checkboxes)
              .filter(checkbox => checkbox.checked)
              .map(checkbox => checkbox.value);
            setSelectedSize(selectedValues)
          }}>
            <legend className="font-thin text-xl">Talles del Producto</legend>
            <label>
              <input type="checkbox" name="talle[]" value="16"/> 16
            </label>
            <br/>
            <label>
              <input type="checkbox" name="talle[]" value="17"/> 17
            </label>
            <br/>
            <label>
              <input type="checkbox" name="talle[]" value="18"/> 18
            </label>
            <br/>
            <label>
              <input type="checkbox" name="talle[]" value="19"/> 19
            </label>
            <br/>
            <label>
              <input type="checkbox" name="talle[]" value="20"/> 20
            </label>
            <br/>
            <label>
              <input type="checkbox" name="talle[]" value="21"/> 21
            </label>
            <br/>
            <label>
              <input type="checkbox" name="talle[]" value="22"/> 22
            </label>
            <br/>
          </fieldset>
          <fieldset className="font-thin text-xl flex flex-col items-center gap-4" htmlFor="cantidadMat">Cantidad por Material:<br/>
          {selectedMaterials.map(nombre => 
            <label  key={nombre} className=" flex items-center flex-col">{nombre}<br/>
            <input className="rounded-lg p-2" type='number' key={nombre} name={nombre}/><br/>
            </label>               
          )}
          </fieldset>
          <fieldset className="font-thin text-xl flex flex-col items-center gap-4" htmlFor="cantidadMat">Cantidad por Talle:<br/>
          {selectedSize.map(nombre => 
            <label  key={nombre} className="flex items-center flex-col">{nombre}<br/>
            <input className="rounded-lg p-2" type='number' key={nombre} name={nombre}/><br/>
            </label>               
          )}
          </fieldset>
          <button className="w-full p-3 bg-[#FFF1C1] rounded-lg hover:shadow-xl shadow-md hover:scale-100 scale-90 transition-all" type='submit'>Crear</button>
        </form>
        {mostrarCard && 
        <div className="fixed bottom-0 right-0">
          <ProductCard 
            imageSrc={nuevoProducto.imgDir}
            title={nuevoProducto.nombre}
            description={nuevoProducto.descripcionCorta}
            price={nuevoProducto.precio}
          />
        </div>}
        
        
      </div>
      <Toaster/>
    </div>
  )
}