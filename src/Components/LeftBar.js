import React from 'react';
import { MainFiltros, Filtros } from "../Style";



export function LeftBar (props){
      function handleMinimo (event) {
        props.setMinPreco(event.target.value)
    }

    function handleMaximo (event) {
        props.setMaxPreco(event.target.value)
    }

    function handleNome (event) {
        props.setBusca(event.target.value)
    }
    return (
        <MainFiltros>
            <h2>Filtros</h2>
            
            <Filtros>
                Valor Minimo:
                <input type={'number'}
                value={props.minPrice}
                onChange={handleMinimo}/>;
            </Filtros>
            <Filtros>
                Valor Maximo:
                <input type={'number'}
                value={props.maxPreco}
                onChange={handleMaximo}/>;
            </Filtros>
            <Filtros>
                Busca por Nome:
                <input
                value={props.busca}
                onChange={handleNome}/>;
            </Filtros>

        </MainFiltros>
    )
}