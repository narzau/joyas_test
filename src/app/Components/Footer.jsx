import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const router = useRouter();
  return (
    <>

      <div className="bg-[#FFBEE3] gap-y-2 p-5 items-center flex flex-row flex-wrap justify-around text-black">

        {/* ENLACES */}
        <div className="flex flex-col ">
          <p className="uppercase text-center font-bold text-lg opacity-75 tracking-widest">Shop</p>
          <Link
            href="/"
            className={`text-center text-black hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all ${
              router.pathname === "/" ? "font-bold" : ""
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/paginas/products"
            className={`text-center text-black hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all ${
              router.pathname === "/paginas/productos" ? "font-bold" : ""
            }`}
          >
            Productos
          </Link>
          <a
            href="#"
            className={`text-center text-black hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all ${
              router.pathname === "/contacto" ? "font-bold" : ""
            }`}
          >
            Contacto
          </a>
        </div>

        {/* REDES SOCIALES */}
        <div className="">
          <p className="uppercase text-center font-bold text-lg opacity-75 tracking-widest">Redes</p>
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-black text-6xl cursor-pointer hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-black text-6xl cursor-pointer hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all"
          />
        </div>

        {/* INGRESO DE MAIL DE CONTACTO */}
        <div className="flex flex-col gap-5">
          <p className="uppercase text-lg opacity-75 tracking-widest text-center">
            Ingresa tu email para contactarte
          </p>
          <input
            className="w-full p-3 rounded-xl"
            type="email"
            placeholder="Ingresa Tu Correo Electronico"
          />
        </div>
      </div>
    </>
  );
}
