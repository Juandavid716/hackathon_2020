import React from "react";
// import { Link } from "react-router-dom";
import img1 from "../images/campesino.png";
import img2 from "../images/chica.png";
import Logo from "../images/logoNaranja.png";
import fblogo from "../images/fblogo.png";
import gmailogo from "../images/gmail.png";
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
                <img src={img1} className="nav-img1  " alt="Logo" />
              </figure>
            </div>
          </div>
        </section>
      </div>

      <div className="">
        <section className="container d-flex justify-content-center align-items-center mx-auto pt-1">
          <div className="row  h-100">
            <div className="col-lg-6">
              <figure className="w-100 h-100 fade-anim d-flex ">
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

      <div className="black">
        <section className="container d-flex justify-content-center align-items-center mx-auto pt-5">
          <div className="row no-gutters h-100">
            <div className="hero-text col-lg-5 row no-gutters justify-content-center align-items-center">
              <div className="col-11 left-to-right-anim">
                <h2 className="title-enunciado">
                  {" "}
                  ¡Tenemos funcionalidades esperando por ti!
                </h2>
                <p className=" texto-enunciado">
                  {" "}
                  Sí te dedicas a producir el campo, podrás acceder a una
                  variedad de funciones que te permitirán llevar un mejor
                  control sobre tus plantaciones. Accede a información en tiempo
                  real del clima en tu zona.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <figure className="w-100 h-100 fade-anim d-flex justify-content-center align-items-center">
                <img src={Logo} className="nav-img1 " alt="Logo" />
              </figure>
            </div>
          </div>
        </section>
      </div>
      <article className="contacto container-fluid bg-cover d-flex justify-content-center align-items-center flex-column ">
        <h2> Contactanos!</h2>
        <p> Puedes encontrarnos en las siguientes redes sociales</p>
        <div className="d-flex  justify-content-center align-items-center">
          <div>
            <img src={fblogo} className="logos " alt="Logo" />
          </div>
          <div className="ml-4">
            <img src={gmailogo} className="logos " alt="Logo" />
          </div>
        </div>
      </article>
    </>
  );
}

export default Landing;
