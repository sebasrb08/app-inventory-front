import { Text, View ,Pressable} from 'react-native'
import { DeleteIcon } from '../icon/Icons'
import { deleteCategoria } from '../../service/CategoriaService'
import { useCategoria } from '../../Contexto/CategoriaContext'
import { useContext } from 'react'
import { CategoriaListContext } from '../../Contexto/CategoriaContext'
export function DeleteCategoria ({items})  {
    const {categoria,setCategoria}=useContext(CategoriaListContext);

    const deleteClick= async()=>{
        const response = await deleteCategoria(items.id,items.session)
        setCategoria(prevCategoria=>prevCategoria.filter((element)=>element.id !== items.id))
    }
    return (
        <Pressable style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1, 
            },
          ]} onPress={deleteClick}>
            <DeleteIcon />
        </Pressable>
    )
}