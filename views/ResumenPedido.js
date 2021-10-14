import React, {useContext, useEffect} from 'react';
import { NativeBaseProvider, Box, Heading, Image, Stack, Text, HStack, Button, Center, FormControl, AddIcon, Input} from 'native-base';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import { StyleSheet, Alert } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const ResumenPedido = () => {

    // Context de pedido
    const {pedido} = useContext(PedidoContext);
    console.log(pedido);

    return ( 
        <NativeBaseProvider style={globalStyles.contenedor}>
            <Box flex={1} style={globalStyles.contenido} alignItems="center">
                <Heading style={{marginTop: 20}}>Resumen Pedido</Heading>
                <Text style={globalStyles.cantidad}>Total a Pagar: $ </Text>
            </Box>
        </NativeBaseProvider>
     );
}
 
export default ResumenPedido;
