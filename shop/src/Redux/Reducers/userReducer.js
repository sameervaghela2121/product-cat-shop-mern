import { USER_REGISTERATION_SUCCESS, USER_REGISTERATION_FAIL, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL } from "../Constants/userConstants";

// const initialLoginState = {
//     luser:[]
// }
// const initialRegState = {
//     ruser:[]
// }

export const registerUserReducer = (state={},action) => {
    switch(action.type){
        case USER_REGISTERATION_SUCCESS:
            return {
                ruser: action.payload,
            }
        case USER_REGISTERATION_FAIL:
            console.log("Registeration Failed");

        default : return state;
    }
}

export const loginUserReducer = (state={},action) => {
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return {
                luser: action.payload,
            }
        case USER_LOGIN_FAIL:
            console.log("Loggin Failed");

        case USER_LOGOUT_SUCCESS:
            return {
                // luser: action.payload
            }

        default : return state;
    }
}
