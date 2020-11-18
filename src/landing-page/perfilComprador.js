import React from "React"
import styled from 'styled-components'

const perfilComprador = (props)=>{
    const CardComponentStyled = styled.section`
    .user{
        font-size: 30px;
    }

    #pprofilePicture{
        width: 10%;
        height: 10%;
    }
    ` 

    return (
        <CardComponentStyled className="container">
            <div id="profileName">
                <img id="profilePicture" class="rounded-circle" src={""+props.pictureUrl}></img>
                <h1>${props.name}${+" "}{props.lastName}</h1>
            </div>
            <div id="options" class="text-center">
                <button className="button gray">Configuración</button>
                <button className="button gray">Soporte Técnico</button>
                <button className="button gray">Historial de Compras</button>
                <button className="button gray">Funciones para campesinos y agricultores</button>
                <button className="button Orange">Cerrar sesión</button>
            </div>
        </CardComponentStyled>
    );
}

    