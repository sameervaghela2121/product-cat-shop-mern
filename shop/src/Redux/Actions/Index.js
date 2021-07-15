import { PRODUCT_FETCH_REQUEST, PRODUCT_FETCH_SUCCESS, PRODUCT_FETCH_FAIL, FETCH_PRODUCT_BY_ID_SUCCESS, FETCH_PRODUCT_BY_ID_FAIL, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL } from '../Constants/productConstants';
import axios from "axios";

const showproductdash = (products) => {
    return {
        type: PRODUCT_FETCH_SUCCESS,
        payload: products
    }
}
const showproductfailed = () => {
    return {
        type: PRODUCT_FETCH_FAIL,
        payload: {}
    }
}

export const fetchproductact = () => {
    console.log('In fetchproductact')
    return (dispatch) => {
        axios.get("/product")
        .then(response=>{
            const products = response.data;
            console.log("Getting api response in redux action",products)
            dispatch(showproductdash(products));
        })
        .catch((error)=>{
            // console.log("No Product Available!")
            dispatch(showproductfailed())
            // console.log(error)
        })
    }
}

export const getProductById = (productId) => {
    // console.log("Action getting product by id: ",productId);
    const obj = productId;
    // console.log("Check sam: ",obj.productId)
    return (dispatch) => {
        // console.log("Product id in dispatch: ",obj.productId);  
        axios.get(`/product/${obj.productId}`).then((response)=>{
            const productweget = response.data;
            // console.log("in axios",productId)
            dispatch(showProductById(productweget));
        }).catch((error)=>{
            console.log("NOT GETTING PRODUCT BY ID");
            dispatch(showProductByIdFailed)
        })
    }
}

const showProductById = (productweget) => {
    return {
        type: FETCH_PRODUCT_BY_ID_SUCCESS,
        payload: productweget
    }
}

const showProductByIdFailed = () => {
    console.log("HEHEH");
    return {
        type: FETCH_PRODUCT_BY_ID_FAIL
    }
}


export const updateProductById = (productId,productData) => {
    const obj = productId;
    return (dispatch) => {
        axios.patch(`/product/${obj.productId}/edit`,productData)
        .then((res)=>{
            console.log(res.data)
            dispatch({
                type: UPDATE_PRODUCT_SUCCESS,
                payload: res.data
            })
        })
        .catch((error)=>{
            dispatch({
                type: UPDATE_PRODUCT_FAIL
            })
        })
    }
}