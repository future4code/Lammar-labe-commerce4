import React from 'react'
import {ShoppCartItem, ShoppCart} from '../Style'

export function ShoppingCart(props){

    const renderList = props.cartList.map(item => {
        return (
            <>
                <ShoppCartItem>
                    {item.quantity}x 
                    {item.name.charAt(0).toUpperCase()+item.name.slice(1)}
                    {item.price}
                </ShoppCartItem>
            </>
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