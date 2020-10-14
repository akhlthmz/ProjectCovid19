import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/index";
import middleware from "./store/middleware/index";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancer(middleware));


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>,
  document.getElementById('root')
);


