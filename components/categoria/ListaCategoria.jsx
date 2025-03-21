import { Text, View,Pressable,StyleSheet } from 'react-native'
import { useCategoria } from '../../Contexto/CategoriaContext';
import { router } from 'expo-router';
import {  UpdateIcon } from '../icon/Icons';
import { useSession } from '../../Contexto/Context';
import { DeleteCategoria } from './DeleteCategoria';
import { UpdateCategoria } from './UpdateCategoria';
export  function ListaCategoriaComponent({items})   {
  const {setCategoria} = useCategoria()
  const {session} =useSession()

  const handleClick=()=>{
    setCategoria({nombre:items.nombre,id:items.id})
    router.back()
  }


  return(
      <View style={styles.container}>
          <Pressable style={styles.boton} onPress={handleClick}>
              <Text style={styles.textButton}>{items.nombre}</Text>
          </Pressable>
          <View style={styles.update}>
            <UpdateCategoria items={items}/>
          </View>
          <View style={styles.delete}>
            <DeleteCategoria items={{id:items.id,session:session}} />
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30,
    borderBottomWidth:1,
    borderTopWidth:1,
    padding:10
  },
  boton:{
    width:'33%'
  },
  update:{
    width:'33%'
  },
  delete:{
    width:'33'
  }
})