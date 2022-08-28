import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Actions from "./actionCreator";
import reducer from "./reducer";

export const AppContext = React.createContext();

const initialState={
    isIndividualSignUp:true,
    isShopSignUp:false,
    isAuth:false,
}
const initialUserData = {
    first_name:'',
    last_name:'',
    email:'',
    username:'',
    DOB:'',
    country:'',
    gender:'',
}

function AppContextProvider( {children} ){
    const [userData , setUserData] = useState(initialUserData);
    const navigate = useNavigate()
    const handleChange = (e)=>{
        const {name:key , value , type , checked} = e.target;
        const val =value;
        setUserData({...userData , [key]:val});
    }
    const handleSubmit = (e)=>{
        e.preventDefault(),
        dispatch({type:Actions.LOGIN_USER}),
        navigate('/mealdeal')

        // <Navigate to='/mealdeal' />
    }
    const [state,dispatch] = useReducer(reducer , initialState);
    const [singleRestaurantData , setSingleRestaurantData] = useState({});
    const handleSetData = (item)=>{
        setSingleRestaurantData(item)
    }
    return (
        <AppContext.Provider value={{state,dispatch , userData , handleChange , handleSubmit }}  >
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;