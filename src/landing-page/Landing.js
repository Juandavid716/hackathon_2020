import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-sm hero-title">
              <p> Conectando a Productores locales de la Región Caribe</p>
              <button className="button green" value="Registro">
                Registro
              </button>
            </div>
            <div className="col-sm hero-title"></div>
          </div>
        </div>
      </div>

      <section className="landing-container">
        <h2>Secciones</h2>

        <div className="slider"></div>
        <div className="info-contact"> Contacto </div>
        <div className="git-father">
          <div className="git-button-1"></div>
        </div>
      </section>
    </>
  );
}

export default Landing;
