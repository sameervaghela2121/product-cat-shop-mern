import { ORDER_SHIPPING_DETAIL_SUCCESS, ORDER_SHIPPING_DETAIL_FAIL } from "../Constants/orderConstants";

export const orderDetailAction = (ud) => {
    console.log("In OrderDetail Action");
    return (dispatch) => {
        try {
            dispatch({
                type: ORDER_SHIPPING_DETAIL_SUCCESS,
                payload: ud
            })
        } catch (error) {
            dispatch({
                type: ORDER_SHIPPING_DETAIL_FAIL,
            })
            
        }
    }
}