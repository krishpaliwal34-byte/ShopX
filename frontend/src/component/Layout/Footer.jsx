import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-section">
          <h2>ShopX</h2>
          <p>Your one-stop fashion destination</p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Shoes</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@shopx.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2026 ShopX. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;