import { showproducttodash, showProductByIdReducer, updateProductByIdReducer, deleteProductByIdReducer } from "./showProductToDash";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    showproductdata: showproducttodash,
    showproductbyid: showProductByIdReducer,
    updateproductbyid: updateProductByIdReducer,
    deleteproductbyid: deleteProductByIdReducer
})

export default rootReducer;