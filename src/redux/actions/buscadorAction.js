import Axios from "axios";

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCES = "FETCH_PRODUCT_SUCCES";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

// Actions
export const fecthProductRequest = () => {
    return{
        type: FETCH_PRODUCT_REQUEST
    }
}

export const fecthProductSucces = (Producto) => {
    return{
        type: FETCH_PRODUCT_SUCCES,
        payload: Producto
    }
}

export const fecthProductFailure = (error) => {
    return{
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

const fecthProduct = (valor) => {
    return(dispatch) => {
        dispatch(fecthProductRequest());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`).then(response => {
            dispatch(fecthProductSucces([response.data]));
        })
        .catch(error => {
            dispatch(fecthProductFailure('No se encontro el producto'));
        });
    }
}

export default fecthProduct;