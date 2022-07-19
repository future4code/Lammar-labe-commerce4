import './App.css';
import React, {useState} from 'react';
import { mockDb } from './MockUpDados'
import { ProductCards } from './Components/ProductCards'

function App() {
  const [productDb, setProductDb] = useState(mockDb)
  return (
    <>
      <ProductCards dbListProp={productDb}/>
    </>
  );
}
export default App;