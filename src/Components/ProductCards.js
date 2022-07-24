import React, {useState} from 'react'
import { ProductCardStyle, CardsDisplay } from '../Style'

export function ProductCards(props){

    // const [productList, setProductList] = useState(props.dbListProp)

    // const renderList = productList.map((item, index) => {
    const renderList = props.productListProp.map((item, index) => {

        const addProduct = () => {
            const productList2 = [...props.productListProp]
            const findIndex = productList2.findIndex(newProduct => {
                return newProduct === item
            })
            props.addProd(findIndex)
        }
    

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
            <h2>All Products:</h2>
            <CardsDisplay>
                {renderList}
            </CardsDisplay>
        </>
    )
}