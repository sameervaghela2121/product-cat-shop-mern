import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproductact, deleteProductById } from '../Redux/Actions/Index';
import { useHistory, useParams } from "react-router-dom";


const ProductListScreen = () => {
    const dispatch = useDispatch();
    const showproducttodash = useSelector((state) => state.showproductdata.products);
    const history = useHistory();
    
    const deleteProduct = (e) => {
        console.log("Delete Product Id: ",e);
        dispatch(deleteProductById(e));
        window.location.reload();
    }

    useEffect(() => {
        dispatch(fetchproductact());
    }, [])

    const editproduct = (e) => {
        console.log("Edit Product Id: ",e)
        history.push(`/editproduct/${e}`);

    }

    

    return (
        <div className="container my-3">
            <h1>Product List Page</h1>
            <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    showproducttodash.map((pdata)=>{
                        return(
                            <tr key={pdata._id}>
                                <th scope="row">{pdata._id}</th>
                                <td>{pdata.pname}</td>
                                <td><img src={pdata.pimg} style={{"height":"100px", "width":"150px"}}/></td>
                                <td>{pdata.pdesc}</td>
                                <td>{pdata.category.category}</td>
                                <td>{pdata.pprice}</td>
                                <td><button className="btn btn-warning" onClick={(e)=>{editproduct(pdata._id)}}>Edit</button></td>
                                <td><button id="del-btn" className="btn btn-danger" onClick={(e)=>{deleteProduct(pdata._id)}}>Delete</button></td>
                            </tr>
                        )
                    })
                }                
            </tbody>
            </table>
        </div>
    )
}

export default ProductListScreen
