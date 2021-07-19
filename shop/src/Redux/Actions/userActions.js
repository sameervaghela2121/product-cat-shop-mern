import { USER_REGISTERATION_SUCCESS, USER_REGISTERATION_FAIL, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL } from "../Constants/userConstants";
import axios from "axios";

export const registerUserAction = (reguser) => {
    console.log("In Register User Action");
    return (dispatch) => {
        axios.post("/user",reguser)
        .then((res)=>{
            // console.log("Response of Reg: ",res.data);
            dispatch({
                type: USER_REGISTERATION_SUCCESS,
                payload: res.data
            })
        })
        .catch((error)=>{
            dispatch({
                type:USER_REGISTERATION_FAIL
            })
        })
    }
}

export const loginUserAction = (loguser) => {
    console.log("In Login User Action");
    return (dispatch) => {
        axios.post("/user/login",loguser)
        .then((res)=>{
            // console.log("Response of Login: ",res.data);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res.data
            })
            localStorage.setItem('token',res.data.token);
            // localStorage.setItem('user',res.data.user);
            localStorage.setItem('name',res.data.name);
            // localStorage.setItem('')
        })
        .catch((error)=>{
            dispatch({
                type: USER_LOGIN_FAIL
            })
        })
    }
}

export const logoutUserAction = () => {
    // console.log("In Logout User Action");
    return (dispatch) => {
        try {
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("address");
            dispatch({
                type: USER_LOGOUT_SUCCESS,
                // payload: null
            })
        } catch (error) {
            dispatch({
                type: USER_LOGOUT_FAIL,
            })
        }
    }
}