import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function DescriptionMeal(){
    const {data} = useContext(AppContext);
    console.log(data);
    return (
        <h1>Description_Meal...............</h1>
    )
}
export default DescriptionMeal;