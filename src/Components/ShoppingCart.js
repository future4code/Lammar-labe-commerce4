import React, { useState } from 'react'

export function ShoppingCart(props){

    const [productQuantity, setProductQuantity] = useState([])

    let renderList = props.cartListProp.map(item => {
        // setProductQuantity({id:{item.id}, })
        return(
            <>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>R$ {item.price}</li>
            </>
        )
    })

    return(
        <>
            <h2>Carrinho:</h2>
            <ul>
                {renderList.length > 0 ? renderList : 'Carrinho vazio.'}
            </ul>
        </>
    )
}