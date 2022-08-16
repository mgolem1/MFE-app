import React from "react";
import ReactDOM from "react-dom";
import {StoreProvider} from "store/storeApp"
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount= (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory ?? createMemoryHistory();

    if (onNavigate) {
      history.listen(onNavigate);
    }
  
    ReactDOM.render(
        <StoreProvider>
            <App history={history}/>
        </StoreProvider>, el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
            history.push(nextPathname);
        }
        },
    };
}

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_addBill");
  
    if (devRoot) {
      // if we are running our marketing application in isolation, in development
      mount(devRoot, { defaultHistory: createBrowserHistory });
    }
  }

  
export { mount };

