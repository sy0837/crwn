//Checking for the required action,if action matches then the require state is being changed if needed

import { UserActionTypes } from "./user.types"

const INITIAL_STATE={
    currentUser: null
}

const userReducer =(state=INITIAL_STATE, action) =>{
switch(action.type){
    case UserActionTypes.SET_CURRENT_USER: // current user action is found 
        return{
            ...state,
            currentUser: action.payload // currentUser data is being changed by the Payload passed from action and set 
        }
        default:
            return state
}
}

export default userReducer