import { ORDER_SHIPPING_DETAIL_SUCCESS, ORDER_SHIPPING_DETAIL_FAIL } from "../Constants/orderConstants";

export const orderDetailReducer = (state = [],action) => {
    switch(action.type){
        case ORDER_SHIPPING_DETAIL_SUCCESS:
            return {
                sd: action.payload,
            }
        case ORDER_SHIPPING_DETAIL_FAIL:
            console.log("Fetching Order Detail Failed!");
        break;
        default : return state
    }
}