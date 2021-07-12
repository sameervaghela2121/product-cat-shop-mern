import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
import './ShowProduct.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchproductact } from '../Redux/Actions/Index';
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";


const ShowProduct = () => {
    const [fdata, setFdata] = useState([]);
    const dispatch = useDispatch();
    const showproducttodash = useSelector((state) => state.showproductdata.products)
    console.log("UseSelectorHook",showproducttodash)
    let history = useHistory();
    
    // console.log("Type of pd",typeof(showproducttodash))
    
    const fetch = async() => {
        // const response = await axios.get("/product")
        // console.log(response.data)
        // setFdata(response.data)
        dispatch(fetchproductact())
    }
    const productId = useParams();
    console.log("Params",productId)
    const showdetail = (f) => {
        console.log(f)
        // const sam = showproducttodash.filter(function(g){
        //     return g._id === f 
        // })
        // console.log("Sam here",sam)
        // history.push(`/product/${f}`)

    }

    
    return (
        <div>
            <button className="btn btn-warning" onClick={fetch}>Show Product</button><br />
            {/* {(showproducttodash)?<h2>Here is data</h2>:<h2>Here is No data</h2>} */}
            <div className="main-container my-3" style={{"display":"flex"}}>
            {
                showproducttodash?.map((pdata)=>{
                    return(
                        <div key={pdata._id}>
                        <Link to={`/product/${pdata._id}`}>
                        <div className="container" key={pdata._id}>
                            <div className="card" style={{"width": "18rem"}}>
                            <img src={pdata.pimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{pdata.pname}</h5>
                                <p className="card-text">{pdata.pdesc}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{pdata.pprice}</li>
                            </ul>
                            <div className="card-body">
                                <p><strong>Category:</strong>{pdata.category.category}</p>
                                <button className="btn btn-info">Product Id: {pdata._id}</button>
                            </div>
                            </div>
                            <br/>
                        </div>
                        </Link>
                        </div>
                    )
                    })
            }</div>
            
        </div>
    )
}

export default ShowProduct























{/* <div>
            <button className="btn btn-warning" onClick={fetch}>Show Product</button><br />
            <div className="main-container my-3" style={{"display":"flex"}}>
            {
                fdata.map((pdata)=>{
                    return(
                        <div className="container" key={pdata._id}>
                            <div className="card" style={{"width": "18rem"}}>
                            <img src={pdata.pimg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{pdata.pname}</h5>
                                <p className="card-text">{pdata.pdesc}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{pdata.pprice}</li>
                            </ul>
                            <div className="card-body">
                                <p><strong>Category:</strong>{pdata.category.category}</p>
                                <button className="btn btn-info">Product Id: {pdata._id}</button>
                            </div>
                            </div><br/>
                        </div>
                    )
                    })
            }</div>
            
        </div> */}