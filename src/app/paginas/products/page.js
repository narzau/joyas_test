/* PAGINA DE EXPOSICION DE PRODUCTOS */


"use client";

/* IMPORTACIONES */

import Cart from "@/app/Components/Cart";
import ConfirmacionCompra from "@/app/Components/ConfirmacionCompra";
import DatabaseDisplay from "@/app/Components/DatabaseComponent";
import Footer from "@/app/Components/Footer";
import FormCPts from "@/app/Components/FormCPts";
import GaleriaProductos from "@/app/Components/Galeria";
import GruposArticulos from "@/app/Components/GruposArticulos";
import NavGalery from "@/app/Components/NavGaleria";
import Navbar from "@/app/Components/Navbar";
import VerMas from "@/app/Components/VerMas";
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";

/* CREACION DEL COMPONENTE */

export default function Products() {

  /* CREACION DE ESTADOS */
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [clasificacion, setClasificacion] = useState();
  const [productsSelected, setProductsSelected] = useState([]);
  const [abrirForm, setAbrirForm] = useState(false);
  const [abrirConf, setAbrirConf] = useState(false)
  const [items, setItems] = useState([]);
  const [verProduct, setVerProduct] = useState()
  const [cartOpen, setCartOpen] = useState(undefined);
  const [isSticky, setIsSticky] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    pais: "",
    provincia: "",
    ciudad: "",
    direccion: "",
  })

  /* CREACION DE HOOKS USEEFFECT */

  /* solicitud de ver todos los productos */
  useEffect(() => {
    fetch("/api/Producto/verProductos")
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
    
    /* solicitud para filtrar los productos por clasificacion */
    useEffect(() => {
      fetch("/api/Producto/verAlgunosProductos", {
        method: "POST",
        body: JSON.stringify({
          campo: "clasificacion",
          valor: clasificacion,
        }),
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
    }, [clasificacion]);

    /* Creacion de componente fijo */
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 350) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    /* FUNCIONES */

    /* funcion para sumar un producto */
    const handleAddProductsSelected = (idProducto) => {    
    toast.success('Producto Agregado')
    let matriz = [...productsSelected];
    matriz.push(idProducto);
    setProductsSelected(matriz);
  };

  /* funcion para restar un producto */
  const handleResProductsSelected = (idProducto) => {
    let matriz = [...productsSelected];
    for (let i = matriz.length - 1; i >= 0; i--) {
      if (matriz[i] === idProducto) {
        matriz.splice(i, 1);
        break; // Detenemos el bucle después de eliminar la última coincidencia
      }
    }    
    setProductsSelected(matriz);
  };



  const secciones = [
    {
      id: 11,
      src: "/Aros1.jpeg",
      titulo: "Abridores",
      alt: "aros para vos",
    },
    {
      id: 12,
      src: "/Aros2.jpeg",
      titulo: "Collares",
      alt: "aros para vos",
    },
    {
      id: 13,
      src: "/Coleccion1.jpeg",
      titulo: "Aros",
      alt: "aros para vos",
    },
    {
      id: 14,
      src: "/Coleccion2.jpeg",
      titulo: "Aros Argolla",
      alt: "aros para vos",
    },
    {
      id: 15,
      src: "/Coleccion3.jpeg",
      titulo: "Anillos",
      alt: "aros para vos",
    },
    {
      id: 16,
      src: "/Aros1.jpeg",
      titulo: "Pulseras",
      alt: "aros para vos",
    },
    {
      id: 17,
      src: "/Aros1.jpeg",
      titulo: "Conjuntos",
      alt: "aros para vos",
    },
  ];

  /* RENDER DE LA PAGINA */

  return (
    <main className="w-screen bg-[#FFF1C1] pt-24">

      {/* HTML ESTRUCTURADO */}

      {/* Barra de navegacion */}
      <Navbar setCartOpen={setCartOpen} />
      {/* header */}
      <div className="mt-0 mb-10 w-screen">
        <img
          className="w-48 mx-auto drop-shadow-2xl"
          src="/logo-letras-negro.png"
        />
        <p className="text-center text-xl  text-slate-950">JOYERIA</p>
      </div>

      {/* Filtrar Secciones Inicial */}
      <div className="bg-[#FFBEE3] py-5">
        <p className=" text-[#fd6cbe] drop-shadow-md text-xl opacity-90 tracking-widest font-bold  pb-5 text-center">
          ¿Que Buscas?
        </p>
        <GruposArticulos props={secciones} clasificacion={setClasificacion} />

      </div>

      {/* Galeria */}
      <div className="w-screen flex">
        {/* Filtrar Secciones lateral */}
        <NavGalery clasificacion={setClasificacion} props={isSticky} />
        {/* Visualizar Productos */}
        <GaleriaProductos
          setVerProduct={setVerProduct}
          selectProduct={handleAddProductsSelected}
          productos={data}
        />
      </div> 
      {verProduct && <VerMas idProducto={verProduct} setVerProduct={setVerProduct} selectProduct={handleAddProductsSelected}/>}
      <Footer />

      {/* COMPONENTES NO ESTRUCTURALES */}

      {/* Notificaciones */}
      <Toaster position='bottom-right' richColors/> 
      
      {/* Carrito Emergente */}
      <Cart
        restarUnProduct={handleResProductsSelected}
        selectProduct={handleAddProductsSelected}
        productsSelected={productsSelected}
        open={cartOpen}
        setCartOpen={setCartOpen}
        siguiente={setAbrirForm}
        total={total}
        setTotal={setTotal}
        items={items}
        setItems={setItems}
      />

      {/* Formulario de Compra */}
      <FormCPts 
        abrirForm={abrirForm}
        cerrarForm={setAbrirForm}
        abrirConf={abrirConf}
        cerrarConf={setAbrirConf}
        dataForm={formData}
        guardarData={setFormData}
        total={total}
        items={items}/>
      
      {/* Confirmar Compra y Pagar */}
      <ConfirmacionCompra
      abrirConf={abrirConf}
      cerrarConf={setAbrirConf}
      dataForm={formData}
      total={total}
      items={items}
      />
    </main>
  );
}
