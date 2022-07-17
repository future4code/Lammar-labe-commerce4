import React from 'react';
import { MainFiltros, Filtros } from "../Style";


export function LeftBar (){

    return (
        <MainFiltros>
            <h2>Filtros</h2>
            
            <Filtros>
                Valor Minimo:
                <input type={'number'}/>
            </Filtros>
            <Filtros>
                Valor Maximo:
                <input type={'number'}/>
            </Filtros>
            <Filtros>
                Busca por Nome:
                <input/>
            </Filtros>

        </MainFiltros>
    )
}