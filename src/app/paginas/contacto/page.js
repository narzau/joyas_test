'use client'

/* IMPORTANDO RECURSOS */

import Navbar from "@/app/Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import Footer from "@/app/Components/Footer";

/* DESARROLLO DE LA FUNCION GENERADORA */

export default function Contacto() {
	return(
		<>

		{/* HEADER */}

			<Navbar/>
			<header className="bg-[#FFF1C1] w-full pt-24">
					<div className="mt-0 w-screen">
						<img
							className="w-48 mx-auto drop-shadow-2xl"
							src="/logo-letras-negro.png"
						/>
						<p className="text-center text-xl  text-slate-950">JOYERIA</p>
					</div>
			</header>

			{/* CONTENIDO PRINCIPAL */}

			<main className="bg-[#FFF1C1] w-full py-10">
				<article className="flex flex-col gap-20">
				

					{/* SECCION DE REDES Y CONTACTO */}

					<section className="z-10 border-black border-solid border-[1px] m-auto text-black font-extrabold flex flex-col items-center justify-between p-10 gap-3 lg:h-[250px] shadow-2xl rounded-xl w-4/5">
						<h2 className="text-center text-3xl">Canales de Comunicacion</h2>
						<div className="flex flex-row w-full lg:w-3/5 justify-around flex-wrap">
							<FontAwesomeIcon
							icon={faInstagram}
							className="text-black text-6xl cursor-pointer hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all"
							/>
							<FontAwesomeIcon
							icon={faFacebook}
							className="text-black text-6xl cursor-pointer hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all"
							/>
							<FontAwesomeIcon 
							icon={faPhone} 
							className="text-black text-6xl cursor-pointer hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all"
							/>
							<FontAwesomeIcon 
							icon={faAt} 
							className="text-black text-6xl cursor-pointer hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all"
							/>
							<FontAwesomeIcon 
							icon={faWhatsapp} 
							className="text-black text-6xl cursor-pointer hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all"
							/>							
						</div>
					</section>

					{/* SECCION DE TUTORIAL DE COMPRA */}

					<section className="border-black border-solid border-[1px] m-auto text-black font-extrabold flex flex-col items-center justify-between p-10 gap-3 shadow-2xl rounded-xl w-4/5">
						<h2 className="text-3xl">¿Como Comprar?</h2>
						<p>En esta parte describiremos como se utiliza el sitio web para realizar compra de mercaderia
							ya sea para usuarios por mayor y clientes por menor, ¡COMENCEMOS!
						</p>
						<ol className="font-normal list-inside flex flex-col gap-3">
							<li>1. Dirigirse a la pestaña productos</li>
							<li>2. Agregar todos los productos que te parezcan interesantes, ya sea uno o los que solicites</li>
							<li>3. Una vez agregados todos los productos deseados, dirigirse al carrito de compras ubicado en la parte superior izquierda de la barra de navecacion</li>
							<li>4. Verifica que esten todos los productos deseados con las cantidades deseadas. En el caso de estar todo bien darle al boton siguiente</li>
							<li>5. Rellenar con todos los datos, Estos datos se utilizan para realizar el envio y coordinar con ustedes ya sea via mail o por telefono, una vez ingrese toda la informacion darle al boton siguiente</li>
							<li>6. En la siguiente pestaña debe realizar el pago por los correspondientes productos. Utilizamos la implementacion de Mercadopago para automatizar los pagos y los respectivos cobros</li>
							<li>7. Una vez corroborada la informacion un agente de ventas se comunicara con ustedes para coordinar la entrega.</li>
						</ol>
					</section>

					{/* SECCION DE REALIZACION DE ENVIOS */}

					<section className="border-black border-solid border-[1px] m-auto text-black font-extrabold flex flex-col items-center justify-between p-10 gap-3 shadow-2xl rounded-xl w-4/5">
						<h2 className="text-3xl">Metodologia de Envios</h2>
						<p className="font-normal">
							Es importante aclarar que el cargo por envios corre por cuenta del cliente, esto devido a que cada usuario
							cuenta con sus preferencias a la hora de realizar el envio, no solo debido al valor de cada viaje, si no
							a la comodidad de cada uno de nuestros clientes a la hora de la entrega o el retiro de los articulos. todo
							esto es coordinado a la hora de comunicarse con el vendedor de turno.
						</p>
					</section>
				</article>
			</main>
			
			{/* SECCION DE PIE DE PAGINA */}

			<footer>
				<Footer />
			</footer>


		</>
	)
} 