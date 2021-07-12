// import { createStore } from "redux";
import { createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./Redux/Reducers/Index";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)));

export default store;


// ,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()