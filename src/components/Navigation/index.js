import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiUserCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.svg";
import { selectToken, selectUser } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";

const Navigation = () => {
  const [BurgerMenu, setBurgerMenu] = useState(false);
  const history = useHistory();
  BurgerMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const userlogin_out = () => {
    if (token) {
      dispatch(logOut()) && history.push("/");

      console.log(history);
    } else {
      setBurgerMenu(false);

      history.push("/");
    }
  };
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
            className={token ? "welcome" : ""}
            to={token ? "" : "/user/login"}
            onClick={userlogin_out}>
            {!token ? <FiUser /> : <FiUserCheck />}
            {token ? user.name : "Log In"}
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
