import React, { useEffect } from "react";
import "./ShowProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductact } from "../Redux/Actions/Index";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



const ShowProduct = () => {
  const dispatch = useDispatch();
  const showproducttodash = useSelector(
    (state) => state.showproductdata.products
  );
  console.log("UseSelectorHook", showproducttodash);
  // let history = useHistory();

  // console.log("Type of pd",typeof(showproducttodash))

  // const fetch = async () => {
  //   dispatch(fetchproductact());
  // };
  const productId = useParams();
  // console.log("Params",productId)
  

  const addtoCart = (e) => {
      console.log("This product is added to cart! ",e);
  }
  useEffect(() => {
    dispatch(fetchproductact());
  }, [])

  return (
    <div>
      {/* <button className="btn btn-warning" onClick={fetch}>
        Show Product
      </button> */}
      <br />
      {/* {(showproducttodash)?<h2>Here is data</h2>:<h2>Here is No data</h2>} */}
      <div className="main-container my-3">
      <div className="row" style={{"marginLeft":"120px"}}>

        {showproducttodash ? (
          showproducttodash.map((pdata) => {
            return (
              <div key={pdata._id} className="col-4">
                
                  
                    
                  <div className="card" style={{ width: "18rem" }}>
                    <Link to={`/product/${pdata._id}`}> 
                      <img
                        src={pdata.pimg}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{pdata.pname}</h5>
                        <p className="card-text">{pdata.pdesc}</p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">{pdata.pprice}</li>
                      </ul>
                    </Link>
                    <div className="card-body">
                      <p>
                        <strong>Category:</strong>
                        {pdata.category.category}
                      </p>
                      <button className="btn btn-warning" onClick={(e)=>{addtoCart(pdata._id)}}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  <br />
                </div>
              
            );
          })
        ) : (
          <h1>No Product Available!</h1>
        )}
      </div>
    </div></div>
  );
};

export default ShowProduct;