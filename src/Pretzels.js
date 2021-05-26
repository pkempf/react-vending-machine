import React from "react";
import pretzels from "./img/pretzels.jpg";

const Pretzels = () => {
  return (
    <div className="Pretzels">
      <h3>Pretzels</h3>
      <h5>$1.50</h5>
      <img src={pretzels} width="300px" alt="a pile of pretzels" />
      <br />
      <small>
        <i>"These pretzels are making me thirsty!"</i>
      </small>
    </div>
  );
};

export default Pretzels;
