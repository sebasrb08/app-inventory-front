import { createContext,useState,useContext } from "react";

const VentasContext = createContext()


export function useVentas() {
    const value = useContext(VentasContext);
    return value;
  }

export function VentasProvider({children}){
    const [ventas, setVentas] = useState(null);  
    return(
      <VentasContext.Provider
        value={{ventas,setVentas}}>
        {children}
      </VentasContext.Provider>
    )
}

