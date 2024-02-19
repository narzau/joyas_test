import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = ({ setCartOpen }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 761); // Ajusta el ancho según tus necesidades
    };

    handleResize(); // Llama a la función al cargar la página
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCart = () => {
    setCartOpen(true);
  };

  return (
    <nav
      className={`z-20 fixed top-0 w-full bg-[#FFBEE3] p-2 shadow-lg ${
        isMobile ? "md:hidden" : ""
      }`}
    >
      <div className="container w-full mx-auto flex justify-between items-center">
        {/* Logso */}
        <div className="text-black text-lg">
          <img
            className="w-16"
            src="/logo-letras-negro.png"
            alt="logo Felice"
          />
        </div>

        {/* Botón del Menú (Solo en Mobile) */}
        {isMobile && (
          <button
            className="text-black text-xl focus:outline-none"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}

        {/* Menú Desplegable (Solo en Mobile) */}
        {isMobile && menuOpen && (
          <div className="absolute top-16 left-0 bg-white text-black p-4 rounded-b shadow z-50 w-screen text-center">
            <a
              href="/"
              className="hover:bg-black hover:text-gray-50 hover:rounded-md block p-2"
            >
              Inicio
            </a>
            <a
              href="/paginas/products"
              className="hover:bg-black hover:text-gray-50 hover:rounded-md block p-2"
            >
              Productos
            </a>
            <a
              href="/paginas/contacto"
              className="hover:bg-black hover:text-gray-50 hover:rounded-md block p-2"
            >
              Contacto
            </a>
          </div>
        )}

        {!isMobile && (
          <div className="flex flex-row gap-3 items-center">
            <Link
              href="/"
              className={`text-black hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all ${
                router.pathname === "/" ? "font-bold" : ""
              }`}
            >
              Inicio
            </Link>
            <hr className="h-5 border-solid border-[1px] border-black opacity-70" />
            <Link
              href="/paginas/products"
              className={`text-black hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all ${
                router.pathname === "/paginas/productos" ? "font-bold" : ""
              }`}
            >
              Productos
            </Link>
            <hr className="h-5 border-solid border-[1px] border-black opacity-70" />
            <a
              href="/paginas/contacto"
              className={`text-black hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all ${
                router.pathname === "/contacto" ? "font-bold" : ""
              }`}
            >
              Contacto
            </a>
          </div>
        )}

        {/* Carrito de Compras (Siempre visible) */}
        <div className="flex items-center">
          <FontAwesomeIcon
            onClick={handleCart}
            icon={faCartShopping}
            className="text-black text-xl cursor-pointer hover:bg-[#D8EBB5] rounded-md p-2 hover:text-black transition-all"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
