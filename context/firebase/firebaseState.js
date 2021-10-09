import React, {useReducer} from 'react';

import firebase from '../../firebase';
import firebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';


import { OBTENER_PRODUCTOS } from '../../types';

const FirebaseState = props => {

    //console.log(firebase);

    // Crear state inicial
    const initialState = {
        menu: []
    }

    // useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    // Función que se ejecuta para traer los productos
    const obtenerProductos = () =>{
        dispatch({
            type: OBTENER_PRODUCTOS
        });
        firebase.db.settings({experimentalForceLongPolling: true});
        // Consultar Firebase
        firebase.db
            .collection('productos')
            .where('existencia', '==', true) // Trae solo los que estén en existencia
            .onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot){
            let platillos = snapshot.docs.map(doc =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });

            console.log(platillos);
        }
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
