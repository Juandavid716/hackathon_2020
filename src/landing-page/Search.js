import React from "react";

export const Search = () => {
  const handleChange = (e) => {};

  return (
    <div className="caja-principal">
      <div className="search-bar caja">
        <div className="botones-op">
          <button className="button gray" value="Alles">
            Alles
          </button>
          <button className="button Blue" value="Der">
            Der Articles
          </button>
          <button className="button Red" value="Die">
            Die articles
          </button>
          <button className="button Green" value="Das">
            Das articles
          </button>
          <button className="button Green" value="table-vocab">
            Table wortschätz
          </button>
        </div>
        <input
          id="search-input"
          onChange={(e) => handleChange(e.target.value)}
          className="myInput"
          placeholder="schreibe ein Substantiv.."
        ></input>
      </div>
    </div>
  );
};

export default Search;
