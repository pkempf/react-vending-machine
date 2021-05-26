import React from "react";
import chips from "./img/chips.jpg";

const Chips = () => {
  return (
    <div className="Chips">
      <h3>Chips</h3>
      <h5>$1.25</h5>
      <img src={chips} width="300px" alt="a pile of chips" />
      <br />
      <small>
        <i>"Bet you can't eat just one."</i>
      </small>
    </div>
  );
};

export default Chips;
