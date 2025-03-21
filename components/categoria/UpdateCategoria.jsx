import { Text, View,Pressable,Modal, StyleSheet, TextInput } from 'react-native'
import { UpdateIcon } from '../icon/Icons'
import { useSession } from '../../Contexto/Context'
import { useContext, useState } from 'react'
import { updateCategoria } from '../../service/CategoriaService'
import { CategoriaListContext } from '../../Contexto/CategoriaContext'
export function UpdateCategoria({items}) {

    const {session} =useSession()
    const [modalVisible, setModalVisible] = useState(false);
    const [nombre, setNombre] = useState("");
    const {setCategoria} =useContext(CategoriaListContext);

    const handleClick=async ()=>{
        const data = await updateCategoria(items.id,nombre,session)
        setCategoria((prevDefault) =>
            prevDefault.map((element) => element.id === items.id ? 
        { ...element, nombre: data.nombre } 
        : element 
            )
          );
        setModalVisible(!modalVisible)
    }
    const updateModel=()=>{
        setNombre(items.nombre)
        setModalVisible(true)
    }
    return (
        <>
                <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <TextInput style={styles.input}
                value={nombre}
                onChangeText={setNombre}
                placeholder='Nombre'
                />

                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={handleClick}>
                    <Text style={styles.textStyle}>Guardar</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonClose,styles.red]}
                    onPress={()=> setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
                </View>
            </View>
            </Modal>
            <Pressable  onPress={updateModel} >
                <UpdateIcon />
            </Pressable>
        </>
    )
  
}

const styles=StyleSheet.create({
    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    width:'80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width:'50%',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom:10
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input:{
        height: 56,
        width:'100%',
        marginVertical: 10,
        borderWidth: 1,
        borderRadius:8,
        paddingHorizontal: 10,
  },
  red:{
    backgroundColor:'red'
  }
});
