import React, {useState} from 'react'
import { ProductCardStyle, CardsDisplay, MainFiltros, Filtros } from '../Style'

export function ProductCards(props){
    const [productList, setProductList] = useState(props.dbListProp)
    const [minPreco, setMinPreco] = useState(-Infinity)
    const [maxPreco, setMaxPreco] = useState(Infinity)
    const [order, setOrder] = useState('asc')
    const [busca, setBusca] = useState("")

    const handleOrdem = (event) => {
        setOrder(event.target.value)
        if (order === "asc"){
            return 0
        } else{
            return -1
        }
    }
   
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
    }).sort(()=>{
        if (order === "asc") {
            return 0
        } else {
            return -1
        }
        return item.price <= maxPreco || maxPreco === ""
    })
   

    const renderList = produtosFiltrados.map((item, index) => {
        return(
            <ProductCardStyle>
                <img src={item.img} alt="Imagem do produto"></img>
                <p>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</p>
                <p>R$ {item.price},00</p>
                <button>Adicionar ao carrinho</button>
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


         <select
            value = {order}
            onChange={handleOrdem}
            >
                <option value={"asc"}>Crescente</option>
                <option value={"desc"}>Descrescente </option>
         </select>
         
         
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

    
