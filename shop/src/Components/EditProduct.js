import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { getProductById, updateProductById } from "../Redux/Actions/Index";
import { useDispatch, useSelector } from 'react-redux';

const EditProduct = () => {
    const productId = useParams();
    // const object = JSON.stringify(productId);
    // console.log("OBJECT PROBLEm",object)
    console.log("This is product id: ",productId)
    const dispatch = useDispatch();
    const [ename, setEname] = useState("");
    const [edesc, setEdesc] = useState("");
    const [eprice, setEprice] = useState("");
    const [ecategory, setEcategory] = useState("");
    const [eimg, setEimg] = useState("");
    const showproductbyidsele = useSelector((state) => state.showproductbyid.productweget);
    const showupdatedpro = useSelector(state => state.updateproductbyid.up);
    console.log("UPDATED PRODUCT SELECTOR: ",showupdatedpro);
    const history = useHistory();
    // console.log("UseSelector",showproductbyidsele);

    useEffect(async() => {
        await dispatch(getProductById(productId));
        console.log("This is executing now")
        // setEname(showproductbyidsele.pname);
        // setEdesc(showproductbyidsele.pdesc);
        // setEprice(showproductbyidsele.pprice);
        // setEimg(showproductbyidsele.pimg);
    }, [])

    useEffect(async() => {
        if(showproductbyidsele){
            console.log("HEHEHEHEH");
            setEname(showproductbyidsele.pname);
            setEdesc(showproductbyidsele.pdesc);
            setEprice(showproductbyidsele.pprice);
            setEimg(showproductbyidsele.pimg);
            // setEcategory
        }
        else{
            alert("Product Data Not Available!")
        }
    }, [showproductbyidsele])

    const onUpdateProduct = (e) => {
        e.preventDefault();
        console.log("FORM REQ TO UPDATE: ",ename,edesc,eprice,eimg,ecategory)
        if(!ename && !eimg && !ecategory && !edesc && !eprice){
            alert("Fields Cannot Be Blank!");
        }
        else{
            dispatch(updateProductById(productId,{
                pname:ename,
                pimg:eimg,
                pprice:eprice,
                pdesc:edesc,
                category:ecategory
            }))
            if(!showupdatedpro == [])
            {
                history.push("/listproduct");
                alert("Product Updated Successfully");
            }
        }
    }
    

    return (
        <div>
            {/* <h1>Edit Product Page!</h1> */}
            {/* <p>{showproductbyidsele._id}</p>
            <h1>{showproductbyidsele.pname}</h1>
            <h2>{showproductbyidsele.pdesc}</h2>
            <h3>{showproductbyidsele.pprice}</h3>
            <h4>{showproductbyidsele.category}</h4>
            <h5>{showproductbyidsele.pimg}</h5>     */}

            <h1>Edit {showproductbyidsele.pname} Here!</h1>
            <div className="container my-3">
                <form onSubmit={onUpdateProduct}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name Of Product</label>
                    <input type="text" className="form-control" value={ename} onChange={(e)=>setEname(e.target.value)} id="productname" placeholder="Name Of Product" required="required" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Image Link Of Product</label>
                    <input type="text" className="form-control" value={eimg} onChange={(e)=>setEimg(e.target.value)} id="productimage" placeholder="Image Link Of Product" required="required" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Select Category Of Product</label>
                    <select className="form-select" onChange={(e)=>{setEcategory(e.target.value)}} aria-label="Default select example">
                        <option defaultValue>Select Category</option>
                        <option value="60e84301757a67877bdc5106">Desktop</option>
                        <option value="60e842e4757a67877bdc5102">Laptop</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Descritpion Of Product</label>
                    <input type="textarea" className="form-control" value={edesc} onChange={(e)=>setEdesc(e.target.value)} id="productdescription" placeholder="Descritpion Of Product" required="required" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price Of Product</label>
                    <input type="number" className="form-control" value={eprice} onChange={(e)=>setEprice(e.target.value)} id="productprice" placeholder="Price Of Product" required="required" />
                </div>
                <button type="submit" className="btn btn-primary my-3">Update Product</button>
                </form>
            </div>        
        </div>
    )
}

export default EditProduct
