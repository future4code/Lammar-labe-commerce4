import React, {useState} from 'react'
import { ProductCardStyle, CardsDisplay, MainFiltros, Filtros } from '../Style'

export function ProductCards(props){
    const [productList, setProductList] = useState(props.dbListProp)
    const [minPreco, setMinPreco] = useState(-Infinity)
    const [maxPreco, setMaxPreco] = useState(Infinity)
    const [busca, setBusca] = useState("")
    const handleMinPreco = (event) => {
        setMinPreco(event.target.value)
    }
    const handleMaxPreco = (event) => {
        setMaxPreco(event.target.value)
    }
    const handleBusca = (event) => {
        setBusca(event.target.value)
    }
    const produtosFiltrados = productList.filter((item)=>{
        return item.name.includes(busca)
    }).filter((item)=>{
        return item.price >= minPreco || minPreco === ""
    }).filter((item)=>{
        return item.price <= maxPreco || maxPreco === ""
    })
   

    const renderList = produtosFiltrados.map((item, index) => {
    // const renderList = productList.map((item, index) => {
    //     const addProduct = () => {
    //         const productList2 = [...productList]
    //         const findIndex = productList2.findIndex(newProduct => {
    //             return newProduct === item
    //         })
    //         props.setCartListProp(productList[findIndex])
    //     }
        return(
            <ProductCardStyle key={index}>
                <img src={item.img} alt="Imagem do produto"></img>
                <p>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</p>
                <p>R$ {item.price},00</p>
                <button onClick={addProduct}>Adicionar ao carrinho</button>
            </ProductCardStyle>
        )
    })  
            
 
    
    

    return(
        <>
        <MainFiltros>
        <h2>Filtros</h2>
            <Filtros>
            Valor Minimo:
        <input
        type={'number'}
         value={minPreco}
         onChange={handleMinPreco}/>
             </Filtros>
                <Filtros>
                    Valor Maximo:
         <input
         type={'number'}
         value={maxPreco}
         onChange={handleMaxPreco}/>
                </Filtros>
        <Filtros>
            Busca por nome:
        <input
        value={busca}
        onChange={handleBusca}/>
        </Filtros>
        </MainFiltros>
            <CardsDisplay>
                {renderList}
            </CardsDisplay>
        </>
    )
}

    
