import { Text, View,StyleSheet,Pressable,TextInput,ScrollView } from 'react-native'
import { Screen } from '../Screen'
import { useSession } from '../../Contexto/Context';
import { useCliente } from '../../Contexto/ClienteContext';
import { saveClient } from '../../service/ClienteService';
import { useState } from 'react';
import { router } from 'expo-router';
export function AgregarCliente() {
    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [telefono, setTelefono] = useState(""); 
    const { session } = useSession();
    const {cliente,setCliente}=useCliente()

    const handleClick=async ()=>{
        let client={nombre:nombre,apellido:apellido,email:email,telefono:telefono}
        const cliente2 = await saveClient({client,session})
        setCliente([
            ...cliente,
            {
            id:cliente2.id,
            nombre:cliente2.nombre,
            apellido:cliente2.apellido,
            email:cliente2.email,
            telefono:cliente2.telefono,

            }
          ]);
        router.back()
    }

    return (
        <Screen>
            <ScrollView>
                <View style={styles.textView}>
                    <Text style={styles.text}>Agregar Cliente</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Apellido'
                    value={apellido}
                    onChangeText={setApellido}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}

                />
                <TextInput
                    style={styles.input}
                    placeholder='Telefono'
                    value={telefono}
                    onChangeText={setTelefono}

                />
        
                <View>
                    <Pressable style={styles.button} onPress={handleClick}>
                        <Text style={styles.textGuardar}>Guardar</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    textView:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:30
    },
    text:{
        fontWeight:'bold',
        fontSize:30
    },
    input: {
        height: 56,
        width:'100%',
        marginVertical: 10,
        borderWidth: 1,
        borderRadius:8,
        paddingHorizontal: 10,
        justifyContent:'center'
      },
      button: {
      height: 56,
      width:'100%',
      padding: 10,
      borderRadius:8,
      backgroundColor: "#21BDCA",
      alignItems: "center",
      justifyContent:'center',
      marginVertical: 10,
    },
    textButton:{
        fontWeight:'600',
        
    },
    textGuardar:{
        fontWeight:'600',
        color:'white'
    }
})