import NavGalery from "./NavGaleria";
import ProductCard from "./ProductCard";

export default function GaleriaProductos({setVerProduct ,selectProduct, productos }) {
  return (
    <div className="justify-around flex flex-wrap flex-row gap-0 w-3/4">
      {productos.map((product) => (
        <div className="w-1/4 min-w-[250px]">
          <ProductCard
            setVerProduct={setVerProduct}
            ideProducto={product._id}
            selectProduct={selectProduct}
            key={product._id}
            imageSrc={product.imgDir}
            title={product.nombre}
            description={product.descripcionCorta}
            price={product.precio}
          />
        </div>
      ))}
    </div>
  );
}
