import { Text, View,FlatList, StyleSheet, Pressable } from 'react-native'
import { Screen } from '../Screen'
import { useDetalle } from '../../Contexto/DetalleProducto'
import { ListarDetalles } from './ListarDetalles'
import { useClienteCompra } from '../../Contexto/ClienteCompra'
import { saveDetails } from '../../service/DetalleService'
import { useSession } from '../../Contexto/Context'
import { saveBuy } from '../../service/CompraService'
import { router } from 'expo-router'
import { useVentas } from '../../Contexto/VentasContext'

export  function AgregarVentaComponent () {
    const {detalle,setDetalle}= useDetalle()
    const {session}=useSession()
    const {clienteCompra} = useClienteCompra()

    const {ventas,setVentas}=useVentas([])
    const total = detalle.reduce((acc, item) => acc + item.precio_producto * item.cantidad, 0);


    const handleClick = async () => {
        const detallesGuardados = await Promise.all(
            detalle.map(async (detail) => {
                const detail2 = await saveDetails({ detail, session });
                return detail2;
            })
        )

        const compra = {
            id_cliente: clienteCompra.id,
            detalleProductos: detallesGuardados.map(d => d.id) // Obtener los ids de los detalles guardados
        };        
        const venta= await saveBuy({compra,session})

        setVentas([...ventas,venta])
        setDetalle([])
        router.dismissAll();
    }

    return (
      <Screen>
        <View>
            <FlatList
                data={detalle}
                renderItem={({item}) => (<ListarDetalles items={item}/>)}
                keyExtractor={(item) => item.id_producto}
            />
        </View>
        <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalAmount}>${total.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
        </View>

        <Pressable style={styles.boton} onPress={handleClick}>
            <Text style={styles.botonText}>Finalizar venta</Text>
        </Pressable>
      </Screen>
    )
}

const styles =StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#f8f8f8',
        },
        totalContainer: {
            marginTop: 20,
            padding: 15,
            borderWidth: 1,
            borderColor: '#21BDCA',
            borderRadius: 8,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        totalText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
        },
        totalAmount: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#21BDCA',
        },
        boton:{
            position: 'absolute',
            bottom:20,
            left: 10,
            right: 10,
            backgroundColor: "#21BDCA",
            padding: 10,
            borderRadius:8,
            alignItems: "center",
            justifyContent:'center',
            marginVertical: 10,
        },botonText:{
            color: "#FFF",
            fontWeight: "bold",
            fontSize: 18,
        }
    
})