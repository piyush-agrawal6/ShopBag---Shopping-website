import React from "react";
import "./Products.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const MenProducts = () => {
  return (
    <div className="products">
      <h2>Featured Products</h2>
      <p>Summer collection new modern design</p>

      <div className="pro_container">
        <div className="pro">
          <img className="img" src="./assets/products/f1.jpg" alt="" />
          <div className="pro_des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-shirts</h5>
            <h4>$75</h4>
          </div>
          <AddShoppingCartIcon className="cart" />
        </div>
        <div className="pro">
          <img className="img" src="./assets/products/f2.jpg" alt="" />
          <div className="pro_des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-shirts</h5>
            <h4>$75</h4>
          </div>
          <AddShoppingCartIcon className="cart" />
        </div>
        <div className="pro">
          <img className="img" src="./assets/products/f3.jpg" alt="" />
          <div className="pro_des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-shirts</h5>
            <h4>$75</h4>
          </div>
          <AddShoppingCartIcon className="cart" />
        </div>
        <div className="pro">
          <img className="img" src="./assets/products/f4.jpg" alt="" />
          <div className="pro_des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-shirts</h5>
            <h4>$75</h4>
          </div>
          <AddShoppingCartIcon className="cart" />
        </div>
        <div className="pro">
          <img className="img" src="./assets/products/f5.jpg" alt="" />
          <div className="pro_des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-shirts</h5>
            <h4>$75</h4>
          </div>
          <AddShoppingCartIcon className="cart" />
        </div>
        <div className="pro">
          <img className="img" src="./assets/products/f6.jpg" alt="" />
          <div className="pro_des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-shirts</h5>
            <h4>$75</h4>
          </div>
          <AddShoppingCartIcon className="cart" />
        </div>
        <div className="pro">
          <img className="img" src="./assets/products/f7.jpg" alt="" />
          <div className="pro_des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-shirts</h5>
            <h4>$75</h4>
          </div>
          <AddShoppingCartIcon className="cart" />
        </div>
        <div className="pro">
          <img className="img" src="./assets/products/f8.jpg" alt="" />
          <div className="pro_des">
            <span>Adidas</span>
            <h5>Cartoon Astronaut T-shirts</h5>
            <h4>$75</h4>
          </div>
          <AddShoppingCartIcon className="cart" />
        </div>
      </div>
    </div>
  );
};

export default MenProducts;
