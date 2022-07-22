import './App.css';
import React, {useState} from 'react';
import { ShoppingCart } from './Components/ShoppingCart'
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'

function App() {
  const [productDb, setProductDb] = useState(mockDb)
  const [productList, setProductList] = useState(productDb)
  const [cartList, setCartList] = useState([])

  // localStorage.clear()

  const addProduct = (data) => {
    if (localStorage.getItem(`${"prod"+data}`)) {
      let amountIncrement = parseInt(localStorage.getItem(`${"prod"+data}`))+1
      localStorage.setItem(`${"prod"+data}`, `${amountIncrement}`)
    } else{
      localStorage.setItem(`${"prod"+data}`, "1")
    }
    let cartListItem = {
      id: productList[data-1].id,
      name: productList[data-1].name,
      price: productList[data-1].price,
    }
    setCartList([...cartList, cartListItem])
  }

  return (
    <>
      {/* <ProductCards dbListProp={productDb} addProd={addProduct}/> */}
      <ProductCards productListProp={productList} addProd={addProduct}/>
      <ShoppingCart cartList={cartList}/>
    </>
  );
}

export default App;