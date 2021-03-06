import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native'
import { NativeBaseProvider, Text, Heading, Box } from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../context/pedidos/pedidosContext';

const ProgresoPedido = () => {

    const { idpedido } = useContext(PedidoContext);

    return ( 
        <NativeBaseProvider>
            <Text>{idpedido}</Text>
        </NativeBaseProvider>
     );
}
 
export default ProgresoPedido;