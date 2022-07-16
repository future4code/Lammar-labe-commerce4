import React, {useState} from 'react'

export function ProductCard(){

    const [productList, setProductList] = useState([
        {id: 1, name: 'produto 1', price: 100, img: 'https://picsum.photos/200/200'},
        {id: 2, name: 'produto 2', price: 150, img: 'https://picsum.photos/200/201'},
    ])

    const renderList = productList.map((item, index) => {
        return(
            <div>
                <img src={item.img}></img>
            </div>
        )
    })


    return(
        <>
            <ul>
                {renderList}
            </ul>
        </>
    )
}