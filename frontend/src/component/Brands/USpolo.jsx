import React from "react";
import "./Brand.css";
import { useNavigate } from "react-router-dom";
const uspoloProducts = [
  { id: "uspolo1", name: "US Polo Graphic T-Shirt", price: 1800, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
  { id: "uspolo2", name: "US Polo Casual Shirt", price: 2200, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80" },
  { id: "uspolo3", name: "US Polo Slim Fit Jeans", price: 3000, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80" },
  { id: "uspolo4", name: "US Polo Classic Hoodie", price: 2800, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80" },
  { id: "uspolo5", name: "US Polo Quilted Jacket", price: 4000, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80" },
  { id: "uspolo6", name: "US Polo Cotton Shorts", price: 1500, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80" },
  { id: "uspolo7", name: "US Polo Track Pants", price: 2000, image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=500&q=80" },
  { id: "uspolo8", name: "US Polo Signature Polo", price: 1900, image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&q=80" },
  { id: "uspolo9", name: "US Polo Sweatshirt", price: 2500, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80" },
  { id: "uspolo10", name: "US Polo Logo Cap", price: 900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-3U7Fo1qic0WKp_hDFai7-WCdVFtHv9Lig&s" },
  { id: "uspolo11", name: "US Polo Formal Shirt", price: 2600, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80" },
  { id: "uspolo12", name: "US Polo Oxford Shirt", price: 2400, image: "https://uspoloassn.in/cdn/shop/files/1_0be10667-dd93-44f9-a31b-5cff7dde52db.jpg" },
  { id: "uspolo13", name: "US Polo Sporty Tracksuit", price: 5000, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80" },
  { id: "uspolo14", name: "US Polo Classic Blazer", price: 5500, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80" },
  { id: "uspolo15", name: "US Polo Performance Wear", price: 3000, image: "https://uspoloassn.in/cdn/shop/files/1_b53597c2-daa5-4b79-9c9c-01ba74e14745.jpg" }
];

const USPolo = ({search , addToCart , purchase}) => {
  const navigate = useNavigate();
  const USPololist = uspoloProducts.filter((uspoloo) => 
  uspoloo.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
   <>
   { search ? (
     <div className="brand-container">
      <h1>US Polo Search Result</h1>

      <div className="grid">
        {USPololist.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
           <button onClick={() => addToCart(item)}>Add To Cart</button>
           <button onClick={() => navigate(`/purchase/${item.id}`) }>Purchase</button>
          </div>
        ))}
      </div>
    </div>
   ) : (
     <div className="brand-container">
      <h1>US Polo Collection</h1>

      <div className="grid">
        {uspoloProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>

           <button onClick={() => navigate(`/purchase/${item.id}`) }>Purchase</button>
          </div>
        ))}
      </div>
    </div>
   )}
   </>
  );
};
export {uspoloProducts}
export default USPolo;