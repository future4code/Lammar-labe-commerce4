import React, { useState } from 'react'

export function ShoppingCart(props){

    let renderList = props.cartListProp.map(item => {
        return(
            <>
                <li>Id: {item[0].id}</li>
                <li>Qtt: {item[0].quantity}</li>
                <li>Name: {item[0].name}</li>
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