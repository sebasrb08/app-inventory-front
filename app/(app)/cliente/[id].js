import { useLocalSearchParams,Stack } from 'expo-router'
import { DetailClientComponent } from '../../../components/cliente/Detail'
import { useSession } from '../../../Contexto/Context'
import { getClientById } from '../../../service/ClienteService'
import { useState,useEffect } from 'react'
import { View ,StyleSheet} from 'react-native'
import { DeleteCliente } from '../../../components/cliente/DeleteCliente'
export default function DetailClient () {
    const {id} =useLocalSearchParams()
    const {session} =useSession()
    const [cliente,setCliente] = useState()

    useEffect(() => {
        getClientById({id,session}).then((value)=> setCliente(value))
    }, []);

    return (
        <>
            {cliente&&(
                <>

                <Stack.Screen
                      options={{
                        title: 'Cliente',
                        headerStyle: { backgroundColor: '#21BDCA' },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                        headerRight:()=>(
                        <View style={styles.container}>
                            <DeleteCliente items={cliente}/>
                        </View>
                        )
                      }}/>
                <DetailClientComponent item={cliente}/>
                </>
            )}
        </>
    )
}
const styles = StyleSheet.create({

})