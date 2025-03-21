import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getProductById } from '../../../service/productoService'
import { useSession } from '../../../Contexto/Context'
import { DetailProduct } from '../../../components/productos/Detail'
import {Stack} from 'expo-router'
import { DeleteProducto } from '../../../components/productos/DeleteProducto'
import { ProductByIdContext } from '../../../Contexto/ProductoContext'

export default function  Detail() {
    const {session} = useSession()
    const {id}= useLocalSearchParams()
    const [producto,setProducto] =useState()

    useEffect(()=>{
      getProductById({id,session}).then((value)=> setProducto(value))
    },[])

    return (
      <>
        {producto&&(
          <ProductByIdContext.Provider value={{producto,setProducto}}>
            <Stack.Screen
              options={{
                title: 'Producto',
                headerStyle: { backgroundColor: '#21BDCA' },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight:()=>(
                <View style={styles.container}>
                    <DeleteProducto items = {{producto:producto,setProducto:setProducto}}/>
                </View>
                )
              }}/>
            <DetailProduct/>
          </ProductByIdContext.Provider>
        )}
      </>
    )
}

const styles=StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

})