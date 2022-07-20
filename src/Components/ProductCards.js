import React, {useState} from 'react'
import { ProductCardStyle, CardsDisplay } from '../Style'

export function ProductCards(props){

    const [productList, setProductList] = useState(props.dbListProp)

    const renderList = productList.map((item, index) => {

        const addProduct = () => {
            const productList2 = [...productList]
            const findIndex = productList2.findIndex(newProduct => {
                return newProduct === item
            })
            // props.setCartListProp(productList[findIndex])

            let newItem = 
                {id: productList[findIndex].id,
                quantity: 1,
                name: productList[findIndex].name,
                }

            // for (const item of props.cartListProp) {
            //     if (item.id === newItem.id) {
            //         item.quantity = item.quantity+1
            //     } else {
            //         props.setCartListProp([...cartListProp, newItem])
            //     }
            // }

            // props.setCartListProp([
            //     {id: productList[findIndex].id,
            //     quantity: 0,
            //     name: productList[findIndex].name,
            //     }
            // ])

            props.setCartListProp([...props.cartListProp, newItem])
            let aux = [...props.cartListProp]
            for (const item of aux) {
                console.log(item)
            }
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