import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
=======
import React, {useState} from 'react';
import { ShoppingCart } from './Components/ShoppingCart'
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <>
      {/* <ShoppingCart cartListProp={cartList}/> */}
      <ProductCards dbListProp={productDb}/>
    </>
>>>>>>> Stashed changes
  );
}

export default App;
