import React from 'react';
import axios from "axios"
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import validator from 'validator';

const AddProduct = () => {
    // const showproducttodash = useSelector((state) => state.showproductdata.products)
    const [pname, setPname] = useState("");
    const [pimg, setPimg] = useState("");
    const [category, setCategory] = useState("");
    const [pdesc, setPdesc] = useState("");
    const [pprice, setPprice] = useState("");
    const history = useHistory();
    

    const onAddProduct = (e) => {
        e.preventDefault();
        if(!pname && !pimg && !category && !pdesc && !pprice){
            alert("Fields Cannot Be Blank!");
        }
        else{
            // console.log("Fields are:",pname,pimg,category,pdesc,pprice);
            if(!validator.isURL(pimg)){
                alert("Invalid Image Link!")
            }
            else{
                axios.post("/product",{
                    pname:pname,
                    pimg:pimg,
                    pprice:pprice,
                    pdesc:pdesc,
                    category:category
                })
                alert("Product Added Successfully!")
                history.push("/")
            }
            
        }
    }

    // const checkLink = (e) => {
    //     // e.preventDefault();
    //     // setTempurl(e.target.value)
    //     // var urlexp = /(https:\/\/www\.|http:\/\/www\.|www\.)[a-zA-Z0-9\-_$]+\.[a-zA-Z0-9!_$]+\.[a-zA-Z]{2,5}$/;

    //     // var urlexp = /(https:\/\/|[a-zA-Z0-9]\.|http:\/\/[a-zA-Z0-9]\.|[a-zA-Z0-9]+\.[a-zA-Z0-9]+\.[a-zA-Z0-9]+)/;

    //     // var urlexp = /(https:\/\/|http:\/\/|www\.|[a-zA-Z0-9]\.|)+([a-zA-Z0-9\/-_?\-&%])/;

    //     var urlexp = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    //     if(urlexp.test(pimg) && validator.isURL(pimg)){
    //         console.log('Valid Url',pimg)
    //         // setPimg(tempurl)
    //         // console.log("PIMG",pimg)
    //         // setPimg(e.target.value)
    //     }
    //     // else{
    //     //     console.log("Please enter a valid image url")
    //     // }
    // }


    return (
        <div>
            <h1>Add Product Here!</h1>
            <div className="container my-3">
                <form onSubmit={onAddProduct} style={{"display":"inline-table","width":"500px"}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name Of Product</label>
                    <input type="text" className="form-control" id="productname" value={pname} onChange={(e)=>{setPname(e.target.value)}} placeholder="Name Of Product" required="required" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Image Link Of Product</label>
                    <input type="text" className="form-control" id="productimage" value={pimg} onChange={(e)=>{setPimg(e.target.value)}} placeholder="Image Link Of Product" required="required" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Select Category Of Product</label>
                    <select className="form-select" onChange={(e)=>{setCategory(e.target.value)}} aria-label="Default select example">
                        <option defaultValue>Select Category</option>
                        <option value="60e84301757a67877bdc5106">Desktop</option>
                        <option value="60e842e4757a67877bdc5102">Laptop</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Descritpion Of Product</label>
                    <input type="textarea" className="form-control" id="productdescription" value={pdesc} onChange={(e)=>{setPdesc(e.target.value)}} placeholder="Descritpion Of Product" required="required" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price Of Product</label>
                    <input type="number" className="form-control" id="productprice" value={pprice} onChange={(e)=>{setPprice(e.target.value)}} placeholder="Price Of Product" required="required" />
                </div>
                <button type="submit" className="btn btn-primary my-3">Add Product</button>
                </form>
            </div>
            
        </div>
    )
}

export default AddProduct
