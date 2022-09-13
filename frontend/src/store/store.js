import { allReducers } from "../reducers";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import thunkMiddleware from 'redux-thunk'
 //import configureStore from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension";

// let composeEnhancers = compose;


//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// const enhancer = composeEnhancers(applyMiddleware(thunk));
// const middleware = applyMiddleware(thunk,createLogger());
//const store = createStore(allReducers, middleware);
export const store=createStore(allReducers,composedEnhancer);

//const store = configureStore(allReducers, composedEnhancer);
export default store;