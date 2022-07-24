import './App.css';
import React, {useEffect, useState} from 'react';
import { ShoppingCart } from './Components/ShoppingCart'
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'

function App() {
  const [productDb, setProductDb] = useState(mockDb)
  const [productList, setProductList] = useState(productDb)
  const [cartList, setCartList] = useState([])

  const addProduct = (index) => {
    let newProduct = {
      id: productList[index].id,
      name: productList[index].name,
      price: productList[index].price,
      quantity: 1
    }
    let newItem = true
    if (localStorage.getItem("shoppCart")) {
      let cartListAux = JSON.parse(localStorage.getItem("shoppCart"))
      for (let i = 0; i < cartListAux.length; i++) {
        if (cartListAux[i].id === index+1) {
          cartListAux[i].quantity++
          newItem = false
        }
      }
      setCartList(cartListAux)
    }
    if (newItem) {
      setCartList([...cartList, newProduct])
    }
  }

  useEffect(() => {
    const data = localStorage.getItem("shoppCart")
    if (data !== null) setCartList(JSON.parse(data))
  }, [])

  useEffect(() =>{
    localStorage.setItem("shoppCart", JSON.stringify(cartList))
  }, [cartList])
  

  return (
    <>
      <ProductCards productListProp={productList} addProd={addProduct}/>
      <ShoppingCart cartList={cartList}/>
    </>
  );
}

export default App;