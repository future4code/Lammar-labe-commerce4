import React, {useState} from 'react'
import { ProductCardStyle, CardsDisplay } from '../Style'

export function ProductCards(props){

    const [productList, setProductList] = useState(props.dbListProp)

    const renderList = productList.map((item, index) => {
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
            <CardsDisplay>
                {renderList}
            </CardsDisplay>
        </>
    )
}