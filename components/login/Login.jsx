import { Pressable, Text, View , StyleSheet,TextInput } from 'react-native'
import { useState,useEffect } from 'react';
import { useSession } from '../../Contexto/Context';
import { Link, useRouter } from 'expo-router';
export  function LoginComponent()   {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");  

  const router = useRouter()

  const {signIn} = useSession()

  const handleSignIn = async () => {
    try {

      await signIn({username,password});
      router.replace('/')
    } catch (error) {
      Alert.alert("Error ", error.message);
      }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>INVENTORY</Text>
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
      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
      <View style={styles.registrar}>
        <Link href="/register" asChild>
            <Text >¿No estás registrado? <Text style={styles.link_registro}>Registrate aquí</Text></Text>
        </Link>
      </View>
      </View>
    </View>
  );
}
    
const styles = StyleSheet.create({
      container: {
        flex:1,
        padding: 20,
      },
      title_container:{
        height:'35%',
        justifyContent:'center',
        alignItems:'center'
        
      },
      form_container:{
        height:'65%',
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
        marginVertical: 10,
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

