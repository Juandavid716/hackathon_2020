import React from "react";

export const Search = () => {
  const handleChange = (e) => {};

  return (
    <div className="caja-principal">
      <div className="search-bar caja">
        <input
          id="search-input"
          onChange={(e) => handleChange(e.target.value)}
          className="myInput"
          placeholder="Busca recursos, servicios y productores locales"
        ></input>
        <div className="botones-op">
          <button className="button gray" value="Todo">
            Todo
          </button>
          <button className="button Blue" value="Tuberculos">
            Tuberculos
          </button>
          <button className="button Red" value="Verduras">
            Verduras
          </button>
          <button className="button Green" value="Frutas">
            Frutas
          </button>
          <button className="button Green" value="Servicios">
            Servicios
          </button>
          <button className="button Green" value="Artesanias">
            Artesanias
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
