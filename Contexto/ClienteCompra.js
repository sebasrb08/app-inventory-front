import { createContext,useState,useContext } from "react";
const ClienteCompraContext = createContext()


export function useClienteCompra() {
    const value = useContext(ClienteCompraContext);
    return value;
  }

export function ClienteCompraProvider({children}){
    const [clienteCompra, setClienteCompra] = useState(null);  
    return(
      <ClienteCompraContext.Provider
        value={{clienteCompra,setClienteCompra}}>
        {children}
      </ClienteCompraContext.Provider>
    )
}