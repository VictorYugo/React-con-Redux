import React, {Component} from 'react';
import { connect } from 'react-redux';

class CantidadProducto extends Component{
    render(){
        return (
            <React.Fragment>
                Unidades: {this.props.product_shop.producto}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        product_shop: state.product_shop
    }
}

export default connect(mapStateToProps) (CantidadProducto);