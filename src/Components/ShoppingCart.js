import React, { useEffect, useState } from 'react'

export function ShoppingCart(props){

    const renderList = props.cartList.map(item => {
        return <li>{item.quantity}{item.name}</li>
    })

    return(
        <>
            <h2>Carrinho:</h2>
            <ul>
                {renderList.length > 0 ? renderList : 'Carrinho vazio.'}
                {/* <li>{localStorage.getItem("prod1")}</li> */}
            </ul>
        </>
    )
}