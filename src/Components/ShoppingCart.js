import React, { useState } from 'react'

export function ShoppingCart(props){

    // let renderList = props.cartListProp.map(item => {
    //     return(
    //         <>
    //             <li>Id: {item.id}</li>
    //             <li>Qtt: {item.amount}</li>
    //             {/* <li>Name: {item.name}</li> */}
    //         </>
    //     )
    // })

    return(
        <>
            <h2>Carrinho:</h2>
            <ul>
                {/* {renderList.length > 0 ? renderList : 'Carrinho vazio.'} */}
            </ul>
        </>
    )
}