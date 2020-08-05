//Checking for the required action,if action matches then the require state is being changed if needed

import  UserActionTypes  from "./user.types"

const INITIAL_STATE={
    currentUser: null,
    error: null
}

const userReducer =(state=INITIAL_STATE, action) =>{
switch(action.type){
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:     // current user action is found 
    console.log("Reducer logged");
        return{
            ...state,
            currentUser: action.payload, // currentUser data is being changed by the Payload passed from action and set 
            error: null
        }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser:null,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE: // current user action is found 
            return{
                ...state,
                error: action.payload, // currentUser data is being changed by the Payload passed from action and set 
            }
        default:
            return state
}
}

export default userReducer