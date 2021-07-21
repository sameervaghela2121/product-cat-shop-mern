import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants/cartConstants";

export const addToCartReducer = (state = { cartItems : [] },action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newItem = action.payload;
            return {
                ...state,
                cartItems:[...state.cartItems,newItem],
            }
        
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter((x)=>x._id !== action.payload)
            }

        default : return state;
    }
}

// export const removeFromCartReducer = (state = { cartItems : [] },action) => {
//     switch(action.type){
//         case REMOVE_FROM_CART:
//             const newItem = action.payload;
//     }
// }