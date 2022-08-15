import React from "react";

const Footer = () => {
  return (
    <div className="navbar bg-light d-flex justify-content-center align-items-center flex-wrap">
      <h5 className="text-capitalize text-center ">
        © live weather app @ {new Date().getFullYear()} All Rights Reserved
      </h5>
    </div>
  );
};

export default Footer;
