import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useClienteCompra } from '../../Contexto/ClienteCompra';
import { router } from 'expo-router';

export function ListaEscogerCliente({items}) {
    
    const {clienteCompra,setClienteCompra}=useClienteCompra();

    const handleClick = () => {
        setClienteCompra(items);
        router.push('/ventas/agregarVenta');
    }
    return (
      <View style={styles.container}>
        <Pressable onPress={handleClick}>
            <Text>{items.id}</Text>
            <Text>{items.nombre}</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding: 10,
        borderWidth:1,
        borderColor:'#f0f0f0',
        borderRadius:8,
    },
})