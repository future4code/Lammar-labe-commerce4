import './App.css';
import React, {useState} from 'react';
import { ShoppingCart } from './Components/ShoppingCart'
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'
import {LeftBar} from './Components/LeftBar'


function App() {
  const [productDb, setProductDb] = useState(mockDb)
  const [cartList, setCartList] = useState([])
  const addProduct = () => {
  }
  return (
    <>
      <LeftBar/>
      <ShoppingCart cartListProp={cartList}/>
      <ProductCards/>
    </>
  );
}
export default App;
