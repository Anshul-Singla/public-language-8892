import { Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import SignUpFormIndividual from "./SignUpFormIndividual";
import SignUpFormShop from "./SignUpFormShop";

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={ <Home/>  }         />
            <Route path='/join' element={<SignUpFormIndividual/>}/>
            <Route path='/joinshop' element={<SignUpFormShop/>}/>
        </Routes>
    )
}
export default AllRoutes;