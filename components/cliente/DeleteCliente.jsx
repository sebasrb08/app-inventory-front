import { Pressable, Text, View,Alert } from 'react-native'
import { DeleteIcon } from '../icon/Icons'
import { useCliente } from '../../Contexto/ClienteContext';
import { useSession } from '../../Contexto/Context';
import { deleteClient } from '../../service/ClienteService';
import { router } from 'expo-router';
export function DeleteCliente ({items}) {

    const {cliente,setCliente} = useCliente();
    const {session} = useSession()
    const deleteObject = ()=>{
        const id  = items.id
        deleteClient({id,session})
        setCliente((prevDefault)=> prevDefault.filter((element)=> element.id !== id))
        router.back()
    }

    const handleClick=()=>{
              Alert.alert('Borrar', 'Esta seguro que desea borrar el Cliente?', [
                {
                  text: 'No',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'Si', onPress: () => deleteObject()},
              ]);
    }
    return (
        <Pressable onPressIn={handleClick}>
            <DeleteIcon color='white'/>
        </Pressable>
    )
}