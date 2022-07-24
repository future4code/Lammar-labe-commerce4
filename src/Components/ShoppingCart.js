import React, { useEffect, useState } from 'react'
import {ShoppCartItem, ShoppCart} from '../Style'

export function ShoppingCart(props){

    const renderList = props.cartList.map(item => {
        return (
                <ShoppCartItem>
                    <span>{item.quantity}x </span>
                    <span>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</span>
                    <span>{item.price}</span>
                </ShoppCartItem>
        )
    })

    return(
        <>
            <h2>Carrinho:</h2>
            <ShoppCart>
                {renderList.length > 0 ? renderList : 'Carrinho vazio.'}
            </ShoppCart>
        </>
    )
}