import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { useStore, StoreProvider } from "store/storeApp";
import MESSAGES from "@sedamit/bss-web-lib/services/locale/message";
import LocaleProvider from "./locale/LocaleProvider";
//import BillApp from './components/BillApp'

ReactDOM.render(
  <StoreProvider>
    <LocaleProvider localeMessages={MESSAGES}>
      <App />
    </LocaleProvider>
  </StoreProvider>,
  document.querySelector("#root")
);
