import { PRODUCT_FETCH_SUCCESS, PRODUCT_FETCH_FAIL, FETCH_PRODUCT_BY_ID_SUCCESS, FETCH_PRODUCT_BY_ID_FAIL, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL,  DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL } from "../Constants/productConstants"
const initialState = {
    products:[]
}
const idinitialState = {
    productweget:[]
}
const updateinitialState = {
    up : []
}

const deleteinitialState = {
    dp : []
}

export const showproducttodash = (state = initialState,action) => {
    switch(action.type){
        case PRODUCT_FETCH_SUCCESS:
            // console.log("In showproducttodash reducer")
            return {
                products:action.payload,
            }
            // console.log(datas)
        case PRODUCT_FETCH_FAIL:
            console.log("Reducer Saying Product Fetch Fail!")
            alert("No Product Available")
            
        
        default : return state;
    }
}
// console.log("initialState",initialState)

export const showProductByIdReducer = (state=idinitialState,action) => {
    switch(action.type){
        case FETCH_PRODUCT_BY_ID_SUCCESS:
            // console.log("In showProductByIdReducer");
            return {
                productweget: action.payload,
            }
        
        case FETCH_PRODUCT_BY_ID_FAIL:
            console.log("Reducer Says ProductFetchById Failed")
            
        default : return state;
    }
}


export const updateProductByIdReducer = (state=updateinitialState,action) => {
    switch(action.type){
        case UPDATE_PRODUCT_SUCCESS:
            return {
                up: action.payload,
            }

        case UPDATE_PRODUCT_FAIL:
            console.log("Updating Product Failed!!")

        default : return state;
    }
}

export const deleteProductByIdReducer = (state=deleteinitialState,action) => {
    switch(action.type){
        case DELETE_PRODUCT_SUCCESS:
            return {
                dp:action.payload,
            }
        
        case DELETE_PRODUCT_FAIL:
            console.log("Deleting Product Failed!!")

        default : return state;
    }
}

// export default showproducttodash;