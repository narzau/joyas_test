import {
  changeName,
  deleteFile,
  showImg,
  uploadFiles,
} from "@/firebase/config";
import { useEffect, useState } from "react";

export default function EditProduct({ productId, activeOne, setActiveOne }) {
  //Guarda El producto Seleccionado en un objeto con todas sus caracteristicas
  const [producto, setProducto] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [campo, setCampo] = useState([]);
  const [valor, setValor] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const cantidad = {};
  const [actualizarImg, setActualizarImg] = useState(false);
  const [campos, setCampos] = useState("0");

  const borrarProducto = (e) => {
    e.preventDefault();
    deleteFile(producto.nombre);
    fetch("/api/Producto/eliminarProductos", {
      method: "POST",
      body: productId,
    });
  };

  //le pegamos a la api para que obtenga los datos del producto seleccionado
  useEffect(() => {
    // Realiza la llamada a la API dentro de useEffect
    fetch("/api/Producto/verUnProducto", { method: "POST", body: productId })
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
        setSelectedMaterials(data.materiales);
        setSelectedSizes(data.tamaños);
        console.log(data.stock);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);

  //Funcion para marcar los materiales y los tamaños que tenga el producto seleccionado
  const verificar = (typeCheck, param) => {
    switch (typeCheck) {
      case "materiales": {
        if (producto && producto.materiales) {
          return producto.materiales.includes(param);
        }
        break;
      }

      case "tamaño": {
        if (producto && producto.tamaños) {
          if (producto.tamaños.includes(param)) {
            return true;
          } else {
            return false;
          }
        }
        break;
      }

      default:
    }
  };

  const verImagenNueva = async (e) => {
    await uploadFiles(e.target.files[0], "actualImg");
    const url = await showImg("actualImg");
    setImgUrl(url);
    setActualizarImg(true);
  };

  const guardarForm = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const guardarCampos = async (e) => {
    const nuevosCampos = [...campo];
    const nuevosValores = [...valor];
    console.log(e);
    e.preventDefault();
    for (let i = 20; i < 32; i++) {
      if (e.target[i].type === "number") {
        cantidad[e.target[i].name] = e.target[i].value;
      } else if (e.target[i].type === "submit") {
        break;
      }
    }

    if (cantidad) {
      nuevosCampos.push("stock");
      nuevosValores.push(cantidad);
    }

    if (campo.indexOf("nombre") !== -1 && e.target[0].files[0]) {
      await uploadFiles(e.target[0].files[0], valor[campo.indexOf("nombre")]);
      const url = await showImg(valor[campo.indexOf("nombre")]);
      nuevosCampos.push("imgDir");
      nuevosValores.push(url);
      deleteFile(producto.nombre);
    } else if (campo.indexOf("nombre") !== -1 && !e.target[0].files[0]) {
      const url = await showImg(producto.nombre);
      await changeName(url, valor[campo.indexOf("nombre")]);
      const newUrl = await showImg(valor[campo.indexOf("nombre")]);
      nuevosCampos.push("imgDir");
      nuevosValores.push(newUrl);
      deleteFile(producto.nombre);
    } else if (campo.indexOf("nombre") === -1 && e.target[0].files[0]) {
      await uploadFiles(e.target[0].files[0], producto.nombre);
    }
    console.log(campo, valor);
    fetch("/api/Producto/actualizarProductos", {
      method: "POST",
      body: JSON.stringify({
        idProduct: producto._id,
        campos: nuevosCampos,
        datos: nuevosValores,
      }),
    });
  };

  const editarValor = (e) => {
    const actualCampo = [...campo, e.target.name];
    let actualVal = undefined;
    console.log(e);

    if (e.target.name === "materiales") {
      console.log(e.target.name);
      actualVal = [...valor, selectedMaterials];
    } else if (e.target.name === "tamaños") {
      actualVal = [...valor, selectedSizes];
    } else {
      actualVal = [...valor, e.target.value];
    }
    setCampo(actualCampo);
    setValor(actualVal);
    console.log(campo, valor);
  };

  return (
    <div
      className={`bg-blur backdrop-blur-md inset-0 z-50 top-0 left-0 w-full h-screen gap-5 bg-transparent flex flex-col items-center justify-center duration-300 transition-all fixed ${
        activeOne ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <form
        onSubmit={guardarCampos}
        className="w-2/3 h-full bg-black p-5 rounded-lg text-black flex flex-col items-center justify-between"
      >
        <p
          className="rounded p-2 cursor-pointer border-2 text-white hover:scale-100 scale-75 transition-all"
          onClick={() => setActiveOne(false)}
        >
          X
        </p>
        <div className="flex flex-row gap-3">
          <div
            className={`text-black bg-white p-3 rounded cursor-pointer transition-all ${
              campos === "0" ? "scale-100 bg-slate-500" : "scale-90"
            }`}
            onClick={() => setCampos("0")}
          >
            Imagen
          </div>
          <div
            className={`text-black bg-white p-3 rounded cursor-pointer transition-all ${
              campos === "1" ? "scale-100 bg-slate-500" : "scale-90"
            }`}
            onClick={() => setCampos("1")}
          >
            Basicos
          </div>
          <div
            className={`text-black bg-white p-3 rounded cursor-pointer transition-all ${
              campos === "2" ? "scale-100 bg-slate-500" : "scale-90"
            }`}
            onClick={() => setCampos("2")}
          >
            Stock
          </div>
        </div>

        <div className="w-1/2 h-4/6 flex flex-row gap-5 items-center justify-around">
          <div
            className={
              campos === "0"
                ? "w-full h-full flex flex-col items-center justify-between"
                : "hidden"
            }
          >
            <img
              className="w-full h-full object-cover"
              src={imgUrl ? imgUrl : producto.imgDir}
              alt=""
            />
            <input
              onChange={verImagenNueva}
              className="whitespace-pre-wrap bg-white w-full cursor-pointer"
              type="file"
              name=""
              id=""
            />
          </div>

          <fieldset
            className={
              campos === "1"
                ? "flex flex-col gap-5 w-full h-full border-white border-2 p-2"
                : "hidden"
            }
          >
            <legend className="text-white text-center uppercase">
              Basicos
            </legend>
            <select
              onChange={editarValor}
              className="text-black"
              name="clasificacion"
              id=""
            >
              <option disabled selected={producto.clasificacion ? false : true}>
                Seleccione
              </option>
              <option value="Aros" selected={producto.clasificacion === "Aros"}>
                Aros
              </option>
              <option
                value="Aros Argolla"
                selected={producto.clasificacion === "Aros Argolla"}
              >
                Aros Argolla
              </option>
              <option
                value="Abridores"
                selected={producto.clasificacion === "Abridores"}
              >
                Abridores
              </option>
              <option
                value="Anillos"
                selected={producto.clasificacion === "Anillos"}
              >
                Anillos
              </option>
              <option
                value="Pulseras"
                selected={producto.clasificacion === "Pulseras"}
              >
                Pulseras
              </option>
              <option
                value="Collares"
                selected={producto.clasificacion === "Collares"}
              >
                Collares
              </option>
              <option
                value="Conjuntos"
                selected={producto.clasificacion === "Conjuntos"}
              >
                Conjuntos
              </option>
            </select>
            <input
              onBlur={editarValor}
              defaultValue={producto.nombre}
              type="text"
              name="nombre"
              id=""
            />
            <input
              onBlur={editarValor}
              defaultValue={producto.descripcionCorta}
              type="text"
              name="descripcionCorta"
              id=""
            />
            <textarea
              onBlur={editarValor}
              defaultValue={producto.descripcionLarga}
              name="descripcionLarga"
              id=""
              cols="30"
              rows="10"
            />
            <input
              onBlur={editarValor}
              defaultValue={producto.precio}
              type="number"
              name="precio"
              id=""
            />
          </fieldset>

          {producto && producto.materiales && (
            <fieldset
              className={
                campos === "2"
                  ? "overflow-y-scroll flex flex-col items-center justify-between w-full h-full border-white border-2"
                  : "hidden"
              }
            >
              <legend className="text-white text-center uppercase">
                Stock
              </legend>
              <div>
                <fieldset
                  name="materiales"
                  onBlur={editarValor}
                  onChange={(e) => {
                    const checkboxes = e.currentTarget.querySelectorAll(
                      'input[type="checkbox"]'
                    );
                    const selectedValues = Array.from(checkboxes)
                      .filter((checkbox) => checkbox.checked)
                      .map((checkbox) => checkbox.value);
                    setSelectedMaterials(selectedValues);
                  }}
                  className="flex flex-col items-start"
                >
                  <legend className="text-white text-center uppercase">
                    Materiales
                  </legend>
                  <label className="text-white" htmlFor="AceroQuirurgico">
                    <input
                      type="checkbox"
                      defaultChecked={verificar(
                        "materiales",
                        "Acero Quirurgico"
                      )}
                      name="materiales"
                      id="AceroQuirurgico"
                      value="Acero Quirurgico"
                    />
                    Acero Quirurgico
                  </label>
                  <label className="text-white" htmlFor="AceroDorado">
                    <input
                      type="checkbox"
                      defaultChecked={verificar("materiales", "Acero Dorado")}
                      name="materiales"
                      id="AceroDorado"
                      value="Acero Dorado"
                    />
                    Acero Dorado
                  </label>
                  <label className="text-white" htmlFor="Plata">
                    <input
                      type="checkbox"
                      defaultChecked={verificar("materiales", "Plata")}
                      name="materiales"
                      id="Plata"
                      value="Plata"
                    />
                    Plata
                  </label>
                </fieldset>
                <fieldset
                  name="tamaños"
                  className="flex flex-col items-center"
                  onBlur={editarValor}
                  onChange={(e) => {
                    const checkboxes = e.currentTarget.querySelectorAll(
                      'input[type="checkbox"]'
                    );
                    const selectedValues = Array.from(checkboxes)
                      .filter((checkbox) => checkbox.checked)
                      .map((checkbox) => checkbox.value);
                    setSelectedSizes(selectedValues);
                  }}
                >
                  <legend className="text-white text-center uppercase">
                    Tamaño
                  </legend>
                  <label className="text-white" htmlFor="16">
                    16
                    <input
                      type="checkbox"
                      defaultChecked={verificar("tamaño", "16")}
                      name="tamaños"
                      id="16"
                      value="16"
                    />
                  </label>
                  <label className="text-white" htmlFor="17">
                    17
                    <input
                      type="checkbox"
                      defaultChecked={verificar("tamaño", "17")}
                      name="tamaños"
                      id="17"
                      value="17"
                    />
                  </label>
                  <label className="text-white" htmlFor="18">
                    18
                    <input
                      type="checkbox"
                      defaultChecked={verificar("tamaño", "18")}
                      name="tamaños"
                      id="18"
                      value="18"
                    />
                  </label>
                  <label className="text-white" htmlFor="19">
                    19
                    <input
                      type="checkbox"
                      defaultChecked={verificar("tamaño", "19")}
                      name="tamaños"
                      id="19"
                      value="19"
                    />
                  </label>
                  <label className="text-white" htmlFor="20">
                    20
                    <input
                      type="checkbox"
                      defaultChecked={verificar("tamaño", "20")}
                      name="tamaños"
                      id="20"
                      value="20"
                    />
                  </label>
                  <label className="text-white" htmlFor="21">
                    21
                    <input
                      type="checkbox"
                      defaultChecked={verificar("tamaño", "21")}
                      name="tamaños"
                      id="21"
                      value="21"
                    />
                  </label>
                  <label className="text-white" htmlFor="22">
                    22
                    <input
                      type="checkbox"
                      defaultChecked={verificar("tamaño", "22")}
                      name="tamaños"
                      id="22"
                      value="22"
                    />
                  </label>
                </fieldset>
              </div>
              <div>
                <fieldset
                  className="text-white font-thin text-xl flex flex-col items-center gap-4"
                  htmlFor="cantidadMat"
                >
                  Cantidades por Material:
                  <br />
                  {selectedMaterials.map((nombre) => (
                    <label
                      key={nombre}
                      className="text-white flex items-center flex-col"
                    >
                      {nombre}
                      <br />
                      <input
                        className="text-black rounded-lg p-2"
                        type="number"
                        key={nombre}
                        name={nombre}
                        defaultValue={producto.stock[nombre]}
                      />
                      <br />
                    </label>
                  ))}
                </fieldset>
                <fieldset
                  className="font-thin text-white text-xl flex flex-col items-center gap-4"
                  htmlFor="cantidadMat"
                >
                  Cantidades Por Tamaño:
                  <br />
                  {selectedSizes.map((nombre) => (
                    <label
                      key={nombre}
                      className="text-white flex items-center flex-col"
                    >
                      {nombre}
                      <br />
                      <input
                        className="rounded-lg p-2 text-black"
                        type="number"
                        key={nombre}
                        name={nombre}
                        defaultValue={producto.stock[nombre]}
                      />
                      <br />
                    </label>
                  ))}
                </fieldset>
              </div>
            </fieldset>
          )}
        </div>
        <button
          className="bg-white p-3 rounded cursor-pointer border-2  hover:scale-100 scale-75 transition-all "
          type="submit"
        >
          Modificar
        </button>
        <p
          onClick={borrarProducto}
          className="rounded cursor-pointer scale-95 p-3 bg-red-200 hover:scale-100 hover:bg-red-500 transition-all"
        >
          Borrar Producto
        </p>
      </form>
    </div>
  );
}
