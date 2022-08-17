import React from "react";
import BillList from "./components/BillList";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import BillApp from "./components/BillApp";
export default () => {
  return (
        <div>
          
            <BillList/>
            <BillApp/>
        </div>
  );
};
