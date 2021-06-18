import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar">
        <div className="nav-items">
          <Link to="/AboutUs">About us</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/user/login">Log in</Link>
          <Link className="designerNav" to="/designer/login">
            Designer
          </Link>
        </div>
        <button className="basket">
          <FiShoppingCart />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
