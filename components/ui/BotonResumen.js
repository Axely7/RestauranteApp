import React, {useContext} from 'react';
import {NativeBaseProvider, Button, Text} from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../../context/pedidos/pedidosContext';

const BotonResumen = () => {

    const navigation = useNavigation();

    // Leer el objeto de pedido
    const {pedido} = useContext(PedidoContext);

    if(pedido.length === 0) return null;

    return ( 
        <NativeBaseProvider>
            <Button sytle={globalStyles.boton} style={{backgroundColor: '#FFDA00', marginTop: 10}}
                onPress={() => navigation.navigate('ResumenPedido')}
            >
                <Text style={globalStyles.botonTexto}>Ir a Pedido</Text>
            </Button>
        </NativeBaseProvider>
     );
}
 
export default BotonResumen;