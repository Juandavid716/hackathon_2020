import React, { useState } from "react";
import Search from "./Search";
import fondomaiz from "../images/fondomaiz.jpg";
import tomato from "../images/tomato.jpg";
import Producto from "./Producto";
import axios from "axios";
import { connect } from 'react-redux'
function CompradorTest(props) {
  const [access, setAccess] = useState(false);
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "x-access-token": props.token
    }
  };

  axios.post("https://hackathonredis.herokuapp.com/me", {}, axiosConfig)
    .then(response => {
      console.log("Todo bien", response)
      setAccess(true)
    })
    .catch(e => {
      // Capturamos los errores
      setAccess(false)
      console.log("Todo mal", e)
    })


  return (

    <div>
      {(access) ?
        <>
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
        </> :
        <h1 className="col-sm-2">No autorizado bro...</h1>

      }
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps)(CompradorTest);
