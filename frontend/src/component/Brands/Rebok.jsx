import React from "react";
import "./Brand.css";
import { useNavigate } from "react-router-dom";
const reebokProducts = [
  { id: "reebok1", name: "Reebok Vector Logo T-Shirt", price: 1200, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
  { id: "reebok2", name: "Reebok Training Shorts", price: 999, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80" },
  { id: "reebok3", name: "Reebok Nano X4 Training Shoes", price: 8500, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
  { id: "reebok4", name: "Reebok Classic Leather Sneakers", price: 5500, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80" },
  { id: "reebok5", name: "Reebok Full-Zip Track Jacket", price: 3200, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80" },
  { id: "reebok6", name: "Reebok Workout Ready Hoodie", price: 2800, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80" },
  { id: "reebok7", name: "Reebok Compression Leggings", price: 1800, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80" },
  { id: "reebok8", name: "Reebok Identity Joggers", price: 2100, image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=500&q=80" },
  { id: "reebok9", name: "Reebok Active Core Cap", price: 799, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80" },
  { id: "reebok10", name: "Reebok Tech Style Polo", price: 1600, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80" },
  { id: "reebok11", name: "Reebok Gym Training Bag", price: 1400, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" },
  { id: "reebok12", name: "Reebok Windbreaker Jacket", price: 3800, image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&q=80" },
  { id: "reebok13", name: "Reebok Zig Kinetica Shoes", price: 9500, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80" },
  { id: "reebok14", name: "Reebok Performance Tank Top", price: 1100, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80" }
];

const Rebok = ({ addToCart, purchase ,search}) => {
  const navigate = useNavigate();

 const reeboklist = reebokProducts.filter((reebokk) =>
  reebokk.name.toLowerCase().includes(search.toLowerCase())
)
  
  return (
   <>
   { search ? (
     <div className="brand-container">
      <h1>Rebok Search Result</h1>

      <div className="grid">
        {reeboklist.map((item) => (
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
      <h1>Rebok Collection</h1>

      <div className="grid">
        {reebokProducts.map((item) => (
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
export { reebokProducts}
export default Rebok;