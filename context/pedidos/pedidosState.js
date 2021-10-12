import React, {useReducer} from 'react';

import PedidoReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';

import{
    SELECCIONAR_PRODUCTO
} from '../../types';

const PedidoState = props => {

    // Crear state inicial
    const initialState = {
        pedido: [],
        platillo: null
    }

    // useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(PedidoReducer, initialState);

    // Seleccionar el Producto que el usuario desea ordenar
    const seleccionarPlatillo = () =>{

    }

    return (
        <PedidoContext.Provider
            value = {{
                pedido: state.pedido,
                platillo: state.platillo,
                seleccionarPlatillo
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;
