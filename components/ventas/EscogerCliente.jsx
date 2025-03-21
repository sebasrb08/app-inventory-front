import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Screen } from '../Screen'
import { useEffect,useState } from 'react';
import { getClient } from '../../service/ClienteService';
import { ListaEscogerCliente } from './ListaEscogerCliente';
import { useSession } from '../../Contexto/Context';

export function EscogerClienteComponent () {
    const {session} = useSession();
    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        getClient({session}).then(value => setClientes(value))

    }, []);

    return (
      <Screen>
        <Text style={styles.title}>Clientes</Text>
        <FlatList 
            data={clientes}
            renderItem={({item})=>(<ListaEscogerCliente items={item}/>)}
            keyExtractor={(item)=> item.id}
                
            />
      </Screen>
    )
}

const styles=StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:10
    }
})