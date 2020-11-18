import React, { useState, useEffect } from "react";
import Search from "./Search";
import fondomaiz from "../images/fondomaiz.jpg";
import tomato from "../images/tomato.jpg";
import Producto from "./Producto";
import axios from "axios";
import { connect } from 'react-redux'
import Login from './Login'
import { setProducts } from '../actions'
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
  useEffect(() => {
    console.log("hola")
    if (props.products.length === 0) {

      axios.get("https://hackathonredis.herokuapp.com/products")
        .then(res => {
          console.log(res.data.data)
          props.setProducts(res.data.data)
        })
        .catch(e => console.log(e))


    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



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
          {
            (props.productsFiltered.length === 0 && props.encontrado === true) ?
              props.products.map((item) => {
                return (<div className="col-sm-2">
                  <Producto
                    nombre={item.nombre}
                    valor={item.valor_unitario}
                    url={item.images || fondomaiz}
                    medida={item.unidad_medida}
                    cantidad={item.cantidad_disponible}
                    descripcion={item.descripcion}
                  ></Producto>
                </div>)


              }) :
              props.productsFiltered.map((item) => {
                return (<div className="col-sm-2">
                  <Producto
                    nombre={item.nombre}
                    valor={item.valor_unitario}
                    url={item.images || fondomaiz}
                    medida={item.unidad_medida}
                    cantidad={item.cantidad_disponible}
                    descripcion={item.descripcion}
                  ></Producto>
                </div>)
                

              })
              
          }
          {(props.encontrado === false) &&
              <div>
                <h1>
                  Producto no encontrado...
                </h1>
              </div>}
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = state => ({
  token: state.token,
  products: state.products,
  productsFiltered: state.productsFiltered,
  encontrado: state.encontrado
})
const mapDispatchToProps = {
  setProducts
}
export default connect(mapStateToProps, mapDispatchToProps)(CompradorTest);
