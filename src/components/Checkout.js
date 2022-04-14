import { Remove } from "@material-ui/icons";
import { Add } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>YOUR BAG</h1> <hr />
      <div className="checkout_option">
        <NavLink to="/"><button className="continue_shopping">CONTINUE SHOPPING</button></NavLink>
        <div>
          <span>SHOPPING BAG (2)</span>
          <span>WISHLIST (0)</span>
        </div>
        <button className="checkout_button">CHECKOUT NOW</button>
      </div>
      <hr />
      <div className="checkout_info">
        <div className="info">
          <div className="product_info">
            <div className="product_details">
              <img
                className="product_img"
                src="./assets/products/f1.jpg"
                alt=""
              />
              <div className="product_values">
                <span className="product_name">
                  <b>Product:</b> Astrounaut Tshirts
                </span>
                <span className="product_id">
                  <b>ID:</b>77777
                </span>
                <div className="product_color">
                  <b>Color:</b> Black
                </div>
                <span className="product_size">
                  <b>Size:</b> 30
                </span>
              </div>
            </div>
            <span className="price_detail">
              <div className="product_amount_container">
                <Add />
                <div className="product_amount">2</div>
                <Remove />
              </div>
              <div className="product_price">$30</div>
            </span>
          </div>
          <hr />
          <div className="product_info">
            <div className="product_details">
              <img
                className="product_img"
                src="./assets/products/f1.jpg"
                alt=""
              />
              <div className="product_values">
                <span className="product_name">
                  <b>Product:</b> Astrounaut Tshirts
                </span>
                <span className="product_id">
                  <b>ID:</b>77777
                </span>
                <div className="product_color">
                  <b>Color:</b> Black
                </div>
                <span className="product_size">
                  <b>Size:</b> 30
                </span>
              </div>
            </div>
            <span className="price_detail">
              <div className="product_amount_container">
                <Add />
                <div className="product_amount">2</div>
                <Remove />
              </div>
              <div className="product_price">$30</div>
            </span>
          </div>
          <hr />
        </div>
        <div className="summary">

          <h1 className="summary_title">
            ORDER SUMMARY
          </h1>
          <div className="summary_item">
            <span className="summary_item_text">Subtotal</span>
            <span className="summary_item_price">$ 80</span>
          </div>
          <div className="summary_item">
            <span className="summary_item_text">Estimated Shipping</span>
            <span className="summary_item_price">$ 5</span>
          </div>
          <div className="summary_item">
            <span className="summary_item_text">Shipping Discount</span>
            <span className="summary_item_price">$ -3</span>
          </div>
          <div className="summary_item total">
            <span className="summary_item_text">Total</span>
            <span className="summary_item_price">$ 80</span>
          </div>
          <button className="summary_checkout">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
