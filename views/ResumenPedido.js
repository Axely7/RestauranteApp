import React, {useContext, useEffect} from 'react';
import { NativeBaseProvider, Box, Heading, Image, Stack, Text, HStack, Button, Center, FormControl, AddIcon, Input, SectionList, Avatar, FlatList, VStack, Spacer, ScrollView} from 'native-base';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import { StyleSheet, Alert, Pressable } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const ResumenPedido = () => {
 
    // Context de pedido
    const {pedido} = useContext(PedidoContext);
    console.log(pedido);

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
                            renderItem={({item: {cantidad, nombre, imagen, precio}}) => (
                            <>
                                <Box
                                    pl="10"
                                    pr="12"
                                    py="10"
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
                    <Text style={globalStyles.cantidad}>Total a Pagar: $ </Text>
                </Center>
            </ScrollView>
        </NativeBaseProvider>
     );
}
 
export default ResumenPedido;
