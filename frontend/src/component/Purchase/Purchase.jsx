import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import './purchase.css'
import { adidasProducts } from "../Brands/Adidas.jsx";
import { hmProducts } from "../Brands/HM.jsx";
import { levisProducts } from "../Brands/Levis.jsx";
import { pumaProducts } from "../Brands/Puma.jsx";
import { reebokProducts } from "../Brands/Rebok.jsx";
import { uspoloProducts } from "../Brands/USpolo.jsx";
import { zaraProducts } from "../Brands/Zara.jsx";
import { zudioProducts } from "../Brands/Zudio.jsx";

const Purchase = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const allProducts = [
    ...adidasProducts,
    ...hmProducts,
    ...levisProducts,
    ...pumaProducts,
    ...reebokProducts,
    ...uspoloProducts,
    ...zaraProducts,
    ...zudioProducts,
  ];

 
  const product = allProducts.find((item) => item.id === id);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

  
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://shopx-4rit.onrender.com/api/order/purchase",
        {
          productId: product.id,
          productName: product.name,
          name: data.name,
          phone: data.phone,
          address: data.address,
        }
      );

      alert(res.data.msg || "Order placed successfully!");
      reset();
      navigate("/");
    } catch (error) {
      console.error("Order Error:", error);
      alert("Order failed.");
    }
  };

  return (
    <div className="purchase-container">
      <div className="purchase-box">
        <h2>Checkout</h2>

        <div className="product-summary">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>

    
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <input
            type="tel"
            placeholder="Enter Phone"
            {...register("phone", {
              required: "Phone is required",
              minLength: {
                value: 10,
                message: "Enter valid phone number",
              },
            })}
          />
          {errors.phone && <span>{errors.phone.message}</span>}

          <textarea
            placeholder="Enter Address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <span>{errors.address.message}</span>}

          <button type="submit">Place Order</button>
        </form>

        <button className="back-btn" onClick={() => navigate("/")}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Purchase;