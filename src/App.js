import React from 'react';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import Product from './components/Productos';
import Specifications from './components/Specifications';
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Formulario Custom</h1>
      </header>
      <Accordion className="Accordion" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Producto</Accordion.Header>
          <Accordion.Body>
            <Product />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Especificaciones</Accordion.Header>
          <Accordion.Body>
            <Specifications />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Inventario</Accordion.Header>
          <Accordion.Body>
            <Inventory />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
