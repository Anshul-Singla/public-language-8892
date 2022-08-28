import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {Navigate, useNavigate} from 'react-router-dom'

function PrivateRoute({children}){
    const navigate = useNavigate()
    const {state} = useContext(AppContext);
    console.log(state);
    // const navigate = useN
    if(!state.isAuth ){
        return  (   <Navigate to='/join'/>)
    }else{
        return children
    }

}
export default PrivateRoute;