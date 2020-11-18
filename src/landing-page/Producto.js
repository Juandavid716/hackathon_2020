import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Producto = (props) => {
  return (
    <Card>
      <CardImg
        top
        width="350px"
        height="150px"
        src={props.url}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">{props.nombre}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          ${props.valor} x {props.medida}
        </CardSubtitle>
        <CardText>
          <p className="disponible">disponible: </p>
          {props.cantidad}
        </CardText>
        <NavLink
          to={{
            pathname: "/prodvista",
            aboutProps: {
              nombre: props.nombre,
              valor: props.valor,
              medida: props.medida,
              cantidad: props.cantidad,
              url: props.url,
              descripcion: props.descripcion,
            },
          }}
        >
          Ver
        </NavLink>
      </CardBody>
    </Card>
  );
};
export default Producto;
