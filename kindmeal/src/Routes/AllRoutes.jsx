import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import DescriptionMeal from "./DescriptionMeal";
import Home from "./HomePage";
import MealDealPage from "./MealDealPage";
import SignUpPage from "./SignUpPage";

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={ <Home/>  }         />
            <Route path='/join' element={<SignUpPage/>}/>
            <Route path='/mealdeal' element={
                <PrivateRoute>
                    <MealDealPage/>
                </PrivateRoute>
            }/>
            {/* <Route path='/description' element={<DescriptionMeal/>}  /> */}
        </Routes>
    )
}
export default AllRoutes;