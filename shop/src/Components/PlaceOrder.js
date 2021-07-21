import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartAction } from '../Redux/Actions/cartActions';
import { orderDetailAction } from "../Redux/Actions/orderActions";
import { useHistory } from "react-router-dom";

const PlaceOrder = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const cartSelec = useSelector(state => state.addToCartReducer.cartItems);
    const [newSum, setNewSum] = useState(0);
    var sum = 0;

    const removeFromCart = (e) => {
        // console.log("Remove From Cart: ",e);
        dispatch(removeFromCartAction(e));

    }

    const placeOrderClicked = (e) => {
        e.preventDefault();
        console.log("Place Order Clicked!");
        dispatch(orderDetailAction({
            name:name,
            email:email,
            phone:phone,
            address:address,
            total:newSum
        }))
        history.push("/ordersuccess")
    }

    useEffect(() => {
        for(var i in cartSelec){
            sum += cartSelec[i].pprice;
        }
        console.log("GETTING TOTAL: ",sum);
        setNewSum(sum);
        if(sum<10 && sum!=0){
            setNewSum(sum + 5)
        }
        
    }, [cartSelec])


    // console.log("Place ORder Page: ",cartSelec)
    return (
        <div>
            <h1>Place Order!</h1>
            <div className="row">
                <div className="col">
                <h4>Enter Shipping Details</h4>
                <form onSubmit={placeOrderClicked} style={{"display":"inline-table","width":"500px"}}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" value={name} name="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email Address</label>
                        <input type="email" className="form-control" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Phone</label>
                        <input type="number" className="form-control" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone Number" autoComplete="on"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input type="text" className="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Address" autoComplete="on"/>
                    </div>
                <button type="submit" className="btn btn-warning my-3">Place Order</button>
                </form>
                </div>
                {/* Second Column Code Starts Here! */}
                <div className="col">
                <h4>Product Details</h4>
                <table className="table table-hover table-bordered" style={{"display":"inline-table","width":"500px"}}>
            <thead>
                <tr>
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
                    <th colSpan="2">Total + Shipping:</th>
                    <th colSpan="2">{newSum}</th>
                </tr>
            </thead>
            
            </table>
                </div>

            </div>
        </div>
    )
}

export default PlaceOrder
