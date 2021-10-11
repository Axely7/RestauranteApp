import React, {useContext, useEffect, Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {Container, Separator, Content, FlatList, ListItem,
    Thumbnail, Left, Body, NativeBaseProvider, List, Text, Box, Heading,
    Avatar, HStack, VStack, Spacer, Center, 
} from 'native-base';
import globalStyles from '../styles/global';


const Menu = () => {

    // Context de Firebase
    const {menu, obtenerProductos} = useContext(FirebaseContext);
    let i = 0;
    useEffect(()=>{
        obtenerProductos();
    }, []);

    const mostrarHeading = (categoria) =>{
        if(i>0){
            const categoriaAnterior = menu[i - 1].categoria;
            i = i + 1;
            console.log(i);
            if(categoriaAnterior !== categoria){
                return(
                    <VStack space={3} alignItems="center">
                        <Center w="100%" h="8" bg="#000" mb={5} rounded="md" shadow={1}><Text style={styles.separadorTexto}>{categoria}</Text></Center>
                    </VStack>
                )
            }
        } else{
            i = i + 1;
            return(
                <VStack space={3} alignItems="center">
                    <Center w="100%" h="8" bg="#000" mb={5} rounded="md" shadow={1}><Text style={styles.separadorTexto}>{categoria}</Text></Center>
                </VStack>
            )
        }
    }

    return ( 
        <NativeBaseProvider>
                <Box
                 style={{backgroundColor:'#FFF'}}>
                    <FlatList
                        data={menu}
                        renderItem={({item}) =>(
                            <Box
                                borderBottomWidth="1"
                                _dark={{
                                     borderColor: "gray.700",
                                 }}
                                borderColor="coolGray.200"
                                pl="4"
                                pr="5"
                                py="2"
                            >
                            {
                                mostrarHeading(item.categoria)
                                
                                }
                                <HStack space={3}>
                                    <Avatar
                                        size="lg"
                                        source={{
                                            uri: item.imagen
                                        }}
                                    ></Avatar>
                                    <VStack>
                                        <Text
                                            color="coolGray.800"
                                            bold
                                        >{item.nombre}</Text>
                                        <Text
                                            color="coolGray.600"
                                        >
                                            {item.descripcion}
                                        </Text>
                                        <Text
                                            color="coolGray.800"
                                            bold
                                        >Precio: ${item.precio}</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        )}
                        keyExtractor={(item) => item.id}
                    >
                    </FlatList>
                </Box>
            
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