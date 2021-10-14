import React, {useReducer} from 'react';

import PedidoReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';

import{
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDENAR_PLATILLO,
} from '../../types';

const PedidoState = props => {

    // Crear state inicial
    const initialState = {
        pedido: [],
        platillo: null
    };

    // useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(PedidoReducer, initialState);

    // Seleccionar el Producto que el usuario desea ordenar
    const seleccionarPlatillo = (platillo) =>{
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: platillo
        })
    };

    // Cuando el usuario confirma un platillo
    const guardarPedido = pedido => {
        dispatch({
            type: CONFIRMAR_ORDENAR_PLATILLO,
            payload: pedido
        })
    };

    return (
        <PedidoContext.Provider
            value = {{
                pedido: state.pedido,
                platillo: state.platillo,
                seleccionarPlatillo,
                guardarPedido,
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;
