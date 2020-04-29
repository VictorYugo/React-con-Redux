import React from 'react';
import { useDispatch } from 'react-redux';
import {buy_product_action, return_product_action} from '../redux/actions/shopAction';


const CompraProductoHook = () => {
    
    const dispatch = useDispatch();

    return(
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={()=>{
                dispatch(buy_product_action(1));
            }}>Comprar Producto</button>

            <button className="btn btn-dark btn-sm" onClick={() => {
                dispatch(return_product_action(1));
            }}>Devolver Producto</button>
        </div>
    );
}

export default CompraProductoHook;