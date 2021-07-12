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

function App() {
  const showproducttodash = useSelector((state) => state.showproductdata.products)
  
  return (
    <div className="App">
      <Router>
      <h1>MERN APP</h1>
        <Switch>
          <Route exact path="/" component={ShowProduct}/>
          <Route exact path="/product/:productId" component={SingleProduct}/>
          <Router>404 Not Found</Router>
        </Switch>
      </Router>
      {/* <ShowProduct/> */}
    </div>
  );
}

export default App;
