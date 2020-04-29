import { combineReducers } from "redux";
import product_shop from './shopReducer'
import buscador from './buscadorReducer'

const rootReducers = combineReducers({
    product_shop,
    buscador
})

export default rootReducers;