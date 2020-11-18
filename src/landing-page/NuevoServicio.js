import React from "react";


function NuevoServicio() {


    return (
        <div className="container mt-5 pt-5" >
            <div className="container tarjeta-newProd  w-100  px-5 pt-5 pb-2" mb-5  >
                <form className="formulario">
                    <div className="row justify-content-around mb-3 ">
                        <div className="col px-5 ">
                            <h1 className="txt-newProd">Nombre</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: Mantenimiento de sistema de riego" />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Valor</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: $75000" />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Tipo de contrato</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: Por dia" />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd"> Tipo de NuevoServicio</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: Tecnico" />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Descripcion</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" id="input-descrip" placeholder="Ejemplo: Se hace mantenimiento de todo tipo de sistema de riego " />
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

export default NuevoServicio;