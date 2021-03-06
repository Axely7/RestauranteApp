import React, {useReducer} from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import { OBTENER_PRODUCTOS_EXITO } from '../../types';
import _ from 'lodash';

const FirebaseState = props => {

    //console.log(firebase);

    // Crear state inicial
    const initialState = {
        menu: [],
    }

    // useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    // Función que se ejecuta para traer los productos
    const obtenerProductos = () =>{
        //firebase.db.settings({experimentalForceLongPolling: true});
        // Consultar Firebase
        firebase.db
            .collection('productos')
            .where('existencia', '==', true) // Trae solo los que estén en existencia
            .onSnapshot(snapshot =>{
                let platillos = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
 
                platillos = Array.from(
                    platillos.reduce(
                        (m, {categoria, ...data}) =>
                        m.set(categoria, [...(m.get(categoria) || []), data]),
                        new Map(),
                    ),
                    ([categoria, data]) => ({categoria, data}),
                );

                // Tenemos resultados de la base de datos
                dispatch({
                    type: OBTENER_PRODUCTOS_EXITO,
                    payload: platillos
                });

            });
            // Ordenar por categoria con lodash
            //platillos = _.sortBy(platillos, 'categoria');
            //console.log(platillos);
    }


    return (
        <FirebaseContext.Provider
            value = {{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;
