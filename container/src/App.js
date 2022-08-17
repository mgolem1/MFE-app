import React from "react";
import BillList from "./components/BillList";
import { BrowserRouter,Route,Routes } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
        <div>
            <BillList/>
        </div>
    </BrowserRouter>
  );
};
