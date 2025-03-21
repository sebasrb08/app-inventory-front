import { Text, View,FlatList, Pressable,StyleSheet } from 'react-native'
import { createContext, useEffect, useState } from 'react';
import { getCategoria } from '../../service/CategoriaService';
import { ListaCategoriaComponent } from './ListaCategoria';
import { Screen } from '../Screen';
import { Link } from 'expo-router';
import { useSession } from '../../Contexto/Context';
import { CategoriaListContext, useCategoria } from '../../Contexto/CategoriaContext';


export function Categoria() {

    const {session} =useSession()
    const [categoria,setCategoria] = useState(null)
    const [nombre, setNombre] = useState("");

    useEffect(() => {
        getCategoria(session).then((value)=>{
          setCategoria(value)
        })  
    }, []);


    return (
      <Screen>
        <CategoriaListContext.Provider value={{categoria,setCategoria}}>
          <Link href={"/categoria/agregarCategoria"} asChild>
            <Pressable style={styles.button}>
                <Text style={styles.textButton}>Agregar Categoria</Text>
            </Pressable>
          </Link>
          {categoria == null?<Text>No hay categorias</Text>:(
            <FlatList
            data={categoria}
            renderItem={({item})=> <ListaCategoriaComponent items={item}/>}
            keyExtractor={item => item.id}
            />
                
          )}
        </CategoriaListContext.Provider>
      </Screen>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 56,
        width:'100%',
        marginVertical: 10,
        borderWidth: 1,
        borderRadius:8,
        paddingHorizontal: 10,
      },
      button: {
      height: 56,
      width:'100%',
      backgroundColor: "#21BDCA",
      padding: 10,
      borderRadius:8,
      alignItems: "center",
      justifyContent:'center',
      marginVertical: 10,
    },
    textButton:{
        color:'white',
        fontWeight:'600'
    }

})