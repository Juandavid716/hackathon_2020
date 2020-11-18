import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Servicio = (props) => {
  return (
    <Card>
      <CardImg
        top
        width="350px"
        height="150px"
        src={props.url}
        alt="Card image cap"
      />
      <CardBody className="color-texto">
        <CardTitle tag="h5">{props.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          ${props.valor} x {props.medida}
        </CardSubtitle>
        <CardText>{props.tiposervicio}</CardText>
        <CardText>{props.tipocontrato}</CardText>
        <CardText>{props.descripcion}</CardText>
        <Button>Ver</Button>
      </CardBody>
    </Card>
  );
};
export default Servicio;
