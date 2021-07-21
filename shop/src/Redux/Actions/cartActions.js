import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants/cartConstants";

export const addToCartAction = (id) => {
    console.log("In Add to Cart Actions");
    return (dispatch) => {
        axios.get(`/product/${id}`)
        .then((res)=>{
            dispatch({
                type: ADD_TO_CART,
                payload: res.data
            })
        })
        .catch((error)=>{
            dispatch({
                type: ADD_TO_CART
            })
        })
    }
}

export const removeFromCartAction = (id) => {
    console.log("In Remove From Cart Reducer");
    return (dispatch) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id
        })
    }
}