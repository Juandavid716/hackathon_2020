import React, { useState } from "react";
import Search from "./Search";
import fondomaiz from "../images/fondomaiz.jpg";
import tomato from "../images/tomato.jpg";
import Producto from "./Producto";
function CompradorTest() {
  return (
    <div>
      <div className="caja-principal">
        <Search></Search>
      </div>
      <div className="botones-op">
        <button className="button gray" value="Todo">
          Todo
        </button>
        <button className="button Blue" value="Tuberculos">
          Tuberculos
        </button>
        <button className="button Red" value="Verduras">
          Verduras
        </button>
        <button className="button Green" value="Frutas">
          Frutas
        </button>
        <button className="button Green" value="Servicios">
          Servicios
        </button>
        <button className="button Green" value="Artesanias">
          Artesanias
        </button>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-2">
            <Producto
              nombre={"Mazorca de Maiz"}
              valor={"400"}
              url={fondomaiz}
              medida={"unidad"}
              cantidad={"30"}
              descripcion={"Envio gratis Ponedera"}
            ></Producto>
          </div>
          <div className="col-sm-2">
            <Producto
              nombre={"Huevo frito"}
              valor={"500"}
              url={tomato}
              medida={"libra"}
              cantidad={"20"}
              descripcion={"Envio gratis Ponedera"}
            ></Producto>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompradorTest;
