import { useContext,useEffect,useState } from 'react'
import { Text, View,Image, StyleSheet,TextInput, Pressable } from 'react-native'
import { Screen } from '../Screen'
import { GetImage } from './GetImage'
import { ProductByIdContext, useProducto } from '../../Contexto/ProductoContext'
import { getProductById, updateProduct } from '../../service/productoService'
import { useSession } from '../../Contexto/Context'
import { router } from 'expo-router'

export function DetailProduct() {

  const {producto,setProducto}=  useContext(ProductByIdContext)
  const {productos, setProductos}= useProducto()
  const [nombre, setNombre] = useState(producto.nombre);
  const [sku, setSku] = useState(producto.sku);
  const [descripcion, setDescripcion] = useState(producto.descripcion);
  const [precio, setPrecio] = useState(producto.precio.toString());
  const [cantidad, setCantidad] = useState(producto.cantidad.toString());
  const {session} =useSession()

  
  const handleClick= async()=>{
    
    const producto2 = {
      id: producto.id,
      nombre: nombre,
      sku: sku,
      descripcion: descripcion,
      precio: parseFloat(precio),
      cantidad: parseInt(cantidad),
      image: producto.image,
      categoria: producto.categoria.id
    };
    const updatedProduct = await updateProduct({ producto2, session });
    setProducto(updatedProduct);
    setProductos((prevProductos) =>
      prevProductos.map((item) =>
        item.id === updatedProduct.id ? updatedProduct : item
      )
    )
    router.back()
  }


  const tamaño=160
    return (
      <Screen>
        <View style={styles.container}>
          <View>
            <GetImage items={producto} tamaño={tamaño}/>
          </View>

          <TextInput
            style={styles.input}
            placeholder='Nombre'
            value={nombre}
            onChangeText={(e)=>{
              setNombre(e)
            }}
          />

          <TextInput
            style={styles.input}
            placeholder='Sku'
            value={sku}
            onChangeText={(e)=>{
              setSku(e)
            }}
          />

          <TextInput
            style={styles.input}
            placeholder='Descripcion'
            value={descripcion}
            onChangeText={(e)=>{
              setDescripcion(e)
            }}
          />

          <TextInput
            style={styles.input}
            placeholder='Precio'
            value={precio}
            onChangeText={(e)=>{
              setPrecio(e)
            }}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder='Cantidad'
            value={cantidad}
            onChangeText={(e)=>{
              setCantidad(e)
            }}
            keyboardType="numeric"

          />
          <Pressable onPress={handleClick} style={styles.boton}>  
              <Text style={styles.textBoton}>Guardar</Text>
          </Pressable>
        </View>
      </Screen>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, // Asegura que el contenedor ocupe toda la pantalla
    alignItems:'center'
  },
  input: {
    height: 56,
    width:'100%',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius:8,
    paddingHorizontal: 10,
    justifyContent:'center'
  },
  boton:{
    height: 56,
    width:'100%',
    backgroundColor: "#21BDCA",
    padding: 10,
    borderRadius:8,
    alignItems: "center",
    justifyContent:'center',
    marginVertical: 10,
  },
  textBoton:{
      color:'white',
      fontWeight  :'bold'
  }
  
 
})