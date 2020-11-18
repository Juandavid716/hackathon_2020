import React from "react";
import Search from "./Search";
import styled from 'styled-components'

function InicioProd() {
    const CardComponentStyled = styled.section`
.Bienvenido{
    font-size:30 px;
}
`
    return (
        <CardComponentStyled className="container " >
            <p className="Bienvenido">Hello</p>
            <Search></Search>
        </CardComponentStyled>
    );
}

export default InicioProd;