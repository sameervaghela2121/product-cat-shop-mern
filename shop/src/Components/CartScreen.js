import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartAction } from '../Redux/Actions/cartActions';
import { useHistory } from "react-router-dom";

const CartScreen = () => {
    const dispatch = useDispatch();
    const cartSelec = useSelector(state => state.addToCartReducer.cartItems);
    const cartSelec1 = useSelector(state => state.addToCartReducer);
    const history = useHistory();

    console.log(cartSelec);
    var sam;
    console.log(cartSelec.pprice);
    // const [totalPrice, setTotalPrice] = useState([]);
    const [newSum, setNewSum] = useState(0);
    var sum = 0;
    
    
    const removeFromCart = (e) => {
        // console.log("Remove From Cart: ",e);
        dispatch(removeFromCartAction(e));

    }

    const placeOrderBtn = (e) => {
        console.log("Place Order Button Clicked");
        history.push("/placeorder");
    }

    useEffect(() => {
        for(var i in cartSelec){
            sum += cartSelec[i].pprice;
        }
        console.log("GETTING TOTAL: ",sum);
        setNewSum(sum);
    }, [cartSelec])


    return (
        <div className="container my-3">
            <h1>Cart!</h1>
            <table className="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {cartSelec? (
                cartSelec.map((pdata) => {
                    return (
                        <tr key={pdata._id}>
                            <th scope="row">{pdata._id}</th>
                            <td className="col-1">{pdata.pname}</td>
                            <td><img src={pdata.pimg} style={{"height":"150px","width":"150px"}} alt={pdata.pname}/></td>
                            <td>{pdata.pprice}</td>
                            <td><button className="btn btn-danger" onClick={(e)=>{removeFromCart(pdata._id)}}>Remove</button></td>
                        </tr>
                        
                    
                    )
                })):<h1>No Product Available In Cart!</h1>
            }
            </tbody>
            <thead>
                <tr>
                    <th className="col-6">Total: {newSum}</th>
                    <th><button className="btn btn-warning" onClick={(e)=>{placeOrderBtn()}}>Place Order</button></th>
                </tr>
            </thead>
            
            </table>

        </div>
    )
}

export default CartScreen
