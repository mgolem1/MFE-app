import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "store/storeApp";
import App from "./App";
import LocaleProvider from "./locale/LocaleProvider";
import MESSAGES from "./locale";

const COOKIE_PATH = "/";
const COOKIE_NAME = "CRM_LOCALE";
const mount = (el: any, messageFromContainer: any) => {
  /*const history = defaultHistory ?? createMemoryHistory();

    if (onNavigate) {
      history.listen(onNavigate);
    }*/

  let messagesOverride = {
    ...MESSAGES.hr,
    ...messageFromContainer.hr,
  };
  messagesOverride = { hr: messagesOverride };

  ReactDOM.render(
    <StoreProvider>
      <LocaleProvider localeMessages={messagesOverride}>
        <App />
      </LocaleProvider>
    </StoreProvider>,
    el
  );

  // return {
  //     onParentNavigate({ pathname: nextPathname }) {
  //     const { pathname } = history.location;

  //     if (pathname !== nextPathname) {
  //         history.push(nextPathname);
  //     }
  //     },
  // };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_addBill");

  if (devRoot) {
    // if we are running our marketing application in isolation, in development
    mount(devRoot, MESSAGES);
  }
}

export { mount };
