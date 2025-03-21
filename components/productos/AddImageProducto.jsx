import { Text,Image, View,Pressable,StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { useState,useEffect } from 'react';

export function  AddImageProducto({selectedImage,setSelectedImage})   {
    const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled) {
        console.log(result.assets[0].uri)
        setSelectedImage(result.assets[0].uri);
      } else {
        alert('You did not select any image.');
      }
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={pickImageAsync}>
              {selectedImage ==null?(<Text style={{color:'white'}}>Elige una imagen</Text>):( <Image source={{uri:selectedImage}} style={styles.image} />)}
            </Pressable>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom:20
    },
    button: {
      height:150,
      width:150,
      backgroundColor:'gray',
      borderRadius:8,
      justifyContent:'center',
      alignItems:'center'
    },
    image:{
      height:150,
      width:150,
      borderRadius:8
    }

  });