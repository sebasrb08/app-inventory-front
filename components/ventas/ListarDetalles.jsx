import { StyleSheet, Text, View } from 'react-native'

export function  ListarDetalles({items}) {
    return (
      <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.value}>{items.nombre_producto}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Precio:</Text>
                <Text style={styles.value}>{items.precio_producto}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Cantidad:</Text>
                <Text style={styles.value}>{items.cantidad}</Text>
            </View>
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
    row:{
        flexDirection:'row',
        justifyContent:'start',
        marginVertical:5
    },
    label:{
        fontWeight:'bold',
        fontSize:16,
        marginEnd:5
    },
    value:{
        fontSize:15
    }

})