import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_column">
        <img className="footer_logo" src="./assets/Logo.png" alt="logo" />
        <h4>Contact Us</h4>
        <p>
          <strong>Adress:</strong> Attabira , Bargarh , Odisha
        </p>
        <p>
          <strong>Phone:</strong> +91-844110261 , +91-9776948724
        </p>
        <p>
          <strong>Our Store:</strong> 10:00 - 18:00 , Mon-Sat
        </p>
        <div className="footer_followus">
          <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" />
          <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png" />
          <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
          <img src="https://img.icons8.com/color/48/000000/pinterest--v1.png" />
          <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
        </div>
      </div>
      <div className="footer_column">
        <h4>About</h4>
        <NavLink to="/" className="link">
          <p>About Us</p>
        </NavLink>
        <NavLink to="/" className="link">
          <p>Delivery Information</p>
        </NavLink>
        <NavLink to="/" className="link">
          <p>Privacy Policy</p>
        </NavLink>
        <NavLink to="/" className="link">
          <p>Terms and Condition</p>
        </NavLink>
        <NavLink to="/" className="link">
          <p>Contact Us</p>
        </NavLink>
      </div>
      <div className="footer_column">
        <h4>My Account</h4>
        <NavLink to="/login" className="link">
          <p>Sign Up</p>
        </NavLink>
        <NavLink to="/checkout" className="link">
          <p>View Cart</p>
        </NavLink>
          <p>My Wishlist</p>
        <NavLink to="/orders" className="link">
          <p>Track my order</p>
        </NavLink>
        <NavLink to="/help" className="link">
          <p>Help</p>
        </NavLink>
      </div>

      <div className="footer_column install">
        <h4>Install App</h4>
        <p>Available in Appstore and PlayStore</p>
        <div className="footer_app">
          <img src="/assets/pay/app.jpg" alt="" />
          <img src="/assets/pay/play.jpg" alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src="./assets/pay/pay.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
