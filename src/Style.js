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