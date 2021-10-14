import React from 'react';
import { NativeBaseProvider, Box, Heading, Image, Stack, Text, HStack, Button, Center, FormControl } from 'native-base';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';

const FormularioPlatillo = () => {
    return ( 
        <NativeBaseProvider>
            <Box>
                <FormControl>
                    <Heading style={globalStyles.titulo}>Cantidad</Heading>
                    
                </FormControl>
            </Box>
        </NativeBaseProvider>
     );
}
 
export default FormularioPlatillo;