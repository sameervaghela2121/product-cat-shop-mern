import { PRODUCT_FETCH_SUCCESS } from "../Constants/productConstants"
const initialState = {
    products:[]
}

const showproducttodash = (state = initialState,action) => {
    switch(action.type){
        case PRODUCT_FETCH_SUCCESS:
            console.log("In showproducttodash reducer")
            return {
                products:action.payload,
            }
            // console.log(datas)
        
        default : return state;
    }
}
// console.log("initialState",initialState)
export default showproducttodash;


//This is sample inititalState

// const initialState = {
//     products:[
//         {
//             id:1,
//             ptitle:"Sameer",
//             pimg:"PIMG",
//             pdesc:"Descriptiion",
//             category:"Category of product"
//         }
//     ]
// }
