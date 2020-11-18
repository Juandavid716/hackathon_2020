import React from "react";

export const Search = () => {
  const handleChange = (e) => {};

  return (
    <div className="search-bar caja">
      <input
        id="search-input"
        onChange={(e) => handleChange(e.target.value)}
        className="myInput"
        placeholder="Busca recursos, servicios y productores locales"
      ></input>
    </div>
  );
};

export default Search;
