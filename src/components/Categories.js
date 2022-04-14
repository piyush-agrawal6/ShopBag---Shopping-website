import React from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  return (
    <div>
      <h1 className="categories_head">MORE CATEGORIES</h1>
      <div className="categories">
        <NavLink to="/shirts">
          <img src="./assets/categories/c1.webp" alt="" />
        </NavLink>
        <NavLink to="/tshirts">
          <img src="./assets/categories/c2.webp" alt="" />
        </NavLink>
        <NavLink to="/sarees">
          <img src="./assets/categories/c3.webp" alt="" />
        </NavLink>
        <NavLink to="/kurtas">
          <img src="./assets/categories/c4.webp" alt="" />
        </NavLink>
        <NavLink to="/handbags">
          <img src="./assets/categories/c5.webp" alt="" />
        </NavLink>
        <NavLink to="/jewellery">
          <img src="./assets/categories/c6.webp" alt="" />
        </NavLink>
        <NavLink to="/beauty">
          <img src="./assets/categories/c7.webp" alt="" />
        </NavLink>
        <NavLink to="/jeans">
          <img src="./assets/categories/c8.webp" alt="" />
        </NavLink>
        <NavLink to="/sportsshoes">
          <img src="./assets/categories/c9.webp" alt="" />
        </NavLink>
        <NavLink to="/innerwear">
          <img src="./assets/categories/c10.webp" alt="" />
        </NavLink>
        <NavLink to="/watches">
          <img src="./assets/categories/c11.webp" alt="" />
        </NavLink>
        <NavLink to="/flipflops">
          <img src="./assets/categories/c12.webp" alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Categories;
