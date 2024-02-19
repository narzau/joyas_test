/* 'use client'

import { useEffect, useState } from "react"

export default function Ordenes() {
  const [ref, setRef] = useState()

  useEffect(() => {
    if(ref !== undefined){
      verificar()

    }
  }, [ref])

  const imprimir = (e) => {
    e.preventDefault()
    setRef(e.target[0].value)
    
    
  }

  function verificar() {
    const paymentId = ref; // Reemplaza con el ID real del pago
    const accessToken = "TEST-3771293736871869-120616-718a988246d5a9dbc0a0e25eebaaccaf-1579945817"; // Reemplaza con tu token de acceso

    const url = `https://api.mercadopago.com/v1/payments/${paymentId}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // Verifica el estado del pago
        if (data.status === 'approved') {
          console.log('El pago fue aprobado.');
        } else {
          console.log('El pago no fue aprobado.');
        }
      })
      .catch(error => {
        console.error('Error al verificar el estado del pago:', error);
      });

  }
  


  return(
    <main className="bg-[#FFBEE3] text-black p-5 flex flex-col items-center justify-start gap-5">
      <p>Verificar Pago</p>
      <form onSubmit={imprimir}>
        <label htmlFor="verificar">Verificar pago</label>
        <input id='verificar' type='text'/>
        <input type='submit'/>
      </form>
    </main>
  )
} */

// Tu componente React
'use client'
import { useEffect, useState } from 'react';

export default function Ordenes() {
  const [ref, setRef] = useState(undefined);
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    if (ref !== undefined) {
      verificar();
    }
  }, [ref]);

  /* const verificar = async () => {
    try {
      const response = await fetch('/api/MercadoPago/verificarPago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ paymentId: ref })
      });
      console.log(response)
      const data = await response.json();

      // Verifica el estado del pago
      if (data.status === 'approved') {
        console.log('El pago fue aprobado.');
        setPaymentStatus('El pago fue aprobado.');
      } else {
        console.log('El pago no fue aprobado.');
        setPaymentStatus('El pago no fue aprobado.');
      }
    } catch (error) {
      console.error('Error al verificar el estado del pago:', error);
      setPaymentStatus('Error al verificar el estado del pago.');
    }
  }; */

  const imprimir = (e) => {
    e.preventDefault();
    setRef(e.target[0].value);
  };

  return (
    <main className="bg-[#FFBEE3] text-black p-5 flex flex-col items-center justify-start gap-5">
      <p>Verificar Pago</p>
      <form onSubmit={imprimir}>
        <label htmlFor="verificar">Verificar pago</label>
        <input id="verificar" type="text" />
        <input type="submit" />
      </form>
      {paymentStatus && <p>{paymentStatus}</p>}
    </main>
  );
}

