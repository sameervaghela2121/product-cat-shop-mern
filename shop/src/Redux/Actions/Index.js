import { PRODUCT_FETCH_REQUEST, PRODUCT_FETCH_SUCCESS } from '../Constants/productConstants';
import axios from "axios";

const showproductdash = (products) => {
    return {
        type: PRODUCT_FETCH_SUCCESS,
        payload: products
    }
}

export const fetchproductact = () => {
    console.log('In fetchproductact')
    return (dispatch) => {
        axios.get("/product")
        .then(response=>{
            const products = response.data;
            console.log("Getting api response in redux action",products)
            dispatch(showproductdash(products))
        })
        .catch((error)=>console.log(Error))
    }
}