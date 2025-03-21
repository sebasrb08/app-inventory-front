import {createContext,useContext ,useState} from 'react'

export const  detalleContext = createContext()

export function useDetalle(){
    const value = useContext(detalleContext);
    return value;
}


export function DetalleProductoProvider({children}){
    const [detalle, setDetalle] = useState([]);  
    return(
      <detalleContext.Provider
        value={{detalle,setDetalle}}>
        {children}
      </detalleContext.Provider>
    )
}
