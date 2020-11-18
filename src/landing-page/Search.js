import React from "react";
import { connect } from 'react-redux'
import { productsFilter, setEncontrado } from '../actions'

export const Search = (props) => {
  const handleChange = (e) => {
    const inputValue = e.toLowerCase()
    const matchedProducts = props.products.filter(
      item => item.nombre.toLowerCase().includes(inputValue)
    )
    console.log("entro?", matchedProducts.length)
    if(matchedProducts.length===0){
      console.log("entro")
      props.setEncontrado(false)
    }else{
      props.setEncontrado(true)
    }
    props.productsFilter(matchedProducts)

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
const mapDistpachToProps = {
  productsFilter,
  setEncontrado
}
export default connect(mapStateToProps, mapDistpachToProps)(Search);
