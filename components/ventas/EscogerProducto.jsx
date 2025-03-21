import { Pressable, StyleSheet, Text, View,Animated } from 'react-native'
import { useDetalle } from '../../Contexto/DetalleProducto'
import { useEffect,useRef } from 'react'
export function EscogerProducto ({items}) {

    const {detalle,setDetalle} = useDetalle()
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const opacityAnim = useRef(new Animated.Value(1)).current;
    const isDisabled = items.cantidad <= 0;

    const handleClick = () => {

        Animated.parallel([
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 0.95,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ]),
            Animated.sequence([
                Animated.timing(opacityAnim, {
                    toValue: 0.7,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();

        setDetalle((prevDetalle) => {
            const itemIndex = prevDetalle.findIndex((detalleItem) => detalleItem.id_producto === items.id);
            if (itemIndex !== -1) {
                // Si el elemento ya existe, actualiza su cantidad
                const updatedDetalle = [...prevDetalle];
                updatedDetalle[itemIndex].cantidad += 1;
                return updatedDetalle;
            } else {
                // Si el elemento no existe, añádelo a la lista
                return [
                    ...prevDetalle,
                    {
                        id_producto: items.id,
                        nombre_producto: items.nombre,
                        precio_producto: items.precio,
                        cantidad: 1,
                    },
                ];
            }
        });
        
    }


    return (
            <Pressable onPress={handleClick} disabled={isDisabled} > 
                <Animated.View style={[styles.model, 
                    { 
                        transform: [{ scale: scaleAnim }],
                        opacity: isDisabled? 0.7: opacityAnim 
                    }
                ]}>
                    <Text style={styles.text}>{items.nombre}</Text>
                    <Text style={styles.text}>{items.precio}</Text>
                </Animated.View>
            </Pressable>
    )
}
const styles =StyleSheet.create({
    model:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        padding: 10,
        backgroundColor:'#21BDCA',
        borderRadius:8,
        marginEnd:15
    },
    modelClick:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        padding: 10,
        backgroundColor:'red',
        borderRadius:8,
        marginEnd:15
    },
    text:{
        color:'#FFF',
        fontWeight:'bold',
        textAlign:'center'
    }
})