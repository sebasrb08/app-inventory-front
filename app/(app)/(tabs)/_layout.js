import { Tabs,Redirect } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useSession } from "../../../Contexto/Context";
import { Text,Alert } from "react-native";
import { CheckIcon, ClientIcon, InventoryIcon, LogOutIcon } from "../../../components/icon/Icons";
import { checkTokenExpiration } from "../../../auth/checkTokenExpiration";
import { useEffect } from "react";
export default function TabLayout(){

    const { session, isLoading, signOut} = useSession();
     
    useEffect(() => {
      if (checkTokenExpiration({ session })) {
        Alert.alert(
          "Sesión Expirada",
          "Tu sesión ha expirado, por favor inicia sesión nuevamente"
        );
        signOut(); // Actualiza el estado aquí, fuera del renderizado.
      }
    }, [session]); // Se ejecuta cuando cambia la sesión.

    if (isLoading) {
      return <Text>Loading...</Text>;
    }
  
    if (!session) {
      return <Redirect href="../login" />;
    }



    return(
      <>
        <Tabs screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: '#21BDCA'
        }}>
            <Tabs.Screen
            name="index"
            options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>
            }}/>

            <Tabs.Screen
            name="productos"
            options={{
            title: 'Productos',
            tabBarIcon: ({ color }) => <InventoryIcon color={color}/>
            }}/>

            <Tabs.Screen
            name="cliente"
            options={{
            title: 'Cliente',
            tabBarIcon: ({ color }) => <ClientIcon color={color}/>
            }}/>
            
            <Tabs.Screen
            name="ventas"
            options={{
            title: 'Ventas',
            tabBarIcon: ({ color }) => <CheckIcon color={color}/>
            }}/>

            <Tabs.Screen
            name="sign_out"
            options={{
            title: 'Sign Out',
            tabBarIcon: ({ color }) => <LogOutIcon color={color}/>
            }}/>

        </Tabs>
      </>
    )
}