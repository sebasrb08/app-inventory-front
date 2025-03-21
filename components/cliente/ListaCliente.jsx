import { Text, View,Pressable,StyleSheet } from 'react-native'
import { useState } from 'react'
import { Link } from 'expo-router'
export function ListaCliente({items}) {
    const [loading,setLoading] =useState(false)
    if( items == null){
            return(<Text>No hay productos agregados</Text>)
        }

    return (
        <>

        {loading ?(<Text>cargando ...</Text>):(
            <Link href={`/cliente/${items.id}`} asChild>
                <Pressable style={styles.container}>
                <View>
                    <Text>{items.id}</Text>
                </View>
                    <View style={styles.nombre}>
                        <Text>{items.nombre}</Text>
                    </View>
                    <View style={styles.apellido}>
                        <Text>{items.apellido}</Text>
                    </View>
                    <View style={styles.email}>
                        <Text>{items.email}</Text>
                    </View>
                    <View style={styles.telefono}>
                        <Text>{items.telefono}</Text>
                    </View>
                </Pressable>        
            </Link>
        )}
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        height:75,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        padding: 10,
        borderWidth:1,
        borderColor:'#f0f0f0',
        borderRadius:8,
    },
    apellido:{
        width:'20%'
    },
    nombre:{
        width:'20%'
    },
    email:{
        width:'20%'
    },
    telefono:{
        width:'20%'
    }
})