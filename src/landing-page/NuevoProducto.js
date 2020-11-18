import React, { useState } from "react";

import { storage } from "../firebase";
import axios from 'axios';

function NuevoProducto() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [nombre, setnombre] = useState("");
    const [valor_unitario, setValor_unitario] = useState("");
    const [unidad_medida, setunidad_medida] = useState("");
    const [cantidad_disponible, setcantidad_disponible] = useState("")
    const [categoria, setcategoria] = useState("")
    const [descripcion, setdescripcion] = useState("")
    const [idProductor, setidProductor] = useState("")



    const publicar = async e => {
        e.preventDefault();

        const prod = {
            images: url,
            nombre,
            valor_unitario,
            unidad_medida,
            cantidad_disponible,
            categoria,
            descripcion,
            idProductor
        }
        const res = await axios.post('https://hackathonredis.herokuapp.com/products',
            {
                nombre,
                valor_unitario,
                unidad_medida,
                cantidad_disponible,
                categoria,
                descripcion,
                images: url,
                idProductor
            })
        alert(res.data)


    }

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
                    });
            }
        );
    };

    console.log("image: ", image);

    return (
        <div className="container mt-5 pt-5" >
            <div className="container tarjeta-newProd  w-100  px-5 pt-5 pb-2" mb-5  >
                <form className="formulario" onSubmit={publicar}>
                    <div className="row justify-content-around mb-3 ">
                        <div className="col px-5 ">
                            <h1 className="txt-newProd">Nombre</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: Mazorca de Maiz" onChange={(e) => setnombre(e.target.value)} />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Valor Unitario</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: $400" onChange={(e) => setValor_unitario(e.target.value)} />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Unidad de medida</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: Unidad" onChange={(e) => setunidad_medida(e.target.value)} />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd"> Cantidad disponible</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: 30" onChange={(e) => setcantidad_disponible(e.target.value)} />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Tipo de producto</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" placeholder="Ejemplo: Fruta" onChange={(e) => setcategoria(e.target.value)} />
                        </div>
                    </div>
                    <div className="row justify-content-around mb-3">
                        <div className="col px-5">
                            <h1 className="txt-newProd">Descripcion</h1>
                        </div>
                        <div className="col">
                            <input type="text" className="input-newProd" id="input-descrip" placeholder="Ejemplo: Producto de calidad, 100% colombiano de fin de primavera, al mejor precio que puedas encontrar " onChange={(e) => setdescripcion(e.target.value)} />
                        </div>
                    </div>
                    <div className="row justify-content-center mb-3">
                        <button type="submit" className="button-form">Publicar</button>
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

export default NuevoProducto;