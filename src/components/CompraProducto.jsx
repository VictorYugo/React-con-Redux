import React, {Component} from 'react';
import { connect } from 'react-redux';

import {buy_product_action, return_product_action} from '../redux/actions/shopAction';

class CompraProducto extends Component{
    render(){
        return (
            <div>
                <button className="btn btn-dark btn-sm mb-2" onClick={() => {this.props.buy_product_action(1);}}>Comprar Producto</button>
                
                <button className="btn btn-dark btn-sm" onClick={()=> {this.props.return_product_action(1);}}>Devolver Producto</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    buy_product_action,
    return_product_action
};

export default connect(null, mapDispatchToProps) (CompraProducto);