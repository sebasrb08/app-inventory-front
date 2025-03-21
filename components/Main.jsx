import { Text, View, FlatList,StyleSheet } from 'react-native'
import { Screen } from './Screen'
import { Card } from './Card'
import { data } from '../service/Data'
export function  Main(){
    return (
        <Screen>
            <View style={styles.container}>
            <FlatList data={data}
            renderItem={({item})=> <Card item={item} />}
            keyExtractor={item => item.id}
             >

            </FlatList>
            </View>
        </Screen>
    )
  
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        
    }
})