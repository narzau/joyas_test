import React, {useState, useSteate} from "react";
import { toast } from "sonner";

export default function FormCPts ({...props}) {

  const enviarEmail = async () => {
    let datos = JSON.stringify(props.dataForm)
    const response = await fetch('/api/Envios/mailing/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        text: `
        Datos del Posible Comprador
        \n
        \n
        Envio o Retiro: ${props.dataForm.envio}\n
        Nombre Completo: ${props.dataForm.nombre}\n
        Email: ${props.dataForm.email}\n
        Telefono: ${props.dataForm.telefono}\n
        Codigo Postal: ${props.dataForm.codigoPostal}\n
        Direccion: ${props.dataForm.pais}, ${props.dataForm.provincia}, ${props.dataForm.ciudad}, ${props.dataForm.direccion} \n
        Total: $${props.total}\n
        items:\n ${props.items.map(item => 
          `\t Producto: ${item.title}, X${item.quantity} `
        ).join('\n')}`
    })
    })
    console.log(response)
    console.log(props.items)
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    props.guardarData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    console.log(props.dataForm)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con los datos del formulario, por ejemplo, enviarlos a un servidor
    console.log("Formulario enviado:", props.dataForm);
  };

  return(
    <div className={`inset-0 z-50 top-0 left-0 w-screen h-screen bg-transparent flex items-center justify-center duration-300 transition-all fixed ${
      props.abrirForm ? "flex opacity-100" : "hidden opacity-0"
    }`}>
      <div className="overflow-auto flex gap-10 flex-col items-center justify-between rounded border-orange-200 border-8 w-full lg:w-1/2 h-4/5 bg-black p-10">
        <p
          onClick={() => props.cerrarForm(false)}
          className="cursor-pointer bg-red-500 text-xl rounded w-10 h-10 text-center flex items-center justify-center text-black font-bold"
        >
          X
        </p>
        <p className="text-xl uppercase tracking-wider font-medium underline">Formulario de Compra</p>
        <p>Rellena el formulario de compra con datos de envio y de contacto para poder enviar los productos que deseas</p>
        <form action="https://formsubmit.co/ghersinichmatias@outlook.com" enctype="multipart/form-data" method="POST" className="flex flex-col gap-5" onSubmit={handleSubmit}>

          <fieldset className="border-white border-solid border-[1px] p-3 flex flex-col">
            <legend className="px-2 text-center">Informacion Basica</legend>

            <label htmlFor="Nombre">Nombre y Apellido </label>
            <input className="text-black p-3 rounded mt-3" name="Nombre" id="nombre" type="text" required value={props.dataForm.nombre}
            onChange={handleChange} placeholder="Matias Ghersinich"/>
            <br/>

            <label htmlFor="Email">Email </label>
            <input className="text-black p-3 rounded mt-3" name="Email" id="email" type="email" required value={props.dataForm.email}
            onChange={handleChange} placeholder="ghersinichmatias@email.com"/>
            <br/>        

            <label htmlFor="telefono">Telefono </label>
            <input className="text-black p-3 rounded mt-3" name="Telefono" id="telefono" type="tel" required value={props.dataForm.telefono}
            onChange={handleChange} placeholder="+543584303689"/>
          </fieldset>

          <fieldset className="border-white border-solid border-[1px] p-3 flex flex-col">
            <legend className="px-2 text-center">Informacion De Envio</legend>
            
            <label htmlFor="envio">Envio o Retiro</label>
            <select className="text-black p-3 rounded mt-3" onChange={handleChange} required id='envio'>
              <option selected disabled>Selecciona una Opcion</option>
              <option value='Retiro en Sucursal'>Retiro en Sucursal</option>
              <option value='Envio a Domicilio'>Envio a Domicilio</option>
            </select>
            <br/>  


            <label htmlFor="Pais">Pais </label>
            <input className="text-black p-3 rounded mt-3" name="Pais" id="pais" type="text" required value={props.dataForm.pais}
            onChange={handleChange} placeholder="Argentina"/>
            <br/>

            <label htmlFor="Provincia">Provincia </label>
            <input className="text-black p-3 rounded mt-3" name="Provincia" id="provincia" type="text" required value={props.dataForm.provincia}
            onChange={handleChange} placeholder="Córdoba"/>
            <br/>

            <label htmlFor="Ciudad">Ciudad </label>
            <input className="text-black p-3 rounded mt-3" name="Ciudad" id="ciudad" type="text" required value={props.dataForm.ciudad}
            onChange={handleChange} placeholder="Rio Cuarto"/>
            <br/>

            <label htmlFor="codigoPostal">Codigo Postal</label>
            <input className="text-black p-3 rounded mt-3" name="CodigoPostal" id="codigoPostal" type="text" required value={props.dataForm.codigoPostal}
            onChange={handleChange} placeholder="5800"/>
            <br/>

            <label htmlFor="Direccion">Direccion Completa </label>
            <input className="text-black p-3 rounded mt-3" name="Direccion" id="direccion" type="text" required value={props.dataForm.direccion}
            onChange={handleChange} placeholder="Savedra 1845 - dpto 4 pise 7"/>
            
          </fieldset>
          <button className="bg-green-400 uppercase text-black font-bold tracking-widest text-xl rounded p-4 scale-90 hover:scale-100 transition-all" onClick={() => {props.cerrarConf(true); toast.success('Paso 2 de 3'); enviarEmail()}} type="submit">Siguiente</button>
        </form>

      </div>
    </div>
  )
}