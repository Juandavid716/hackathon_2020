import React from "react";
// import { Link } from "react-router-dom";
import img1 from "../images/campesino.png";
import img2 from "../images/chica.png";
function Landing() {
  return (
    <>
      <div className="orange">
        <section className="container d-flex justify-content-center align-items-center mx-auto pt-5">
          <div className="row no-gutters h-100">
            <div className="hero-text col-lg-5 row no-gutters justify-content-center align-items-center">
              <div className="col-11 left-to-right-anim">
                <h2 className="title-enunciado">
                  {" "}
                  Conectando a Productores locales de la Región Caribe
                </h2>
                <p className=" texto-enunciado">
                  {" "}
                  Facilitamos la manera en que los campesinos, artesanos y
                  productores locales ofrecen sus productos y servicios a toda
                  la región.
                </p>
                <button className="button black" value="Registro">
                  Registro
                </button>
              </div>
            </div>
            <div className="col-lg-7">
              <figure className="w-100 h-100 fade-anim d-flex justify-content-center align-items-center">
                <img src={img1} className="nav-img1 " alt="Logo" />
              </figure>
            </div>
          </div>
        </section>
      </div>

      <div className="">
        <section className="container d-flex justify-content-center align-items-center mx-auto pt-5">
          <div className="row no-gutters h-100">
            <div className="col-lg-7">
              <figure className="w-100 h-100 fade-anim d-flex justify-content-center align-items-center">
                <img src={img2} className="nav-img1 " alt="Logo" />
              </figure>
            </div>
            <div className="hero-text col-lg-5 row no-gutters justify-content-center align-items-center">
              <div className="col-11">
                <h2 className="title-enunciado">
                  {" "}
                  Conectando a Productores locales de la Región Caribe
                </h2>
                <p className=" texto-enunciado">
                  {" "}
                  Facilitamos la manera en que los campesinos, artesanos y
                  productores locales ofrecen sus productos y servicios a toda
                  la región.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="slider"></div>
      <div className="info-contact"> Contacto </div>
      <div className="git-father">
        <div className="git-button-1"></div>
      </div>
    </>
  );
}

export default Landing;
