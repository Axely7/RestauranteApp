import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Button, Text, NativeBaseProvider} from 'native-base';

const NuevaOrden = () => {
    return ( 
        <NativeBaseProvider>
            <Container>
                <View>
                    <Button>
                        <Text>Crear Nueva Orden</Text>
                    </Button>
                </View>
            </Container>
        </NativeBaseProvider>
     );
}
 
export default NuevaOrden;