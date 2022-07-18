import './App.css';
import React, {useState} from 'react';
import { ShoppingCart } from './Components/ShoppingCart'
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'
import {LeftBar} from './Components/LeftBar'


function App() {
  const [productDb, setProductDb] = useState(mockDb)
  const [cartList, setCartList] = useState([])
  const [busca, setBusca] = useState("")
  const [minPreco, setMinPreco] =useState(-Infinity)
  const [maxPreco, setMaxPreco] =useState(Infinity)
  const addProduct = () => {
  }
  return (
    <>
      <LeftBar
      minPreco={minPreco}
      maxPreco={maxPreco}
      busca={busca}
      setMinPreco={setMinPreco}
      setMaxPreco={setMaxPreco}
      setBusca={setBusca}/>
      <>
      {productDb.filter((produto)=>{
        return produto.price >= minPreco || minPreco ===""
      })
      .filter((produto)=>{
        return produto.price <= maxPreco || maxPreco ===""
      })
      .filter((produto)=>{
        return produto.name.includes(busca)
      })

      .map(mockDb => {
        return <>key={mockDb.id} mockDb={mockDb}</> 
      })}</>
      {/* <ShoppingCart cartListProp={cartList}/> */}
      {/* <ProductCards/> */}
    </>
  );
}
export default App;
