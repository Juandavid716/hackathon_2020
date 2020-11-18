import React, { useState } from "react";
import Search from "./Search";
import fondomaiz from "../images/fondomaiz.jpg";
import tomato from "../images/tomato.jpg";
import Producto from "./Producto";
function CompradorTest() {
  return (
    <div>
      <div>
        <Search></Search>;
      </div>
      <div className="container">
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
