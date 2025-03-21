import { StyleSheet, Text, View } from 'react-native'
import { AgregarVentaComponent } from '../../../components/ventas/AgregarVenta'
import { useClienteCompra } from '../../../Contexto/ClienteCompra'
import { Stack } from 'expo-router'

export default function  agregarVenta () {
    const {clienteCompra} = useClienteCompra()

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Detalles',
                    headerStyle: { backgroundColor: '#21BDCA' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight:()=>(
                    <View >
                        <Text style={styles.text}>{clienteCompra.nombre}</Text>
                    </View>
                    )
                }}
             />
            <AgregarVentaComponent/>
        </>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 16,
        color: '#fff',
    }
})