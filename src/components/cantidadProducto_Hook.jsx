import React from 'react';
import { useSelector } from "react-redux";

const CantidadProductoHook = () => {
    const product_shop = useSelector((state) => state.product_shop);


    return(
        <React.Fragment>
            Unidades: {product_shop.producto}
        </React.Fragment>
    );
}

export default CantidadProductoHook;