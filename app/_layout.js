import { Stack } from 'expo-router';
import { Pressable, View } from 'react-native';
import { SessionProvider } from '../Contexto/Context';
import { CategoriaProvider } from '../Contexto/CategoriaContext';
import { ProductoProvider } from '../Contexto/ProductoContext';
import { ClienteProvider } from '../Contexto/ClienteContext';
import { DetalleProductoProvider } from '../Contexto/DetalleProducto';
import { ClienteCompraProvider } from '../Contexto/ClienteCompra';
import { VentasProvider } from '../Contexto/VentasContext';
import { LogOutIcon } from '../components/icon/Icons';
import { useSession } from '../Contexto/Context';
export default function RootLayout(){
    const {signOut,session} = useSession();
    
    return(
        <View style={{flex:1, backgroundColor:"white"}}>
        <SessionProvider>
            <CategoriaProvider>
                <ProductoProvider>
                    <ClienteProvider>
                        <DetalleProductoProvider>
                            <ClienteCompraProvider>
                                <VentasProvider>
                                    <Stack
                                    
                                        screenOptions={{
                                            title: '',
                                            headerStyle: { backgroundColor: '#21BDCA' },        
                                            headerTintColor: '#fff',
                                     
                                        }}

                                    >                                
                                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

                                    </Stack>
                                </VentasProvider>
                            </ClienteCompraProvider>
                        </DetalleProductoProvider>
                    </ClienteProvider>
                </ProductoProvider>
            </CategoriaProvider>
        </SessionProvider>
        </View>
    )
}