import { Text } from "react-native";
import { useSession } from "../../../Contexto/Context";
import { useEffect } from "react";


export default function SignOut(){
    const {signOut}=useSession();
    useEffect(()=>{
        signOut();
    },[])
    return(
        <Text>SignOut</Text>
    )
}