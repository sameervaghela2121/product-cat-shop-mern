import { showproducttodash, showProductByIdReducer, updateProductByIdReducer, deleteProductByIdReducer } from "./showProductToDash";
import { registerUserReducer, loginUserReducer } from "./userReducer";
import { addToCartReducer } from "./cartReducer";
import { orderDetailReducer } from "./orderReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    showproductdata: showproducttodash,
    showproductbyid: showProductByIdReducer,
    updateproductbyid: updateProductByIdReducer,
    deleteproductbyid: deleteProductByIdReducer,
    registerUser: registerUserReducer,
    loginUser: loginUserReducer,
    addToCartReducer: addToCartReducer,
    orderDetail: orderDetailReducer,
})

export default rootReducer;