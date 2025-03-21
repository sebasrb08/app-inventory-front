import { Text, View,Image, StyleSheet } from 'react-native'
import { useState,useEffect } from 'react';
import { useSession } from '../../Contexto/Context';
import { getImage } from '../../service/productoService';

export function GetImage ({items,tamaño = 60}) {
    const {session} =useSession()
    const [image,setImage]=useState(items.image)
    

    return (
        <>
            {!image?<Text>No hay imagen</Text>:( <Image source={{uri:image}} style={{width:tamaño,height:tamaño}}/>)} 
        </>
    )
}

