import { createContext,useState,useContext } from "react";
const ClienteContext = createContext()


export function useCliente() {
    const value = useContext(ClienteContext);
    return value;
  }

export function ClienteProvider({children}){
    const [cliente, setCliente] = useState(null);  
    return(
      <ClienteContext.Provider
        value={{cliente,setCliente}}>
        {children}
      </ClienteContext.Provider>
    )
}