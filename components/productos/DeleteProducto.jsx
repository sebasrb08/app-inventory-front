import { Text, View,Alert,Pressable } from 'react-native'
import { DeleteIcon } from '../icon/Icons'
import { useContext } from 'react'
import { ProductByIdContext, useProducto } from '../../Contexto/ProductoContext'
import { router } from 'expo-router'
import { deleteProduct } from '../../service/productoService'
import { useSession } from '../../Contexto/Context'

export function DeleteProducto ({items}) {

  const {productos,setProductos}=useProducto()
  const {session} = useSession()
    const deleteObject = ()=>{
      const id  = items.producto.id

      deleteProduct({id,session})
      setProductos((prevDefault)=> prevDefault.filter((elemente)=>elemente.id !== items.producto.id))
      router.back()
    }

    const handleClick = ()=>{
      Alert.alert('Borrar', 'Esta seguro que desea borrar el producto?', [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Si', onPress: () => deleteObject()},
      ]);
    }

    return (
      <Pressable  onPressIn={handleClick}
        style={({ pressed }) => [
        { padding: 10, backgroundColor: pressed ? 'gray' : 'transparent' }        ]}>
        <DeleteIcon color='white'/>
      </Pressable>
    )
}