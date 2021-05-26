import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NoSnack from "./NoSnack";
import Chips from "./Chips";
import Cookies from "./Cookies";
import Pretzels from "./Pretzels";
import VendingMachineButtons from "./VendingMachineButtons";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <div className="VendingMachine-selector">
          <span className="VendingMachine-instructions">Choose a snack:</span>
          <VendingMachineButtons />
        </div>
        <hr />
        <div className="VendingMachine-selection">
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/cookies">
            <Cookies />
          </Route>
          <Route exact path="/pretzels">
            <Pretzels />
          </Route>
          <Route exact path="/">
            <NoSnack />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default VendingMachine;
