import React from "react";
import "./App.css";
import Navbar from "./landing-page/NavbarClass";
import Landing from "./landing-page/Landing";
import Registro from "./landing-page/Registro";
import Login from "./landing-page/Login";
import Comprador from "./landing-page/CompradorTest";
import InicioProductor from "./landing-page/InicioProductor";
import UploadImage from "./landing-page/UploadImage";
import Perfil from "./landing-page/Perfil";
import ProductoVista from "./landing-page/ProductoVista";
import NuevoProducto from "./landing-page/NuevoProducto";
import NuevoServicio from "./landing-page/NuevoServicio";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/comprador" component={Comprador} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/upload" component={UploadImage} />
        <Route exact path="/prodvista" component={ProductoVista} />
        <Route exact path="/inicioProductor" component={InicioProductor} />
        <Route exact path="/nuevoProducto" component={NuevoProducto} />
        <Route exact path="/nuevoServicio" component={NuevoServicio} />
      </Switch>
    </Router>
  );
}

export default App;
