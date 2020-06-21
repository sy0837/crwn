// To create the action{what to happen and what data to be passed} regarding the user 

import { UserActionTypes } from "./user.types";

export const setCurrentUser = user =>(
    {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
)