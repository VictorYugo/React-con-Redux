import React, {Component} from 'react';

class CompraProducto extends Component{
    render(){
        return (
            <div>
                <button className="btn btn-dark btn-sm mb-2">Comprar Producto</button>
                <button className="btn btn-dark btn-sm">Devolver Producto</button>
            </div>
        )
    }
}

export default CompraProducto