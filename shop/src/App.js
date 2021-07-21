import './App.css';
import ShowProduct from './Components/ShowProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SingleProduct from './Components/SingleProduct';
import AddProduct from './Components/AddProduct';
import ProductListScreen from './Components/ProductListScreen';
import EditProduct from './Components/EditProduct';
import RegisterUser from "./Components/RegisterUser";
import LoginUser from "./Components/LoginUser";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import CartScreen from "./Components/CartScreen";
import Footer from "./Components/Footer";
import PlaceOrder from './Components/PlaceOrder';
import OrderSuccess from "./Components/OrderSuccess";

function App() {
  // const showproducttodash = useSelector((state) => state.showproductdata.products)
  
  return (
    <div className="App">
      <Router>
        <Header/>
        {/* <h1>MERN APP</h1> */}
        <Switch>
          <Route exact path="/" component={ShowProduct}/>
          <Route exact path="/product/:productId" component={SingleProduct}/>
          <Route exact path="/addproduct" component={AddProduct}/>
          <Route exact path="/listproduct" component={ProductListScreen}/>
          <Route exact path="/editproduct/:productId" component={EditProduct}/>
          <Route exact path="/register" component={RegisterUser}/>
          <Route exact path="/login" component={LoginUser}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/cart" component={CartScreen}/>
          <Route exact path="/placeorder" component={PlaceOrder}/>
          <Route exact path="/ordersuccess" component={OrderSuccess}/>
          <Router>404 Not Found</Router>
        </Switch>
        <Footer/>
      </Router>
      {/* <ShowProduct/> */}
    </div>
  );
}

export default App;
