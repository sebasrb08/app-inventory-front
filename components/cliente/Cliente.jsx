import { Text, View,Pressable,StyleSheet,FlatList,TextInput } from 'react-native'
import { Screen } from '../Screen'
import { useSession } from '../../Contexto/Context';
import { Link } from 'expo-router';
import { ClienteProvider, useCliente } from '../../Contexto/ClienteContext';
import { ListaCliente } from './ListaCliente';
import { getClient } from '../../service/ClienteService';
import { useEffect ,useState} from 'react';
export function Cliente() {
  const {cliente,setCliente}=useCliente()
  const { session } = useSession();
  const [filtrar,setFiltrar]=useState()


  useEffect(() => {
    getClient({session}).then(value => setCliente(value))
  }, []);

  const handleClick=(e)=>{
    setFiltrar(e)
    if(e ===''){
      getClient({session}).then(value => setCliente(value))
    }else{
      setCliente( cliente.filter((cliente)=>{
        return cliente.nombre.toLowerCase().includes(e.toLowerCase())
      }))
    }
  }

  return (
    <Screen>
        <View style={{flex:1}}>
          <View>
            <Text style={styles.title}>Clientes</Text>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder='Busqueda por nombre de producto'
              value={filtrar}
              onChangeText={handleClick}
            />

            <Link href={'/cliente/agregarCliente'} asChild>
              <Pressable style={styles.boton}>
                <Text style={styles.text}>+</Text>
              </Pressable>
            </Link>
          </View>
          <FlatList
            data={cliente}
            renderItem={({item})=>(<ListaCliente items={item}/>)}
            keyExtractor={item => item.id}
          />
          
        </View>
    </Screen>
    )
}

const styles = StyleSheet.create({
  title:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:10
  },
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