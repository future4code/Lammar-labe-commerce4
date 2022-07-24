import styled from 'styled-components'

// Componente ProductCards
export const CardsDisplay = styled.div`
    display: flex;
    gap: 10px;
    margin: 0 10px;
`

export const ProductCardStyle = styled.div`
    border: 1px solid black;
    height: 300px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;

    p{
        padding: 0 10px;
        margin: 5px 0;
    }

    button{
        align-self: center;
    }
`

// Componente ShoppingCart
export const ShoppCart = styled.ul`
    display: flex;
    border: 1px black solid;
`

export const ShoppCartItem = styled.li`
    list-style: none;



//Filter
export const MainFiltros = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 300px;
    
`
export const Filtros = styled.label`
display: flex;
flex-direction: column;
padding: 10px 0;
`

// Componente Copyright
export const Footer = styled.div`
    background-color:  black;
    color: white;
    text-align: center;
    padding: 0 10px;
    position: absolute;   
    bottom: 0;
    width: 100%;


    p {
        font-weight: bold;
    }
`