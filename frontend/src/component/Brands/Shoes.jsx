import React from "react";
import "./Brand.css";
import {useNavigate} from 'react-router-dom'
const shoesProducts = [
  { id: 1, name: "Running Shoes", price: 4000, image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
  { id: 2, name: "Sneakers", price: 3500, image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg" },
  { id: 3, name: "Sports Shoes", price: 4500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJ3YCAJA4nxQpJuYwAsYo86XMwCLigQsIQg&s" },
  { id: 4, name: "Casual Shoes", price: 3000, image: "https://images.pexels.com/photos/19090/pexels-photo.jpg" },
  { id: 5, name: "Formal Shoes", price: 5000, image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg" },
  { id: 6, name: "Boots", price: 5500, image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg" }
];

const Shoes = ({ addToCart, purchase , search }) => {
  const shoeslist = shoesProducts.filter((Shoess) => 
  Shoess.name.toLowerCase().includes(search.toLowerCase())
  )
  const navigate = useNavigate();
  return (
    <>
    { search ? (
      <div className="brand-container">
      <h1>Shoes's Search Result</h1>

      <div className="grid">
        {shoeslist.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>

            <button onClick={() => navigate(`/purchase/${item.id}`)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    ) : (
      <div className="brand-container">
      <h1>Shoes Collection</h1>

      <div className="grid">
        {shoesProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
            <button onClick={() => navigate(`/purchase/${item.id}`)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    )}
    </>
  );
};

export default Shoes;