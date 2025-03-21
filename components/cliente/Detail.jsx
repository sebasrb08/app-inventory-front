import { View,Text,TextInput,StyleSheet,ScrollView,Pressable } from "react-native";
import { Screen } from "../Screen";
import { useState } from "react";
import { useSession } from "../../Contexto/Context";
import { updateClient } from "../../service/ClienteService";
import { useCliente } from "../../Contexto/ClienteContext";
import { router } from "expo-router";
export function DetailClientComponent({item}) {

        const [nombre, setNombre] = useState(item.nombre); 
        const [apellido, setApellido] = useState(item.apellido); 
        const [email, setEmail] = useState(item.email); 
        const [telefono, setTelefono] = useState(item.telefono); 
        const { session } = useSession();
        const {setCliente} = useCliente()

        const  handleClick= async()=>{

            try{ 
                let client={id:item.id,nombre:nombre,apellido:apellido,email:email,telefono:telefono}
                const cliente2 = updateClient({client,session})

                setCliente((prevDefault)=>prevDefault.map((element) => 
                    element.id==item.id?
                    {... element ,nombre:nombre,apellido:apellido,email:email,telefono:telefono}: element
                ))
                router.back()
            }catch(error){
                console.error("Error al actualizar cliente:", error);
                alert("Hubo un problema al guardar los cambios. Inténtalo nuevamente.");
            }
        }

    return (
        <Screen>
            <ScrollView>
                <View style={styles.textView}>
                    <Text style={styles.text}>Cliente</Text>
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
