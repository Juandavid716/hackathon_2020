import React from "react";
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
        <CardText><p className="disponible">disponible: </p>{props.cantidad}</CardText>
        <NavLink href="/" className="button ">
                Ver
        </NavLink>
      </CardBody>
    </Card>
  );
};
export default Producto;
