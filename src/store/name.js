import { createContext,useContext,useState,useEffect } from "react";

export const nameContext = createContext('')

export default function Namec({children}){
const [name,setName] = useState()
    return(
<nameContext.Provider value={{name,setName}}>
    {children}
</nameContext.Provider>
    )
}
