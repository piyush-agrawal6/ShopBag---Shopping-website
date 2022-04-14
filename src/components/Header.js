import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img className="logo" src="./assets/Logo.png" alt="Our Logo" />
      </NavLink>
      <div className="header_category">
        <NavLink className="link" to="/men">
          <span>Men</span>
        </NavLink>
        <NavLink className="link" to="/women">
          <span>Women</span>
        </NavLink>
        <NavLink className="link" to="/kids">
          <span>Kids</span>
        </NavLink>
        <NavLink className="link" to="/beauty">
          <span>Beauty</span>
        </NavLink>
        <NavLink className="link" to="/decors">
          <span>Decors</span>
        </NavLink>
      </div>
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <NavLink to="/login">
            <AccountCircleIcon />
          </NavLink>
          <NavLink className="link" to="/login">
            <span>Log In</span>
          </NavLink>
        </div>
        <div className="header_option">
          <NavLink to="/orders">
            <LocalShippingIcon />
          </NavLink>
          <NavLink className="link" to="/orders">
            <span>Orders</span>
          </NavLink>
        </div>
        <div className="header_cart">
          <NavLink to="/checkout">
            <ShoppingCartIcon />
          </NavLink>
          <NavLink className="link" to="/checkout"><span className="header_cartCount">0</span></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
