import React, {useContext, useEffect} from 'react';
import { NativeBaseProvider, Box, Heading, Image, Stack, Text, HStack, Button, Center, FormControl, AddIcon, Input, SectionList, Avatar, FlatList, VStack, Spacer, ScrollView} from 'native-base';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import { StyleSheet, Alert, Pressable } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ELIMINAR_PRODUCTO } from '../types';
import firebase from '../firebase';

const ResumenPedido = () => {

    const navigation = useNavigation();

    // Context de pedido
    const {pedido, total, mostrarResumen, eliminarProducto, pedidoRealizado} = useContext(PedidoContext);
    console.log(pedido);

    useEffect(()=>{
        calcularTotal();
    }, [pedido]);

    const calcularTotal = () => {
        let nuevoTotal = 0;
        nuevoTotal = pedido.reduce((nuevoTotal, articulo) => nuevoTotal + articulo.total, 0);
        mostrarResumen(nuevoTotal);
    }

    // Redirecciona a Progreso pedido
    const progresoPedido = () =>{
        Alert.alert(
            'Revisa tu pedido',
            'Una vez que realizas tu pedido, no podrás cambiarlo',
            [
                {
                    text: 'Revisar',
                    style: 'cancel'
                },
                {
                    text: 'Confirmar',
                    onPress: async () =>{
                        // creando un objeto
                        const pedidoObj = {
                            tiempoentrega: 0,
                            completado: false,
                            total: Number(total),
                            orden: pedido, // array
                            creado: Date.now()
                        }

                        console.log(pedidoObj);

                        try {
                            const pedido = await firebase.db.collection('ordenes').add(pedidoObj);
                            pedidoRealizado(pedido.id);

                            // Reedireccionar a pedido progreso
                            navigation.navigate("ProgresoPedido")
                        } catch (error) {
                            console.log(error);
                        }
                    }
                },
                
            ]
        )
    }

    // Elimina un producto del arreglo de pedido
    const confirmarEliminacion = id =>{
        Alert.alert(
            '¿Deseas eliminar este artículo?',
            'Una vez eliminado no se puede recuperar',
            [
                {text: 'Cancelar', style:'cancel'},
                {
                    text: 'Confirmar',
                    onPress: () =>{
                        // Eliminar del state
                        eliminarProducto(id);

                    }
                },
                
            ]
        )
    }

    return ( 
        <NativeBaseProvider style={globalStyles.contenedor}>
            <ScrollView>
                <Center>
                    <Heading style={{marginTop: 20}}>Resumen Pedido</Heading>
                    <Box w={{
                        base: "100%",
                        md: "25%"
                    }}>
                        <FlatList
                            data={pedido}
                            renderItem={({item: {id, cantidad, nombre, imagen, precio}}) => (
                            <>
                                <Box
                                    pl="10"
                                    pr="12"
                                    py="3"
                                >
                                <Pressable onPress={() => {
                                    console.log('Yes');
                                }}>
                                <HStack space={3} justifyContent="space-between">
                                        <Avatar 
                                            size="xl"
                                            borderRadius={0}
                                            source={{
                                                uri: imagen,
                                            }}
                                        />
                                        <VStack mx={12} my={3}>
                                            <Text
                                                bold
                                            >{nombre}</Text>
                                            <Text>Cantidad: {cantidad}</Text>
                                            <Text>Precio: $ {precio}</Text>
                                            <Button 
                                                onPress={ () => confirmarEliminacion(id)}
                                                w="100%" 
                                                style={{marginTop: 20, }} 
                                                colorScheme="danger">
                                                <Text style={{color:'#FFF'}}>Eliminar</Text>
                                            </Button>
                                        </VStack>
                                        <Spacer />
                                </HStack>
                                </Pressable>
                                </Box>
                            </>
                            )}
                        >
                        </FlatList>
                    </Box>
                    <Text style={globalStyles.cantidad}>Total a Pagar: $ {total}</Text>
                    <Button style={{marginTop: 30, backgroundColor: '#000'}} w="90%" mb={5} full
                        onPress={() => navigation.navigate("Menu")}
                    >
                        <Text style={{ color:'#FFF', fontWeight: 'bold', textTransform: 'uppercase'}}>Seguir Pidiendo</Text>
                    </Button>
                </Center>
            </ScrollView>
            <Center flex={1}></Center>
                <HStack alignItems="center" safeAreaBottom>
                    <Button style={globalStyles.boton} w="100%" mb={5} onPress={ () => progresoPedido()}>
                        <Text style={globalStyles.botonTexto}>Ordenar Pedido</Text>
                    </Button>
                </HStack>
        </NativeBaseProvider>
     );
}
 
export default ResumenPedido;
