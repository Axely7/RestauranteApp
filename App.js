import 'react-native-gesture-handler';
import React from 'react';
import {Button, Text} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NuevaOrden from './views/NuevaOrden';
import Menu from './views/Menu';
import DetallePlatillo from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import ResumenPedido from './views/ResumenPedido';
import ProgresoPedido from './views/ProgresoPedido';

// Components 
import BotonResumen from './components/ui/BotonResumen';

// importar state de context
import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidosState';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <PedidoState>     
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle:{
                  backgroundColor: '#FFDA00'
                },
                headerBackTitleStyle:{
                  fontWeight: 'bold',
                }
              }}
            >
              <Stack.Screen
                name="NuevaOrden"
                component={NuevaOrden}
                options={{
                  title: "Nueva Orden"
                }}
              ></Stack.Screen>

              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                  title: "Nuestro Menu",
                  headerRight: (props) => <BotonResumen></BotonResumen>
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="DetallePlatillo"
                component={DetallePlatillo}
                options={{
                  title: "Detalle Platillo"
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="FormularioPlatillo"
                component={FormularioPlatillo}
                options={{
                  title: "Ordenar Platillo"
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="ResumenPedido"
                component={ResumenPedido}
                options={{
                  title: "Resumen Pedido"
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="ProgresoPedido"
                component={ProgresoPedido}
                options={{
                  title: "Progreso de Pedido"
                }}
              ></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>   
      </FirebaseState>

    </>
  );
};

export default App;
