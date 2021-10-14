import React, {useState} from 'react';
import { NativeBaseProvider, Box, Heading, Image, Stack, Text, HStack, Button, Center, FormControl, AddIcon, Input} from 'native-base';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const FormularioPlatillo = () => {

    // State para cantidades
    const [cantidad, guardarCantidad] = useState(1);


    return ( 
        <NativeBaseProvider>
            <Stack space={4} alignItems="center">
                    <Heading style={globalStyles.titulo}>Cantidad</Heading>
                    <HStack space={12} alignItems="center">
                        <Button
                            props
                            h="100px"
                            w="36%"
                            style={{backgroundColor: '#000'}}
                        >
                            <Icon style={{fontSize: 40}} name="minus"></Icon>
                        </Button>
                        
                        <Button
                            props
                            dark
                            style={{backgroundColor: 'transparent'}}
                        >
                            <Input 
                                style={{textAlign: 'center', fontSize: 20}}
                                value={cantidad.toString()}
                                keyboardType="numeric"
                                onChangeText={(cantidad) => guardarCantidad(cantidad)}
                                ></Input>
                        </Button>

                        <Button
                            props
                            h="100px"
                            w="36%"
                            style={{backgroundColor: '#000'}}
                        >
                            <Icon style={{fontSize: 40}} name="plus"></Icon>
                        </Button>
                    </HStack>
            </Stack>
        </NativeBaseProvider>
     );
}
 
export default FormularioPlatillo;