import React from 'react';
import { useSelector } from 'react-redux';

const ResultadoProducto = () => {
    const buscador = useSelector((state) => state.buscador);

    return(
        <div>
            <h3 className="text-white">Resultado: </h3>
            {buscador.loading && <div className="text-warning">Buscando...</div>}
            {buscador.producto.length>=1 && <div className="text-success"><img src={buscador.producto[0].sprites.front_default} alt="producto"/><span>{buscador.producto[0].name}</span></div>}
            {buscador.error !== '' && <span className="text-danger">{buscador.error}</span>}
        </div>
        
    );
}

export default ResultadoProducto;