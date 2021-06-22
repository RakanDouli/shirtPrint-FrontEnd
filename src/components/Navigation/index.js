import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiUserCheck } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { selectUser } from "../../store/user/selectors";
const Navigation = () => {
  const [BurgerMenu, setBurgerMenu] = useState(false);
  BurgerMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");

  const user = useSelector(selectUser);
  console.log("user", user.name);
  return (
    <nav>
      <div className="logo">
        <Link to="/" onClick={() => setBurgerMenu(false)}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar">
        <div className={`nav-items ${BurgerMenu ? "nav-item-active" : ""}`}>
          <Link to="/AboutUs" onClick={() => setBurgerMenu(false)}>
            About us
          </Link>
          <Link to="/contact" onClick={() => setBurgerMenu(false)}>
            Contact us
          </Link>
          <Link
            className={user.name ? "welcome" : ""}
            to="/user/login"
            onClick={() => setBurgerMenu(false)}>
            {user.name === null ? <FiUser /> : <FiUserCheck />}
            {user.name ? user.name : "Log In"}
          </Link>
          <Link
            className="designerNav"
            to="/designer/login"
            onClick={() => setBurgerMenu(false)}>
            Designer
          </Link>
        </div>
        <button
          onClick={() => setBurgerMenu(!BurgerMenu)}
          className={`burger-menu ${BurgerMenu ? "burger-active" : ""}`}>
          <span></span> <span></span> <span></span>
        </button>
        <button className="basket">
          <FiShoppingCart />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
