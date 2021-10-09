import React, {useContext, useEffect, Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {
    Container,
    Separator,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Left,
    Body,
    NativeBaseProvider,
} from 'native-base';

import globalStyles from '../styles/global';

const Menu = () => {

    // Context de Firebase
    const {menu, obtenerProductos} = useContext(FirebaseContext);

    useEffect(()=>{
        obtenerProductos();
        //console.log(menu);
    }, []);

    return ( 
        <NativeBaseProvider>
            <Container>
                    <List>
                        {menu.map(platillo =>{
                            const {imagen, nombre, descripcion, categoria, id} = platillo;

                            return (
                                <Fragment key={id}>
                                    <ListItem>
                                        <Body>
                                            <Text>{nombre}</Text>
                                        </Body>
                                    </ListItem>
                                </Fragment>
                            )
                        })}
                    </List>
            </Container>
        </NativeBaseProvider>
     );
}
 
export default Menu;