import { Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import MealDealPage from "./MealDealPage";
import SignUpPage from "./SignUpPage";

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={ <Home/>  }         />
            <Route path='/join' element={<SignUpPage/>}/>
            <Route path='/mealdeal' element={<MealDealPage/>}/>
        </Routes>
    )
}
export default AllRoutes;