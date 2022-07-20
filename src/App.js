import './App.css';
import React, {useState} from 'react';
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'
import {LeftBar} from './Components/LeftBar'
function App() {
  const [productDb, setProductDb] = useState(mockDb)
  return (
    <>
      {/* <LeftBar/> */}
      
      <ProductCards dbListProp={productDb}/>

    </>
  );
}
export default App;