const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'SET_PRODUCT':
      return {
        ...state,
        products: action.payload
      }
    case 'SET_ENCONTRADO':
      return {
        ...state,
        encontrado: action.payload
      }
    case 'PRODUCTS_FILTER':
      return {
        ...state,
        productsFiltered: action.payload
      }
    default:
      return state
  }
}
export default reducer