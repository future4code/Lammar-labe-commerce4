import './App.css';
import React, {useState} from 'react';
import { ShoppingCart } from './Components/ShoppingCart'
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'

function App() {
  const [productDb, setProductDb] = useState(mockDb)
  const [cartList, setCartList] = useState([])

  const addProduct = (data) => {
    setCartList([...cartList, data])
  }

  return (
    <>
      <ProductCards dbListProp={productDb} setCartListProp={addProduct}/>
      <ShoppingCart cartListProp={cartList}/>
    </>
  );
}

export default App;