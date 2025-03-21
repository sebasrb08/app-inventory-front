import { Text } from "react-native"
import {ProductosComponent} from "../../../components/productos/Productos"
import { Stack } from "expo-router"
export default function Productos(){
    return(
        <>
             <Stack.Screen
                                                    options={{
                                                        title: 'Productos',
                                                        headerStyle: { backgroundColor: 'red' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                                                    }}
                                                />
            <ProductosComponent/>
        </>
    )
}