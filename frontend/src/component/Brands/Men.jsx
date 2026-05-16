import React from "react";
import "./Brand.css";

const menProducts = [
  { id: 1, name: "Men T-Shirt", price: 1200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KX3LUnWEd2r-FIioIKitPXkLv-0WoSuomA&s" },
  { id: 2, name: "Men Shirt", price: 1800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyVDCp2uxCYaDc2iRltwdcrNowwFnuAFMfQ&s" },
  { id: 3, name: "Men Jeans", price: 2500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5b27kmqP7gd6Yi6xDw9TN_DHqoo_B0mB6dQ&s" },
  { id: 4, name: "Men Hoodie", price: 2200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPPOfDIq7j5I-1m-HJ8Yr6sKdP9bBs9yzsQ&s" },
  { id: 5, name: "Men Jacket", price: 3500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6V5XoO-7b-GBGNWwXiUgSRWdTXvemI8HVQ&s" },
  { id: 6, name: "Men Shorts", price: 900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvh0KmAlM0u-nqM8O_g6yl08WswUoUEvVfHA&s" },
  { id: 7, name: "Men Track Pants", price: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvh0KmAlM0u-nqM8O_g6yl08WswUoUEvVfHA&s" },
  { id: 8, name: "Men Sweatshirt", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BhC2PfY9Tnj1BevgV_EOwdge3ZwbQTZccA&s" }
];

const Men = ({ addToCart, purchase , search }) => {
  const menlist = menProducts.filter((men) => 
  men.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
   <>
   { search ? (
     <div className="brand-container">
      <h1>Men 's Search Result</h1>

      <div className="grid">
        {menlist.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>

    
            <button onClick={() => purchase(item)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
   ) : (
     <div className="brand-container">
      <h1>Men Collection</h1>

      <div className="grid">
        {menProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>

            <button onClick={() => addToCart(item)}>Add To Cart</button>
            <button onClick={() => purchase(item)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
   )}
   </>
  );
};

export default Men;