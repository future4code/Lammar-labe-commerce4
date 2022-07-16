import React from 'react'

export function ShoppingCart(props){
    let renderList = props.cartListProp.map(item =><li>{item.name}</li>)

    return(
        <>
            <h2>Carrinho:</h2>
            <ul>
                {renderList.length > 0 ? renderList : 'Carrinho vazio.'}
            </ul>
        </>
    )
}