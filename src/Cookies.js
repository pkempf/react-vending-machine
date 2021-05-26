import React from "react";
import cookies from "./img/cookies.jpg";

const Cookies = () => {
  return (
    <div className="Cookies">
      <h3>Cookies</h3>
      <h5>$2.00</h5>
      <img src={cookies} width="300px" alt="a pile of cookies" />
      <br />
      <small>
        <i>"ME WANT COOKIE!"</i>
      </small>
    </div>
  );
};

export default Cookies;
