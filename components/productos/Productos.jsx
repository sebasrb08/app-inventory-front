import { Pressable, Text, View,StyleSheet, FlatList, TextInput } from 'react-native'
import { Screen } from '../Screen'
import { ListaProducto } from './ListaProducto'
import { ImageProducto } from './AddImageProducto'
import { Link } from 'expo-router'
import { getProduct } from '../../service/productoService'
import { useSession } from '../../Contexto/Context'
import { createContext,useState,useEffect } from 'react'
import { useProducto } from '../../Contexto/ProductoContext'

export const ProductoContext = createContext()

export  function ProductosComponent(){
  const {productos,setProductos}=useProducto()
  const [productoOriginal,setProductoOriginal]=useState()

  const { session } = useSession();
  const [filtrar,setFiltrar]=useState()

  useEffect(() => {
    getProduct({session}).then(value => {
      setProductos(value)
      setProductoOriginal(value);
    })
  
  }, []);

  const handleClick=(e)=>{
    setFiltrar(e)
    if(e ===''){
      setProductos(productoOriginal)
    }else{
      setProductos( productoOriginal.filter((producto)=>{
        return producto.nombre.toLowerCase().includes(e.toLowerCase())
      }))
    }
  }

  return (
    <Screen>
        <View style={{flex:1}}>
          <View>
            <Text style={styles.title}>Productos</Text>
          </View>
          <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder='Busqueda por nombre de producto'
                value={filtrar}
                onChangeText={handleClick}
              />
              <Link href={'/producto/agregarProducto'} asChild>
                <Pressable style={styles.boton}>
                  <Text style={styles.text}>+</Text>
                </Pressable>
              </Link>
          </View>

          <FlatList
            data={productos}
            renderItem={({item})=>(<ListaProducto items={item}/>)}
            keyExtractor={(item)=> item.id?.toString()}
          />
          
        </View>
    </Screen>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 46,
    width:'80%',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius:8,
    paddingHorizontal: 10,
    justifyContent:'center',
    marginHorizontal:10
  },
  container:{
      width:'100%',
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
});