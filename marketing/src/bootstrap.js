import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const mount= (el) => {
    ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , el);
}

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root");
  
    if (devRoot) {
      // if we are running our marketing application in isolation, in development
      mount(devRoot);
    }
  }

  
export { mount };
   