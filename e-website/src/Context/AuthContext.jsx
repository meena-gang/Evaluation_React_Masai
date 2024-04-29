import { createContext, useState } from "react";

export const authContext = createContext();

export function AuthContextProvider({children}){

    const[auth,setAuth] = useState(false);

   return  <authContext.Provider value={{auth, setAuth}}>
            {children}
            </authContext.Provider>
}



