import './App.css';
import React, {useState} from 'react';
import { ShoppingCart } from './Components/ShoppingCart'
import { mockDb } from './MockUpDados'
import { ProductCard } from './Components/ProductCard'

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
