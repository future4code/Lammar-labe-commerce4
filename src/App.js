import './App.css';
import React, {useState} from 'react';
import { ShoppingCart } from './Components/ShoppingCart'
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'

function App() {
  const [productDb, setProductDb] = useState(mockDb)

  localStorage.clear()

  const addProduct = (data) => {
    if (localStorage.getItem(`${"prod"+data}`)) {
      let amountIncrement = parseInt(localStorage.getItem(`${"prod"+data}`))+1
      localStorage.setItem(`${"prod"+data}`, `${amountIncrement}`)
    } else{
      localStorage.setItem(`${"prod"+data}`, "1")
    }
  }

  return (
    <>
      <ProductCards dbListProp={productDb} addProd={addProduct}/>
      <ShoppingCart/>
    </>
  );
}

export default App;