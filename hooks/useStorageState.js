import  { useEffect, useCallback, useReducer } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useState } from 'react';

export async function setStorageItemAsync(key,value) {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key,JSON.stringify( value));
    }
}


export function useStorageState(key) {
  const [state, setState] = useState([true, null]);

  // Obtener el valor del SecureStore
  useEffect(() => {
        SecureStore.getItemAsync(key).then(value => {
          const parsedValue = value ? JSON.parse(value) : null; // Convertir de JSON
          if (parsedValue) {
            setState([false, parsedValue]);  
          } else {
            setState([false, null]); // Token no encontrado
          }
        })
  }, [key]);
  const setValue = useCallback(
    (value) => {
     
      setState([false, value]);  // Actualizar el estado
      setStorageItemAsync(key,value)
    },
    [key]
  );

  return [state, setValue];
}



