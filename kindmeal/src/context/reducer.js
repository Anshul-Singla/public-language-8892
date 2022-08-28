import Actions from "./actionCreator";

function reducer(state,action){
    switch(action.type){
        case Actions.INDIVIDUAL_TRUE:{
            return {
                ...state , isIndividualSignUp:true,isShopSignUp:false
            }
        }
        case Actions.INDIVIDUAL_false:{
            return {
                ...state , isShopSignUp:true, isIndividualSignUp:false
            }
        }
        case Actions.LOGIN_USER:{
            return{
                ...state , isAuth:true,
            }
        }
        case Actions.LOGOUT_USER:{
            return{
                ...state , isAuth:false,
            }
        }
        default :{
            return state;
        }
    }

}
export default reducer;