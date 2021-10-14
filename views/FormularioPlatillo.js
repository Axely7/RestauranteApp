import React, {useState, useContext, useEffect} from 'react';
import { NativeBaseProvider, Box, Heading, Image, Stack, Text, HStack, Button, Center, FormControl, AddIcon, Input} from 'native-base';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import { Alert } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const FormularioPlatillo = () => {

    // State para cantidades
    const [cantidad, guardarCantidad] = useState(1);
    const [total, guardarTotal] = useState(0)
    const {platillo} = useContext(PedidoContext);
    //console.log(platillo);
    const {precio} = platillo;

    // En cuanto el componente carga, calcular la cantidad a pagar
    useEffect(() => {
        calcularTotal();
    }, [cantidad])

    // Calcula el total del platillo por su cantidad
    const calcularTotal = () =>{
        const totalPagar = precio * cantidad;
        guardarTotal(totalPagar);
    }

    // Decrementar en uno
    const decrementarUno = () =>{
        if(cantidad > 1){
            const nuevaCantidad = parseInt(cantidad) - 1;
            guardarCantidad(nuevaCantidad);
        }
    }


    // Incrementa en uno la cantidad
    const incrementarUno = () =>{
        const nuevaCantidad = parseInt(cantidad) + 1;
        guardarCantidad(nuevaCantidad);
    }

    // Confirma si la orden es correcta
    const confirmarOrden = () =>{
        Alert.alert(
            '¿Deseas confirmar tu pedido?',
            'Un pedido confirmado ya no se podrá modificar.',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },

                {
                    text: 'Confirmar',
                    onPress: () => {
                        // Almacenar el pedido al Pedido master o principal

                        // Navegar hacia el resumen
                    },
                },
            ]
        )
    }


    return ( 
        <NativeBaseProvider>
            <Stack space={4} alignItems="center" safeAreaTop>
                    <Heading style={globalStyles.titulo}>Cantidad</Heading>
                    <HStack space={12} alignItems="center">
                        <Button
                            props
                            h="100px"
                            w="36%"
                            style={{backgroundColor: '#000'}}
                            onPress={() => decrementarUno()}
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
                            onPress={() => incrementarUno()}
                        >
                            <Icon style={{fontSize: 40}} name="plus"></Icon>
                        </Button>
                    </HStack>
                    <Box>
                        <Text style={globalStyles.cantidad}>Subtotal: $ {total}</Text>
                    </Box>
            </Stack>
            <Center flex={1}></Center>
            <HStack alignItems="center" safeAreaBottom>
                <Button style={globalStyles.boton} w="100%" mb={5} onPress={() => confirmarOrden()}>
                    <Text style={globalStyles.botonTexto}>Agregar al Pedido</Text>
                </Button>
            </HStack>
        </NativeBaseProvider>
     );
}
 
export default FormularioPlatillo;