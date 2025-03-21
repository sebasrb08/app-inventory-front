import { View } from "react-native";

export function Screen({children}){
    return(
        <View style={{flex:1,height:'100%', backgroundColor:"white" , padding:20}}>
            {children}
        </View>
    )
}