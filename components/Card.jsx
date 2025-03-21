import { Link } from "expo-router";
import { View,Text,Pressable,StyleSheet } from "react-native";

export function Card({item}){

    const handleClickAdd = () => {
        
    }
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.info}>{item.info}</Text>
            <Link href={item.add} asChild>
                <Pressable style={styles.buttonAgregar} >
                    <Text style={styles.textButton}>Agregar {item.title}</Text>
                </Pressable>
            </Link>
            <Link href={item.show} asChild>
                <Pressable style={styles.buttonGestionar}>
                    <Text style={styles.textButton}>Gestionar {item.title}</Text>
                </Pressable>    
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#f0f0f0',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    info: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonAgregar: {
        backgroundColor: '#21BDCA',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    buttonGestionar: {
        backgroundColor: '#FFA500',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
