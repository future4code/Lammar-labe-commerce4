import './App.css';
import React, {useState} from 'react';
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'
import { CopyRight } from './Components/CopyRight';
// import { GrowingPage } from './Components/Growing';


function App() {
  const [productDb, setProductDb] = useState(mockDb)
  const [cartList, setCartList] = useState([])
  
 
  return (
    <>
    
      <ProductCards dbListProp={productDb}/>
             
      {/* <CopyRight/> */}
    </>
  );
}
export default App;