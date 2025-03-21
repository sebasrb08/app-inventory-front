import { Text, View,StyleSheet } from 'react-native'

export function ListarVentas ({items}) {
    return (
      <View style={styles.container}>
        <Text>Id: {items.id}</Text>
        <Text>Fecha: {items.fecha}</Text>
        <Text>total: {items.total.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>

      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        padding: 10,
        borderWidth:1,
        borderColor:'#f0f0f0',
        borderRadius:8,

    },
})