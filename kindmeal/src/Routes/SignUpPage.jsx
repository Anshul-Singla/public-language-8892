import Footer from "../components/footer";
import Header from "../components/header";
import { SignUpBodyCard } from "../components/SignupForm";
import SignUpFormIndividual from '../components/SignUpFormIndividual';
import SignUpFormShop from "../components/SignUpFormShop";
import { Flex,Box } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Actions from "../context/actionCreator";


function SignUpPage(){
    const {state,dispatch} = useContext(AppContext);
    // console.log(state)
    const cardFirstProps={
        src:'https://www.kindmeal.my/images/join_normal.png',
        text:'Food Lover Sign Up',
        
    }
    const cardSecondProps={
        src:'https://www.kindmeal.my/images/join_shop.png',
        text:'Restaurant Sign Up'
    }
    const cardThirdProps= {
        type : 'list',
        heading:'Why KindMeal?',
        list:[ 'Exclusive meat-free deals','Share yummy food moments','Meet friendly food lovers',' Discover cool restaurants','Email updates on tasty deals','Instant coupons & dining','No upfront payment, booking or printing']
    }
    return (
        <div>
            <Header/>
            <Flex  w='90vw' margin='20px  auto' >
                <Box>
                    <SignUpBodyCard props={cardFirstProps} dispatchFunction={()=>{dispatch({type:Actions.INDIVIDUAL_TRUE})}} />
                    <SignUpBodyCard props={cardSecondProps} dispatchFunction={()=>{dispatch({type:Actions.INDIVIDUAL_false})}}  />
                    <SignUpBodyCard props={cardThirdProps} />
                </Box>
                {
                    state.isIndividualSignUp?<SignUpFormIndividual/> :<SignUpFormShop/>
                }
                
            </Flex>
            <Footer/>

        </div>
    )
}
export default SignUpPage;