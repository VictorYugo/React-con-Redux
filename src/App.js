import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CantidadProducto from './components/CantidadProducto';
import CompraProducto from './components/CompraProducto';

function App() {
  return (
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
                    <CantidadProducto></CantidadProducto>
                  </div>
                  <CompraProducto></CompraProducto>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
