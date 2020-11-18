import React, { useState } from "react";
import { Form, Input } from "reactstrap";

export default function Registro() {
  const [correo, setcorreo] = useState("");
  const [clave, setclave] = useState("");
  const [nombre, setnombre] = useState("");
  const [usuario, setusuario] = useState("");
  const [claveconfirmar, setclaveconfirmar] = useState("");
  return (
    <div className="fondo">
      <div className="container d-flex justify-content-center align-items-center  pt-5 ">
        <div className="row no-gutters h-100">
          <div className="center-form">
            <Form className="loginForm">
              <h1 id="title-login">Registrarse </h1>
              <Input
                placeholder="Ingrese nombre"
                onChange={(e) => setnombre(e.target.value)}
                id="nombre"
                name="nombre"
                className="m-2 inputControl"
                value={nombre}
                autoComplete="on"
              />
              <Input
                placeholder="Ingrese usuario"
                onChange={(e) => setusuario(e.target.value)}
                id="usuario"
                name="usuario"
                className="m-2 inputControl"
                value={usuario}
                autoComplete="on"
              />
              <Input
                placeholder="Ingrese correo"
                onChange={(e) => setcorreo(e.target.value)}
                id="correo"
                name="correo"
                className="m-2 inputControl"
                value={correo}
                autoComplete="on"
              />
              <Input
                type="password"
                placeholder="Ingrese Clave"
                onChange={(e) => setclave(e.target.value)}
                id="clave"
                name="clave"
                className="m-2 inputControl"
                value={clave}
                autoComplete="off"
              />
              <Input
                type="password"
                placeholder="Confirmar Clave"
                onChange={(e) => setclaveconfirmar(e.target.value)}
                id="claveconfirmar"
                name="claveconfirmar"
                className="m-2 inputControl"
                value={claveconfirmar}
                autoComplete="off"
              />
              <br />

              <button className="button black" value="Registro">
                Ingresar
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
