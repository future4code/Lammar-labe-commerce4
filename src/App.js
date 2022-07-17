import React from 'react';
import './App.css';
import React, {useState} from 'react';
import { ShoppingCart } from './Components/ShoppingCart'
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'

function App() {
  const [productDb, setProductDb] = useState(mockDb)
  const [cartList, setCartList] = useState([])

  const addProduct = () => {

  }

  return (
    <>
      <ShoppingCart cartListProp={cartList}/>
      <ProductCard/>
    </>
  );
}

export default App;