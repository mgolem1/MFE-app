import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as serviceworker from './serviceWorker';
import { legacy_createStore as createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from "react-redux";

const store = createStore(allReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.querySelector("#root"));

