import React, { useState } from "react";
import { storage } from "../firebase";


function NuevoServicio() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                        alert(url)
                    });
            }
        );
    };

    console.log("image: ", image);

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
                    <div className="row justify-content-center mb-3">
                        <button className="button-form">Publicar</button>
                    </div>
                </form>
                <div className="row justify-content-around mb-5">
                    <div className="imagenes row">
                        <progress value={progress} max="100" />
                        <input type="file" onChange={handleChange} />
                    </div>

                </div>
                <div className="row justify-content-center mb-5">
                    <button className="button-form uploadBot" onClick={handleUpload}>Upload</button>
                    <img className="foto" src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
                </div>

            </div>
        </div>
    );
}

export default NuevoServicio;