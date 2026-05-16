import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart  , removeFromCart }) => {

  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      <div className="cart-grid">
        {cart.map((item, index) => (
          <div className="cart-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
            <button onClick={() => navigate(`/purchase/${item.id}`)}>
              Purchase
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Cart;