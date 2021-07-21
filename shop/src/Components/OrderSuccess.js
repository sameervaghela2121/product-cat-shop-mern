import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import "./OrderSuccess.css";
import { useHistory } from "react-router-dom";

const OrderSuccess = () => {
    var text,od;
    const history = useHistory();
    const orderDetailSelec = useSelector(state => state.orderDetail.sd);
    const cartSelec = useSelector(state => state.addToCartReducer.cartItems);
    if(orderDetailSelec && cartSelec){
        text = <h1>Order Placed Successfully!</h1>
        od = <h4>Name:{orderDetailSelec.name} <br/> Email:{orderDetailSelec.email} <br/>Phone:{orderDetailSelec.phone} <br/>
        Your Shipping address is {orderDetailSelec.address} </h4>
    }else{
        text = <h1>Unable To Place Order!</h1>
    }

    useEffect(() => {
        if(!orderDetailSelec){
            history.push("/")
        }
    }, [history,orderDetailSelec])

    return (
        <div>
            {text}
            <div className="main">
                <div style={{"display":"inline-flex"}}>
                    <div className="border rounded border-warning" style={{"height":"500px","width":"500px  "}}>
                        <h1 className="order-summary">Order Summary!</h1>
                        {od}
                        <div className="container">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                        
                        {cartSelec? (
                            cartSelec.map((pdata) => {
                                return (
                                    <tr key={pdata._id}>
                                        <td>{pdata.pname}</td>
                                        <td>{pdata.pprice}</td>
                                    </tr>
                                    
                                
                                )
                            })):<h1>No Product Available In Cart!</h1>
                        }
                        <thead>
                            <tr>
                                <th>Total Price:</th>
                                <th>{orderDetailSelec.total}</th>
                            </tr>
                        </thead>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default OrderSuccess
