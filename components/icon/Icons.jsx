import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';

export function InventoryIcon({color}){
    return(<MaterialIcons name="inventory" size={24} color={color} />)
}

export function CheckIcon({color}){
    return(<AntDesign name="checkcircle" size={24} color={color} />)
}

export function DeleteIcon({color ="black"}){
    return(<MaterialIcons name="delete" size={24} color={color} />)
}

export function UpdateIcon({color ="black"}){
    return(<Feather name="edit" size={24} color={color} />)
}

export function ClientIcon({color}){
    return(<Fontisto name="person" size={24} color={color} />)
}
export function LogOutIcon({color}){
    return(<Entypo name="log-out" size={24} color={color} />)
}

