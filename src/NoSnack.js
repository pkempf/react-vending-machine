import React from "react";
import placeholder from "./img/placeholder.png";

const NoSnack = () => {
  return (
    <div className="NoSnack">
      <h3>Nothing Selected</h3>
      <h5>---</h5>
      <img src={placeholder} width="300px" alt="a large question mark" />
      <br />
      <small>
        <i>"Hey! Buy something!"</i>
      </small>
    </div>
  );
};

export default NoSnack;
