import showproducttodash from "./showProductToDash";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    showproductdata: showproducttodash
})

export default rootReducer;