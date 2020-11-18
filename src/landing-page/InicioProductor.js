import React from "react";
import Search from "./Search";
import Logo from "../images/logoNaranja.png";
import fondomaiz from "../images/fondomaiz.jpg";
import tomato from "../images/tomato.jpg";
import artesania from "../images/artesania.jpg";
import Producto from "./Producto";
import Servicio from "./Servicio";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

function InicioProd(props) {
  return (
    <div className=" ">
      <div className="titulo-usuario">
        <h1>Bienvenido, Juan Bojato</h1>
      </div>
      <div className="espacio">
        <Search></Search>
      </div>
      <div className="orange">
        <div className="container mt-5 mb-5 pb-5">
          <h2 className="titulo-usuario"> Productos de tu catalogo </h2>
          <div className="row mb-6">
            <div className="col-lg-2 mt-5">
              <Producto
                className="pb-10"
                nombre={"Mazorca de Maiz"}
                valor={"400"}
                url={fondomaiz}
                medida={"unidad"}
                cantidad={"30"}
                descripcion={"Envio gratis Ponedera"}
              ></Producto>
            </div>
            <div className="col-lg-2  mt-5">
              <Producto
                nombre={"Huevo frito"}
                valor={"500"}
                url={tomato}
                medida={"libra"}
                cantidad={"20"}
                descripcion={"Envio gratis Ponedera"}
              ></Producto>
            </div>
            {props.products.map((item) => {
              return (<div className="col-lg-2 mt-5">
                <Producto
                  className="pb-10"
                  nombre={item.nombre}
                  valor={item.valor_unitario}
                  url={item.images || fondomaiz}
                  medida={item.unidad_medida}
                  cantidad={item.cantidad_disponible}
                  descripcion={item.descripcion}
                ></Producto>
              </div>)


            })}
            <div className="col-lg-2  mt-5 nuevo-prod">
              <button className="bton-nuevo">
                <Link to="/nuevoProducto" className="linking-park">+</Link>
              </button>
            </div>

          </div>
        </div>
        <div className="black">
          <div className="container mt-5 mb-5 pb-5">
            <h2 className="titulo-usuario"> Servicios de tu catalogo </h2>
            <div className="row mb-6">
              <div className="col-lg-2 mt-5">
                <Servicio
                  className="pb-10"
                  nombre={"Mantenimiento"}
                  valor={"400"}
                  url={artesania}
                  medida={"unidad"}
                  cantidad={"30"}
                  descripcion={"Envio gratis Ponedera"}
                ></Servicio>
              </div>
              <div className="col-lg-2  mt-5">
                <Servicio
                  nombre={"Huevo frito"}
                  valor={"500"}
                  url={artesania}
                  medida={"libra"}
                  cantidad={"20"}
                  descripcion={"Envio gratis Ponedera"}
                ></Servicio>
              </div>
            </div>
          </div>
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
export default connect(mapStateToProps)(InicioProd);
