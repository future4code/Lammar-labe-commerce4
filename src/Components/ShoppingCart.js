import React from 'react'

export function ShoppingCart(props){
    let renderList = props.cartListProp.map(item => {
        return(
            <>
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