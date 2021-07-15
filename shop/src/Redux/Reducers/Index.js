import { showproducttodash, showProductByIdReducer, updateProductByIdReducer } from "./showProductToDash";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    showproductdata: showproducttodash,
    showproductbyid: showProductByIdReducer,
    updateproductbyid: updateProductByIdReducer
})

export default rootReducer;