import { Text, View ,TextInput, StyleSheet, Pressable, ScrollView,Modal} from 'react-native'
import { useContext, useState } from 'react';
import { Screen } from '../Screen';
import { AddImageProducto } from './AddImageProducto';

import { Link, router } from 'expo-router';
import { useCategoria } from '../../Contexto/CategoriaContext';
import { saveProduct, uploadImage } from '../../service/productoService';
import { useSession } from '../../Contexto/Context';
import { useProducto } from '../../Contexto/ProductoContext';

export function  AgregarProducto ()  {
    const [selectedImage,setSelectedImage]=useState(null)
    const {categoria} = useCategoria()
    const [nombre, setNombre] = useState(""); 
    const [sku, setSku] = useState(""); 
    const [descripcion, setDescripcion] = useState(""); 
    const [precio, setPrecio] = useState(""); 
    const [cantidad, setCantidad] = useState(""); 
    const { session } = useSession();
    const {productos,setProductos}=useProducto()

    const handleClick=async ()=>{
        let producto={nombre:nombre,sku:sku,descripcion:descripcion,precio:precio,cantidad:cantidad,
            categoria:categoria.id,image:selectedImage
        }
        const producto2 = await saveProduct({producto,session})
        const id= producto2.id
        console.log(selectedImage)
        const {image} = await uploadImage({id,session,selectedImage})
        console.log("Image2",image)

        setProductos([
            ...productos,
            {
            id:producto2.id,
            nombre:producto2.nombre,
            sku:producto2.sku,
            descripcion:producto2.descripcion,
            precio:producto2.precio,
            cantidad:producto2.cantidad,
            image:image,
            categoria:producto2.categoria
            }
          ]);

          router.back()
    }

    return (
        <Screen>
            <ScrollView>
                <View style={styles.textView}>
                    <Text style={styles.text}>Agregar Productos</Text>
                </View>
                    <AddImageProducto selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Sku'
                    value={sku}
                    onChangeText={setSku}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Descripcion'
                    value={descripcion}
                    onChangeText={setDescripcion}

                />
                <TextInput
                    style={styles.input}
                    placeholder='Precio'
                    keyboardType="numeric"                    
                    value={precio}
                    onChangeText={setPrecio}

                />
                <TextInput
                    style={styles.input}
                    placeholder='Cantidad'
                    keyboardType="numeric"                    
                    value={cantidad}
                    onChangeText={setCantidad}

                />
                <View style={styles.categoria}>
                <Link href={"/categoria/listaCategoria"} asChild>
                    <Pressable style={styles.input}>
                    {categoria ==null?(<Text style={styles.textButton}>Categoria</Text>)
                    :
                    (<Text style={styles.textButton}>{categoria.nombre}</Text>)
                    }
                    </Pressable>
                </Link>
                </View>
                <View>
                    <Pressable style={styles.button} onPress={handleClick}>
                        <Text style={styles.textGuardar}>Guardar</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    textView:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:30
    },
    text:{
        fontWeight:'bold',
        fontSize:30
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
      button: {
      height: 56,
      width:'100%',
      padding: 10,
      borderRadius:8,
      backgroundColor: "#21BDCA",
      alignItems: "center",
      justifyContent:'center',
      marginVertical: 10,
    },
    categoria:{
        width:'100%',
    },
    textButton:{
        fontWeight:'600',
        
    },
    textGuardar:{
        fontWeight:'600',
        color:'white'
    }
})