import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function YourComponent({...props}) {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    // Llamada a tu backend para obtener el ID de preferencia
    fetch("/api/MercadoPago/conf", {
      method: "POST",
      body: JSON.stringify({
        items: props.items,
        payer: props.dataForm
      }),
    }) // Ruta a tu endpoint backend
      .then((response) => response.json())
      .then((data) => {
        setPreferenceId(data.preferenceId);
        props.guardarId(data.preferenceId)
        // Inicializa MercadoPago con tu clave pública
        initMercadoPago("APP_USR-7da7a9f5-5508-4526-8f8a-c51d028af94f", {
          locale: "es-AR",
        });
      })
      .catch((error) => console.error(error));
  }, [props.abrirConf]);

  return (
    <div>{preferenceId && <Wallet initialization={{ preferenceId }} />}</div>
  );
}
