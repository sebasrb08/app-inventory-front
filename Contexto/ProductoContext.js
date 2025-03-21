import { createContext,useState,useContext } from "react";

const ProductoContext = createContext()

export const ProductByIdContext = createContext({
  producto:null,
  setProducto:()=>{}
})


export function useProducto() {
    const value = useContext(ProductoContext);
    return value;
  }

export function ProductoProvider({children}){
    const [productos, setProductos] = useState(null);  
    return(
      <ProductoContext.Provider
        value={{productos,setProductos}}>
        {children}
      </ProductoContext.Provider>
    )
}

