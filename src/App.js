import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//import CantidadProducto from './components/CantidadProducto';
//import CompraProducto from './components/CompraProducto';

import store from './redux/store';
import { Provider } from 'react-redux';

import CantidadProductoHook from './components/cantidadProducto_Hook';
import CompraProductoHook from './components/compraProducto_Hook';
import BuscadorProducto from './components/buscador/BuscadorProducto';
import ResultadoProducto from './components/buscador/ResultadoProducto';

function App() {

  return (
    <Provider store={store}>
      <div className="App container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5" style={{maxWidth: '370px'}}>
            <div className="row no-gutters">
              <div className="col-4">
                <img src={require('./img/carrito.png')} alt="carrito" className="card-img"></img>
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title h3 text-center">
                    <CantidadProductoHook></CantidadProductoHook>
                  </div>
                  <CompraProductoHook></CompraProductoHook>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4 border-top pt-3">
          <BuscadorProducto></BuscadorProducto>
        </div>
        <div className="col-12">
          <ResultadoProducto></ResultadoProducto>
        </div>
      </div>
    </div>
    </Provider>
    
  );
}

export default App;
