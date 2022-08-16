import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import AddRacun from "./components/AddRacun"

export default ({ history }) => {
  return (
    <div>
     
        <Router history={history}>
            <Route exact path="/addRacun" component={AddRacun} />
        </Router>
    </div>
  );
};
