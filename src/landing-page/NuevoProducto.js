import React from "react";


function NuevoProducto() {


    return (
        <div className="container mt-5 pt-5" >
            <div className="container tarjeta-newProd  w-100  px-5 pt-5 pb-2" mb-5  >
                <form className="formulario">
                    <div className="row justify-content-around mb-3 ">
                        <div className="col px-5 ">
                            <h1 className="txt-newProd">Nombre</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: Mazorca de Maiz" />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Valor Unitario</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: $400" />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Unidad de medida</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: Unidad" />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd"> Cantidad disponible</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: 30" />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Tipo de producto</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: Fruta" />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Descripcion</h1>
                        </div>
                        <div className="col">
                            <input type="text"  className="input-newProd"  id="input-descrip" placeholder="Ejemplo: Producto de calidad, 100% colombiano de fin de primavera, al mejor precio que puedas encontrar " />
                        </div>
                    </div>
                    <div className="row justify-content-center mb-5">
                        <button className="foto ">
                            <h1 className="txt-newProd"></h1>
                        </button>
                        <button className="foto ">
                            <h1 className="txt-newProd"></h1>
                        </button>
                    </div>
                    <div className="row justify-content-center mb-3">
                        <button className="button-form">Publicar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NuevoProducto;