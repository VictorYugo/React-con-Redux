import { BUY_PRODUCT, RETURN_PRODUCT } from "../actions/shopAction";

const default_product_shop = {
    producto: 15
}

const product_shop = (state = default_product_shop, action) => {
    switch (action.type) {
        case BUY_PRODUCT: {
            return {
                ...state,
                producto: state.producto - action.payload
            }
        }
        case RETURN_PRODUCT: {
            return{
                ...state,
                producto: state.producto + action.payload
            }
        }
    
        default: return {
            state
        }
    }
}

export default product_shop