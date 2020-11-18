import React from "react";
import { connect } from 'react-redux'
import { productsFilter } from '../actions'

export const Search = (props) => {
  const handleChange = (e) => {
    console.log(e)
  };

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


const mapStateToProps = (state) => ({
  products: state.products,
  productsFiltered: state.productsFiltered
})
const mapDistpachToProps={
  productsFilter
}
export default connect(mapStateToProps,mapDistpachToProps)(Search);
