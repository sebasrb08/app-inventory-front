import { Text, TextInput, View ,StyleSheet,Pressable} from 'react-native'
import { Screen } from '../Screen'
import { useState } from 'react';
import { router,useNavigation } from 'expo-router';
import { saveCategoria } from '../../service/CategoriaService';
import { useCategoria } from '../../Contexto/CategoriaContext';
import { useSession } from '../../Contexto/Context';

export  function AddCategoriaComponent () {
    const [nombre, setNombre] = useState("");
    const {setCategoria} = useCategoria()
    const { session } = useSession();
    const navigation = useNavigation();

    const handleClick= async ()=>{
        const categoria = await saveCategoria({nombre,session})
        setCategoria({nombre:categoria.nombre,id:categoria.id})
        router.dismiss(2);
    }


    return (
      <Screen>
        <View style={styles.container}  >
            <TextInput
                value={nombre}
                onChangeText={setNombre}
                placeholder='Nombre'
                style={styles.input}
            />
        <Pressable style={styles.boton} onPress={handleClick}>
            <Text style={styles.textButton}>Agregar Categoria</Text>
        </Pressable>
        </View>
      </Screen>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        height: 56,
        width:'100%',
        marginVertical: 10,
        borderWidth: 1,
        borderRadius:8,
        paddingHorizontal: 10,
      },
      boton:{
        width:'100%',
      backgroundColor: "#21BDCA",
      padding: 10,
      borderRadius:8,
      alignItems: "center",
      justifyContent:'center',
      marginVertical: 10,
  },
})