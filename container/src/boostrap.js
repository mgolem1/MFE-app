import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {useStore,StoreProvider} from "store/storeApp"
import BillApp from './components/BillApp'

ReactDOM.render(
    <StoreProvider>
    <App />
    </StoreProvider>,
document.querySelector("#root"));
