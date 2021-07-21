import React from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import './SingleProduct.css';
import { useDispatch } from 'react-redux';
import { addToCartAction } from "../Redux/Actions/cartActions";


const SingleProduct = () => {
    const {productId} = useParams();
    console.log("Id of object",productId)
    const showproducttodash = useSelector((state) => state.showproductdata.products);
    const dispatch = useDispatch();

    const sp = showproducttodash.filter(function(para1){
        return para1._id === productId
    })
    // console.log(sp)

    const addtoCart = (e) => {
        console.log("This product is added to cart! ",e);
        dispatch(addToCartAction(e));
        
    }



    return (
        <div>
            {/* <h1>Single Product Page</h1> */}
            <div className="d-flex justify-content-center container mt-5">
            <div className="card p-3 bg-white"><i className="fa fa-apple"></i>
                <div className="about-product text-center mt-2" ><img className="img-class" src={sp[0].pimg} width="300" alt={sp[0].pname}/>
                    <div>
                        <h4>{sp[0].pname}</h4>
                        <h6 className="mt-0 text-black-50">{sp[0].pdesc}</h6>
                    </div>
                </div>
                <div className="stats mt-2">
                    <div className="d-flex justify-content-between p-price"><span>Category</span><span>{sp[0].category.category}</span></div>
                    {/* <div className="d-flex justify-content-between p-price"><span>Pro stand</span><span>$999</span></div>
                    <div className="d-flex justify-content-between p-price"><span>Vesa Mount Adapter</span><span>$199</span></div> */}
                </div>
                <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Total Price</span><span>${sp[0].pprice}</span></div>
                <button className="btn btn-warning" onClick={(e)=>{addtoCart(sp[0]._id)}}>
                        Add to Cart
                </button>
            </div>
        </div>
        </div>
    )
}

export default SingleProduct
