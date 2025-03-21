import { createContext,useContext,useState } from "react";

const CategoriaContext =createContext();

export const CategoriaListContext = createContext()

export function useCategoria() {
  const value = useContext(CategoriaContext);
  return value;
}

export function CategoriaProvider({children}){
  const [categoria, setCategoria] = useState(null);  // El estado de la categoria
  return(
    <CategoriaContext.Provider
      value={{categoria,setCategoria}}>
      {children}
    </CategoriaContext.Provider>
  )
}