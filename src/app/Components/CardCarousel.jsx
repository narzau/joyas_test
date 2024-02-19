import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "./ProductCard"; // Ajusta la ruta según tu estructura de carpetas

const CardCarousel = ({ products }) => {
  return (
    <div className=" mb-10 w-full max-w-screen-lg mx-auto">
      <Carousel
        autoPlay={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={33.33}
        renderArrowPrev={(clickHandler) => (
          <button
            onClick={clickHandler}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-700 focus:outline-none"
          >
            &lt;
          </button>
        )}
        renderArrowNext={(clickHandler) => (
          <button
            onClick={clickHandler}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-700 focus:outline-none"
          >
            &gt;
          </button>
        )}
      >
        {products.map((product) => (
          <ProductCard
            key={product._id}
            imageSrc={product.imgDir}
            title={product.nombre}
            description={product.descripcionCorta}
            price={product.precio}
          />
        ))}
      </Carousel>
      <div className="mt-4 text-center ">
        <a
          href="/paginas/products"
          className="bg-slate-400 shadow-lg p-4 rounded-md scale-90 hover:scale-100"
        >
          Ver Todos los Productos
        </a>
      </div>
    </div>
  );
};

export default CardCarousel;
