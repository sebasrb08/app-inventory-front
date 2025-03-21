import { Text, View,TextInput,Pressable,StyleSheet, Alert, ScrollView } from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { registerService } from '../../service/registerService';
export  function RegisterComponent()   {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [telefono, setTelefono] = useState(""); 
    const router = useRouter()

    const  handleRegister= async()=>{
        try{
            await registerService({username,password,nombre,apellido,email,telefono})
            router.push('/login')

        }catch(error){
            Alert.alert("Error al registrarse",error)
        }
    
    }

    return (
        <View style={styles.container}>
          <ScrollView>

            <View style={styles.title_container}>
                <Text style={styles.title_text}>Registro</Text>
            </View>
            <View style={styles.form_container}>

                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                    <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                    />

                    <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    value={apellido}
                    onChangeText={setApellido}
                    />

                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    />

                    <TextInput
                    style={styles.input}
                    placeholder="Telefono"
                    value={telefono}
                    onChangeText={setTelefono}
                    />

                <Pressable style={styles.button} onPress={handleRegister} >
                    <Text style={styles.buttonText}>Registrar</Text>
                </Pressable>
                
            </View>
          </ScrollView>
        </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      padding: 20,
    },
    title_container:{
      height:'25%',
      justifyContent:'center',
      alignItems:'center'
      
    },
    form_container:{
      height:'75%',
      alignItems:'center'

    },
    title_text:{
      fontWeight:'bold',
      fontSize:45,
      textAlign:'center',
      color:'#21BDCA',

    },

    input: {
      height: 56,
      width:'100%',
      marginVertical: 10,
      borderWidth: 1,
      borderRadius:8,
      paddingHorizontal: 10,
    },
    button: {
      height: 56,
      width:'100%',
      backgroundColor: "#21BDCA",
      padding: 10,
      borderRadius:8,
      alignItems: "center",
      justifyContent:'center',
    },
    buttonText: {
      color: "#FFF",
      fontWeight: "bold",
    },
    registrar:{
      paddingTop:20
    },
    link_registro:{
      color:'#21BDCA',

    }
  });