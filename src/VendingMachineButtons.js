import React from "react";
import { NavLink } from "react-router-dom";
import "./VendingMachineButtons.css";

const VendingMachineButtons = () => {
  return (
    <nav className="VendingMachineButtons">
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/cookies">
        Cookies
      </NavLink>
      <NavLink exact to="/pretzels">
        Pretzels
      </NavLink>
      <hr />
      <NavLink to="/" className="clear">
        Clear Selection
      </NavLink>
    </nav>
  );
};

export default VendingMachineButtons;
