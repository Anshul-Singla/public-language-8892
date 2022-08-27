import React from "react";
import { useReducer } from "react";
import reducer from "./reducer";

export const AppContext = React.createContext();

const initialState={
    isIndividualSignUp:true,
    isShopSignUp:false,
}
function AppContextProvider( {children} ){
    const [state,dispatch] = useReducer(reducer , initialState);
    return (
        <AppContext.Provider value={{state,dispatch}}  >
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;