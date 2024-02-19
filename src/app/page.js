/* PAGINA DE INICIO */

"use client";

/* IMPORTACIONES */

import Image from "next/image";
import Navbar from "./Components/Navbar";
import ImageCarousel from "./Components/Carousel";
import CardCarousel from "./Components/CardCarousel";
import GruposArticulos from "./Components/GruposArticulos";
import CartDropdown from "./Components/CartDropdown";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "./Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faTruckFast,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

/* DESARROLLO DE PAGINA DE INICIO */

export default function Home() {

  /* CREACION DE HOOKS USESTATE */

  const [data, setData] = useState([]);
  const [productsSelected, setProductsSelected] = useState([]);
  const [cartOpen, setCartOpen] = useState(undefined);

  /* UTILIZACION DEL HOOK USEEFFECT */

  useEffect(() => {

    // Solicitud para ver los primeros productos

    fetch("/api/Producto/verProductos", {
      method: "POST",
      body: JSON.stringify({ limite: 5 }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la data");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  /* DESARROLLO DEL HTML */

  return (
    <main className="pt-20 bg-[#FFF1C1]">
      <Navbar setCartOpen={setCartOpen} />
      
      {/* HEADER */}

      <div className="mb-5 bg-black p-3 flex flex-col items-center justify-center">
        <div className="flex gap-2 flex-row items-center">
          <img className="w-10" src="/limones.png" />
          <p className="tracking-[5px] text-[#FFBEE3] text-center text-4xl font-bold uppercase drop-shadow-lg">
            Felice
          </p>
          <img className="w-10" src="/limones.png" />
        </div>
        <p className="tracking-[5px] text-[#FFF1C1] text-center text-2xl font-semibold uppercase drop-shadow-lg">
          Joyas y Accesorios
        </p>
      </div>

      {/* CAROUSELS */}

      {/* Carousel 1 */}
      <div className="relative w-[100%]">
        <ImageCarousel
          rounded={true}
          indicator={true}
          arrows={false}
          hw={"presentation"}
          h={"30vh"}
          w={"90vw"}
        />
        <div className="mx-12 my-5 bg-[#FFBEE3] p-5 absolute bottom-0 left-0 z-50 shadow-sm rounded-lg scale-90 hover:scale-100 hover:shadow-xl transition-all cursor-pointer">
          <p className="text-2xl font-bold tracking-widest uppercase text-black opacity-70">
            Descuento
          </p>
          <p className="text-xl font-thin text-black uppercase">30% off</p>
        </div>
      </div>
      
      {/* CAROUSEL 2 y 3 */}

      <div className="flex flex-row gap-5 w-[95%] mx-auto my-0 mt-5">

        {/* Carousel 2 */}

        <div className="relative">
          <ImageCarousel
            rounded={true}
            indicator={false}
            arrows={false}
            hw={"presentation"}
            h={"30vh"}
            w={"90vw"}
          />
        </div>

        {/* Carousel 3 */}

        <div className="relative">
          <ImageCarousel
            rounded={true}
            indicator={false}
            arrows={false}
            hw={"presentation"}
            h={"30vh"}
            w={"90vw"}
          />
          
        </div>
      </div>

      {/* CARDS DE PRESENTACION */}

      <div className="my-5 flex flex-row flex-wrap">

        {/* Estamos creciendo */}
        <div className="p-10 w-screen lg:w-1/3 justify-between bg-[#D8EBB5] flex flex-col text-black text-justify gap-5">
          <p className="text-2xl font-bold text-center">Estamos Creciendo</p>
          <p className="indent-10 font-medium">
            ¡Hola a todos! Soy la mente creativa detrás de nuestra tienda de
            accesorios y joyería. Comenzamos con una chispa de creatividad y la
            pasión por las joyas. Desde un pequeño rincón, hemos crecido gracias
            a la demanda de amigos y clientes.
          </p>
          <FontAwesomeIcon
            icon={faShoePrints}
            className="text-9xl hover:drop-shadow-[0_7px_2px_rgba(0,0,0,0.25)] scale-95 hover:scale-100 transition-all"
          />
          <a className="font-medium scale-95 hover:scale-100 hover:shadow-xl shadow-sm transition-all mx-auto text-lg bg-black text-white p-3 w-full uppercase text-center rounded-xl">
            Ver Mas
          </a>
        </div>

        {/* Mayorista */}
        <div className="p-10 justify-between w-screen lg:w-1/3 bg-[#FFBEE3] flex flex-col text-black text-justify gap-5">
          <p className="text-2xl font-bold text-center">Mayorista</p>
          <p className="indent-10 font-medium">
            Explora nuestra selección y descubre la conveniencia y calidad de
            nuestro servicio mayorista. En Felice, estamos aquí para facilitar
            tu experiencia de compra al por mayor con productos que cumplen con
            estándares excepcionales.
          </p>
          <FontAwesomeIcon
            icon={faTruckFast}
            className="text-9xl hover:drop-shadow-[0_7px_2px_rgba(0,0,0,0.25)] scale-95 hover:scale-100 transition-all"
          />
          <a className="font-medium scale-95 hover:scale-100 hover:shadow-xl shadow-sm transition-all mx-auto text-lg bg-black text-white p-3 w-full uppercase text-center rounded-xl">
            Ver Mas
          </a>
        </div>

        {/* Atencion al Cliente */}
        <div className="p-10 justify-between w-screen lg:w-1/3 bg-[#D8EBB5] flex flex-col text-black text-justify gap-5">
          <p className="text-2xl font-bold text-center">Atencion al Cliente</p>
          <p className="indent-10 font-medium">
            Nuestro equipo dedicado está aquí para responder a tus preguntas,
            ayudarte con cualquier solicitud y garantizar una experiencia sin
            contratiempos en tus transacciones. En [Nombre de tu Empresa],
            creemos en la importancia de la satisfacción del cliente y
            trabajamos incansablemente para superar tus expectativas.
          </p>
          <FontAwesomeIcon
            icon={faHeadset}
            className="text-9xl hover:drop-shadow-[0_7px_2px_rgba(0,0,0,0.25)] scale-95 hover:scale-100 transition-all"
          />
          <a className="font-medium scale-95 hover:scale-100 hover:shadow-xl shadow-sm transition-all mx-auto text-lg bg-black text-white p-3 w-full uppercase text-center rounded-xl">
            Ver Mas
          </a>
        </div>
      </div>

      {/* PRESENTACION BOTON VER CATALOGO */}

      <hr className="border-solid border-black my-4 w-1/2 mx-auto" />
      <hr className="border-solid border-black my-4 w-1/3 mx-auto" />
      <a className="transition-all scale-90 hover:scale-100" href="/paginas/products">
        <div className="bg-black p-3 w-5/6 lg:w-1/2 rounded-lg mx-auto shadow-xl transition-all scale-90 hover:scale-100">
          <p className="text-[#FFBEE3] text-2xl uppercase font-medium tracking-widest text-center">
            Catalogo
          </p>
          <p className="text-[#FFF1C1] text-lg uppercase font-medium tracking-widest text-center">
            Mira todos Nuestros productos
          </p>
        </div>

      </a>
      <hr className="border-solid border-black my-4 w-1/3 mx-auto" />
      <hr className="border-solid border-black my-4 w-1/2 mx-auto" />


      <Footer />

      
    </main>
  );
}
