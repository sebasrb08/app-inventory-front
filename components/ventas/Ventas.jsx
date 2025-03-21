import { Pressable, Text, View, StyleSheet,FlatList } from 'react-native'
import { Screen } from '../Screen'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react';
import { getBuy } from '../../service/CompraService';
import { useSession } from '../../Contexto/Context';
import { ListarVentas } from './ListarVentas';
import { useVentas } from '../../Contexto/VentasContext';
export  function VentasComponent(){
  const {ventas, setVentas} = useVentas()
  const {session} = useSession()

  useEffect(() => {
    getBuy({session}).then(value => setVentas(value))
  }, []);

  return (
      <Screen>
        <View>
          <Text style={styles.title}>Ventas</Text>
        </View>
        <View>
          <Link href={'ventas/detalleProducto'} asChild>
            <Pressable style ={styles.boton}><Text style={styles.text}>Agregar Ventas</Text></Pressable>
          </Link>
        </View>
        <View style={{flex:1}}>
          <FlatList
            data={ventas}
            renderItem={({item})=>(<ListarVentas items={item}/>)}
            keyExtractor={(item)=> item.id}
          />
        </View>
      </Screen>
    )
}
const styles = StyleSheet.create({
  boton:{
      backgroundColor: "#21BDCA",
      padding: 10,
      borderRadius:8,
      alignItems: "center",
      justifyContent:'center',
      marginVertical: 10,
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:10
  },
  text:{
    color: "#FFF",
    fontWeight: "bold",
  }
});