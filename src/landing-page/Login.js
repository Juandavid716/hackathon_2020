import React, { useState } from "react";
import { Form, Input } from "reactstrap";

export default function Registro() {
  const [clave, setclave] = useState("");

  const [usuario, setusuario] = useState("");

  return (
    <div className="fondo2">
      <div className="container d-flex justify-content-center align-items-center  pt-5 ">
        <div className="row no-gutters h-100">
          <div className="center-form">
            <Form className="loginForm">
              <h1 id="title-login">Ingresar </h1>

              <Input
                placeholder="Ingrese usuario"
                onChange={(e) => setusuario(e.target.value)}
                id="apellido"
                name="apellido"
                className="m-2"
                value={usuario}
                autoComplete="on"
              />

              <Input
                type="password"
                placeholder="Ingrese Clave"
                onChange={(e) => setclave(e.target.value)}
                id="clave"
                name="clave"
                className="m-2"
                value={clave}
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
