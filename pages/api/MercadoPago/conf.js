// Importa las librerías necesarias
const mercadopago = require("mercadopago");

// Configura MercadoPago con tus credenciales
mercadopago.configure({
  access_token:
    "APP_USR-3771293736871869-120616-3ce38b4ab1a6f4dfa76b6d248ea9f3c2-1579945817",
});

// Maneja la solicitud de preferencia
export default async function handler(req, res) {
  // Crea el objeto de preferencia (similar a tu código)
  const holi = JSON.parse(req.body);
  const address = holi.payer.pais + " " + holi.payer.provincia + " " + holi.payer.ciudad + " " + holi.payer.direccion
  const telefono = parseInt(holi.payer.telefono)
  console.log(holi.items)
  let preference = {
    // ... (tu configuración de preferencia)
    items: holi.items,
    payer: {
      name: holi.payer.nombre,
      email: holi.payer.email,
      phone: {
        number: telefono,
      },
      address: {
        street_name: address,
      },
    },
    /* back_urls: {
      success: "http://localhost:3000/",
      failure: "http://www.failure.com",
      pending: "http://www.pending.com",
    }, */
    /* auto_return: "approved", */
  };

  try {
    // Crea la preferencia en MercadoPago
    const response = await mercadopago.preferences.create(preference);
    // Devuelve el ID de la preferencia al frontend
    res.status(200).json({ preferenceId: response.body.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la preferencia" });
  }
}
