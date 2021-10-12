import React, {useContext, useEffect, Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {Container, Separator, Content, FlatList, ListItem,
    Thumbnail, Left, Body, NativeBaseProvider, List, Text, Box, Heading,
    Avatar, HStack, VStack, Spacer, Center, SectionList, Flex, Divider
} from 'native-base';
import globalStyles from '../styles/global';

const Menu = () => {

    // Context de Firebase
    const {menu, obtenerProductos} = useContext(FirebaseContext);
    let i = 0;

    useEffect(()=>{
        obtenerProductos();
        console.log(Object.keys(menu))
    }, []);



    return ( 
        <NativeBaseProvider>
            <Center flex={1}>
                <SectionList
                    w="100%"
                    mx={3}
                    sections={menu}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item: {imagen, nombre, descripcion, precio}}) => (
                    <>
                        <Flex direction="row">
                        <Avatar
                            size="xl"
                            mx={5}
                            mt={2}
                            source={{
                            uri: imagen,
                            }}>
                            {nombre}
                        </Avatar>
                        <Flex direction="column" mt={1}>
                            <Text fontWeight="bold">{nombre}</Text>
                            <Text fontSize="xs" numberOfLines={3}>
                            {descripcion}
                            </Text>
                            <Text fontWeight="bold">Precio: ${precio}</Text>
                        </Flex>
                        </Flex>
                        <Divider my={2} />
                    </>
                    )}
                    renderSectionHeader={({section: {categoria}}) => (
                    <Box
                        bg="black"
                        p={2}
                        _text={{
                        fontSize: 'sm',
                        fontWeight: 'bold',
                        color: '#FFDA00',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        }}>
                        {categoria}
                    </Box>
                    )}
                />
            </Center>
        </NativeBaseProvider>
     );
}

const styles = StyleSheet.create({
    separador:{
        backgroundColor: '#000',
    },
    separadorTexto:{
        color: '#FFDA00',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})


export default Menu;