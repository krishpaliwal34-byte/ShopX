import React from "react";
import "./Brand.css";
import { useNavigate } from "react-router-dom";
const pumaProducts = [
  { id: "puma1", name: "Puma Hoodie", price: 2300, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPPOfDIq7j5I-1m-HJ8Yr6sKdP9bBs9yzsQ&s" },
  { id: "puma2", name: "Puma T-Shirt", price: 1100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTqlbKVHSc377ncleCGet4i6jvoL3nFilRw&s" },
  { id: "puma3", name: "Puma Jacket", price: 3200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6V5XoO-7b-GBGNWwXiUgSRWdTXvemI8HVQ&s" },
  { id: "puma4", name: "Puma Track Pants", price: 1700, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApUHaIyU6uaCjOIep4NrFnQ13gXb_L2RvfA&s" },
  { id: "puma5", name: "Puma Shorts", price: 900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvh0KmAlM0u-nqM8O_g6yl08WswUoUEvVfHA&s" },
  { id: "puma6", name: "Puma Shoes", price: 3800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtOOsU-W-R2GvpgEgHmGhtYx6hnFLaeZkaw&s" },
  { id: "puma7", name: "Puma Sneakers", price: 4200, image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/30089088/2024/8/22/473367d4-b053-4815-a098-836df55a58311724303925080-PUMA-Courtismo-Mens-Sneakers-9731724303924799-1.jpg" },
  { id: "puma8", name: "Puma Sweatshirt", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BhC2PfY9Tnj1BevgV_EOwdge3ZwbQTZccA&s" },
  { id: "puma9", name: "Puma Polo T-Shirt", price: 1400, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/529240/16/fnd/IND/fmt/png/Sprint-Boys'-Sweat-Wicking-Polo-T-shirt" },
  { id: "puma10", name: "Puma Cap", price: 700, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/023792/01/fnd/IND/fmt/png/PUMA-Running-Cap" },
  { id: "puma11", name: "Puma Gym Wear", price: 1800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrH9fhjmJDjokU3yhv3Msd0mvEfmr7IFqHOA&s" },
  { id: "puma12", name: "Puma Sports Shoes", price: 4600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8AvzGFz7sIEumur21VB-2QGTPG6W3FJqYA&s" },
  { id: "puma13", name: "Puma Windbreaker", price: 3000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0Z2le2150UfR0gEwjI9grmVsei1hW8ItbQ&s" },
  { id: "puma14", name: "Puma Jersey", price: 1600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTueYAxmLis8uYQFLKXprhdupHNV202Gb4tdg&s" },
  { id: "puma15", name: "Puma Tracksuit", price: 5500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDoevfzKeJlCVzFpu7ORnHaR5KW4zQlhJGEQ&s" }
];

const Puma = ({ addToCart, purchase ,search}) => {
  const navigate = useNavigate();
  const pumalist = pumaProducts.filter((pumaa) => 
  pumaa.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
    { search ? (
      <div className="brand-container">
      <h1>Puma Search Result</h1>

      <div className="grid">
        {pumalist.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>

            <button onClick={() => navigate(`/purchase/${item.id}`) }>Purchase</button>
          </div>
        ))}
      </div>
    </div>
    ) : (
      <div className="brand-container">
      <h1>Puma Collection</h1>

      <div className="grid">
        {pumaProducts.map((item) => (
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
    )}
    </>
  );
};
export { pumaProducts }
export default Puma; 