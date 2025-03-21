import { useState, useEffect } from 'react'
import { Text, View,Image, StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router';
import { GetImage } from './GetImage';
export function  ListaProducto ({items})  {
    const [loading,setLoading] =useState(false)
    if( items == null){
        return(<Text>No hay productos agregados</Text>)
    }
    
    return (
        <>

        {loading ?(<Text>cargando ...</Text>):(
        
        <Link href={`/producto/${items.id}`} asChild>
            <Pressable style={styles.container}>
            <View>
                <Text>{items.id}</Text>
            </View>
                <View style={styles.image}>
                    <GetImage items={items}/>
                </View>
                <View style={styles.nombre}>
                    <Text>{items.nombre}</Text>
                </View>
                <View style={styles.precio}>
                    <Text>{items.precio.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} </Text>

                </View>
            </Pressable>
        </Link>
        
        )}
        </>
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
    image:{
        width:'20%'
    },
    nombre:{
        width:'20%'
    },
    precio:{
        width:'20%'
    }

})