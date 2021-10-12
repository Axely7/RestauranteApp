import React, {useContext} from 'react';
import { NativeBaseProvider, Box, Heading, Image, Stack, Text, HStack, Button, Center } from 'native-base';
import PedidoContext from '../context/pedidos/pedidosContext';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';

const DetallePlatillo = () => {
    // Pedido Context
    const {platillo} = useContext(PedidoContext);
    const {nombre, imagen, descripcion, precio} = platillo;
    //console.log(platillo);

    // Redireccionar
    const navigation = useNavigation();

    return ( 
        <NativeBaseProvider style={globalStyles.contenedor}>
            <Box flex={1} style={globalStyles.contenido} safeAreaTop>
                <Stack>
                    <Stack>
                        <Heading style={globalStyles.titulo}>
                            {nombre}
                        </Heading>
                        <Image style={globalStyles.imagen} source={{uri: imagen}} alt="Imagen platillo"></Image>
                        <Text style={{marginTop: 20}}>{descripcion}</Text>
                        <Text style={globalStyles.cantidad}>Precio: ${precio}</Text>
                    </Stack>
                </Stack>
                <Center flex={1}></Center>
                <HStack alignItems="center" safeAreaBottom>
                    <Button style={globalStyles.boton} w="100%" mb={5} onPress={ () => navigation.navigate("FormularioPlatillo")}>
                        <Text style={globalStyles.botonTexto}>Ordenar Platillo</Text>
                    </Button>
                </HStack>
            </Box>
        </NativeBaseProvider>
     );
}

export default DetallePlatillo;