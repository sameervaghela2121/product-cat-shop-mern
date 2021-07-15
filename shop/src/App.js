import './App.css';
import ShowProduct from './Components/ShowProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleProduct from './Components/SingleProduct';
import { useSelector } from 'react-redux';
import AddProduct from './Components/AddProduct';
import ProductListScreen from './Components/ProductListScreen';
import EditProduct from './Components/EditProduct';

function App() {
  const showproducttodash = useSelector((state) => state.showproductdata.products)
  
  return (
    <div className="App">
      <Router>
      <h1>MERN APP</h1>
        <Switch>
          <Route exact path="/" component={ShowProduct}/>
          <Route exact path="/product/:productId" component={SingleProduct}/>
          <Route exact path="/addproduct" component={AddProduct}/>
          <Route exact path="/listproduct" component={ProductListScreen}/>
          <Route exact path="/editproduct/:productId" component={EditProduct}/>
          {/* <Router>404 Not Found</Router> */}
        </Switch>
      </Router>
      {/* <ShowProduct/> */}
    </div>
  );
}

export default App;
