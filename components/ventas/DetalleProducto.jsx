import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Screen } from '../Screen'
import { useEffect, useState } from 'react'
import { getProduct } from '../../service/productoService'
import { useSession } from '../../Contexto/Context'
import { EscogerProducto } from './EscogerProducto'
import { use } from 'react'
import { useDetalle } from '../../Contexto/DetalleProducto'
import { Link } from 'expo-router'

export function DetalleProductoComponent () {
    const {session} = useSession()
    const [productos, setProductos] = useState([])
    const {detalle,setDetalle}= useDetalle()    
    useEffect(() => {
        getProduct({session}).then(value => setProductos(value))
    }, [])
    return (
      <Screen>
        <View>
            <Text style={styles.title}>Productos</Text>
        </View>
        <View style={styles.container}>
            <FlatList
                data={productos}
                renderItem={({item}) => (<EscogerProducto items={item}/>)}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
        </View>
            <Link href={'/ventas/escogerCliente'} asChild>
                <Pressable style={styles.boton}>
                    <Text style={styles.text}>items agregados  {detalle.length}</Text>
                </Pressable>
            </Link>
      </Screen>
    )
}

const styles =StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'row',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:10
    },
    boton:{
        backgroundColor: "#21BDCA",
        padding: 10,
        borderRadius:8,
        alignItems: "center",
        justifyContent:'center',
        marginVertical: 10,
    },
    text:{
      color: "#FFF",
      fontWeight: "bold",
    }
})