import React, { useEffect, useState } from 'react'

export function ShoppingCart(props){

    // const [cartList, setCartList] = useState([])

    // newItem = {item: }

    // setCartList([...cartList, ])

    // console.log(localStorage.getItem("prod1"))

    // useState(()=>{
    //     setCartList([...cartList, ])
    //     },[]
    // )

    const renderList = props.cartList.map(item => <li>{localStorage.getItem('prod1')}{item.name}</li>)

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