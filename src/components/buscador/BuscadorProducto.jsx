import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fecthProduct from '../../redux/actions/buscadorAction';

const BuscadorProducto = () => {
    const dispatch = useDispatch();
    const [product_name, set_product_name] = useState('mewtwo');


    return(
        <div className="form-group">
            <label htmlFor="buscar_producto" className="text-white">Buscar producto</label>
            <input type="text" className="form-control" id="buscar_producto" value={product_name} onChange={
                (event) => {
                    set_product_name(event.target.value);
                }
            } placeholder="Escribe el nombre del producto"/>
            <button className="btn btn-primary mt-3" onClick={
                () => {
                    dispatch(fecthProduct(product_name))
                }
            }>Buscar</button>
        </div>
    )
}

export default BuscadorProducto;