import React, {useState, useSteate} from "react";
import YourComponent from "./MercadoPago";

export default function ConfirmacionCompra ({...props}) {
  const [guardarId, setGuardarId] = useState()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    pais: "",
    provincia: "",
    ciudad: "",
    direccion: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con los datos del formulario, por ejemplo, enviarlos a un servidor
    console.log("Formulario enviado:", formData);
  };

  return(
    <div className={`inset-0 z-50 top-0 left-0 w-screen h-screen bg-transparent flex items-center justify-center duration-300 transition-all fixed ${
      props.abrirConf ? "flex opacity-100" : "hidden opacity-0"
    }`}>
      <div className="overflow-auto flex gap-10 flex-col items-center justify-between rounded border-orange-200 border-8 w-full lg:w-1/2 h-4/5 bg-black p-10">
        <p
          onClick={() => props.cerrarConf(false)}
          className="cursor-pointer bg-red-500 text-xl rounded w-10 h-10 text-center flex items-center justify-center text-black font-bold"
        >
          X
        </p>
        <p className="text-xl uppercase tracking-wider font-medium underline">Confirmando Informacion</p>
        <p>Confirmemos la informacion ingresada para efectuar el envio y confirmar el pago</p>
        <div className="flex flex-col gap-5">

        <p><span className="text-xl capitalize font-bold">Nombre y Apellido:</span><br></br> {props.dataForm.nombre}</p>
        <p><span className="text-xl capitalize font-bold">Correo Electronico:</span><br></br> {props.dataForm.email}</p>
        <p><span className="text-xl capitalize font-bold">Telefono:</span><br></br> {props.dataForm.telefono}</p>
        <p><span className="text-xl capitalize font-bold">Direccion:</span><br></br> {props.dataForm.pais}, {props.dataForm.provincia}, {props.dataForm.ciudad}, {props.dataForm.direccion}</p>
        <p><span className="text-xl capitalize font-bold">Total:</span> <br></br> $ {props.total}</p>
        <p>{guardarId}</p>

        </div>
        
        <YourComponent guardarId={setGuardarId} abrirConf={props.abrirConf} items={props.items} dataForm={props.dataForm}/>
        

      </div>
    </div>
  )
}