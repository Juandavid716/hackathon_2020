import { render } from "@testing-library/react";

import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  NavLink,
} from "reactstrap";
import imgprueba from "../images/tomato.jpg";

class ProductoVista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.location.aboutProps.nombre,
      valor: props.location.aboutProps.valor,
      medida: props.location.aboutProps.medida,
      cantidad: props.location.aboutProps.cantidad,
      url: props.location.aboutProps.url,
      descripcion: props.location.aboutProps.descripcion,
    };
    console.log(props.location.aboutProps);
  }
  render() {
    return (
      <div className="mt-10">
        <section className="container d-flex justify-content-center align-items-center mx-auto pt-5 mt-10 ">
          <div className="row no-gutters h-100 mt-10 ">
            <div className="hero-text col-lg-5 row no-gutters justify-content-center align-items-center mt-10 ">
              <div className="col-11 left-to-right-ani mt-10 ">
                <h2 className="title-enunciado mt-10 "> {this.state.nombre}</h2>
                <p className=" texto-enunciado">
                  {" "}
                  ${this.state.valor} x {this.state.medida}
                </p>
                <p className="">{this.state.descripcion} </p>
                <p className="disponible">disponible: </p>
                {this.state.cantidad}
              </div>
            </div>
            <div className="col-lg-7">
              <figure className="w-100 h-100 fade-anim d-flex justify-content-center align-items-center">
                <img src={this.state.url} className="nav-img1  " alt="Logo" />
              </figure>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ProductoVista;
