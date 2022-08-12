import React from "react";
import ReactDOM from "react-dom";

import BillList from "./BillList";
import {useStore,StoreProvider} from "store/storeApp"

ReactDOM.render(
<StoreProvider>
<BillList />
</StoreProvider>,
document.querySelector("#root"));
