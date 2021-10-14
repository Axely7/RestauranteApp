import{
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDENAR_PLATILLO,
} from '../../types';


export default (state, action) => {
    switch (action.type){
        case SELECCIONAR_PRODUCTO:
            return{
                ...state,
                platillo: action.payload
            }
        case CONFIRMAR_ORDENAR_PLATILLO:
            return{
                ...state,
                pedido: [...state.pedido, action.payload]
            }
            
        default:
            return state;
    }
}