import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = (props) => {
  return (
    <div
      className={`${
        props.hw === "presentation" ? "w-[95%]" : "w-screen"
      } my-0 mx-auto overflow-hidden shadow-xl ${
        props.rounded ? "rounded-sm" : ""
      }`}
    >
      <Carousel
        autoPlay={true}
        showArrows={props.arrows}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={100}
        dynamicHeight={true}
        showIndicators={props.indicator}
        width={`100%`}
        interval={6000}
      >
        <div
          className={`w-full ${
            props.hw === "presentation" ? "h-72" : "h-44"
          } flex items-center justify-center`}
        >
          <img
            src="/Coleccion1.jpeg"
            alt="Imagen 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`w-full ${
            props.hw === "presentation" ? "h-72" : "h-44"
          } flex items-center justify-center`}
        >
          <img
            src="/Coleccion2.jpeg"
            alt="Imagen 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`w-full ${
            props.hw === "presentation" ? "h-72" : "h-44"
          } flex items-center justify-center`}
        >
          <img
            src="/Coleccion3.jpeg"
            alt="Imagen 3"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Agregar más imágenes según sea necesario */}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
