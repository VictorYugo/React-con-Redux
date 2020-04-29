import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCES, FETCH_PRODUCT_FAILURE } from "../actions/buscadorAction";

const initialState = {
    loading: false,
    producto: [],
    error: ''
}

const buscador = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_PRODUCT_SUCCES:
            return{
                loading: false,
                producto: action.payload,
                error: ''
            }
        case FETCH_PRODUCT_FAILURE:
            return{
                loading: false,
                producto: [],
                error: action.payload
            }
                
        default: return state;
    }
}

export default buscador;