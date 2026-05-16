import React from "react";
import "./Brand.css";
import { useNavigate } from "react-router-dom";

const zudioProducts = [
  { id: "zudio1", name: "Zudio T-Shirt", price: 499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU5VqQmPJbcafEo25s7l-MLTxAlAaH4hJPg&s" },
  { id: "zudio2", name: "Zudio Shirt", price: 799, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyVDCp2uxCYaDc2iRltwdcrNowwFnuAFMfQ&s" },
  { id: "zudio3", name: "Zudio Jeans", price: 1299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5b27kmqP7gd6Yi6xDw9TN_DHqoo_B0mB6dQ&s" },
  { id: "zudio4", name: "Zudio Hoodie", price: 1499, image: "https://m.media-amazon.com/images/I/51c3PB1vi3L._AC_SR175,263_QL70_.jpg" },
  { id: "zudio5", name: "Zudio Jacket", price: 1999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5T3Y5GdhVUNWORz17S_pKDpA4qiyOmINzw&s" },
  { id: "zudio6", name: "Zudio Shorts", price: 699, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIpVMcT3IzRg3RvToqnPsUZJW24CzbwUSug&s" },
  { id: "zudio7", name: "Zudio Track Pants", price: 999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HETG21g0t6Z69_8OBD_0PcvpCqKkbIxcmQ&s" },
  { id: "zudio8", name: "Zudio Kurta", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtILjPvmfY1oLvzWEr0fpNzDcJYStM-KnYMQ&s" },
  { id: "zudio9", name: "Zudio Polo T-Shirt", price: 599, image: "https://i.pinimg.com/236x/c7/52/84/c752842e1b03ffeb57e5731024d61311.jpg" },
  { id: "zudio10", name: "Zudio Sweatshirt", price: 1199, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfwLe6Y4_d87nCZ0kz49oVhP9osRSZYXtMg&s" },
  { id: "zudio11", name: "Zudio Dress", price: 1399, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpC0YPHbYoZUhvl7sZMWv6aEdw2DQ7e9yo_Q&s" },
  { id: "zudio12", name: "Zudio Ethnic Wear", price: 1599, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fmq08cazlULgRy66OZBUgzRclyxc4adA1A&s" },
  { id: "zudio13", name: "Zudio Night Wear", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiiuYPq31XwXxql2fMhTc4B_JXlILLeBUWKA&s" },
  { id: "zudio14", name: "Zudio Casual Shirt", price: 749, image: "https://img.freeup.app/fit-in/600x600/filters:upscale()/1b0559ea6530c475404e0401ea2dd7da.jpg" },
  { id: "zudio15", name: "Zudio Tracksuit", price: 1799, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNs_jnqveF4E7WpcB0i7KAzQYndzBBnJy7g&s" }
];

const Zudio = ({ addToCart, purchase , search }) => {
  const navigate = useNavigate();
   const Zudiolist = zudioProducts.filter((zudioo) => 
      zudioo.name.toLowerCase().includes(search.toLowerCase())
      )

  return (
    <>
    { search ? (
      <div className="brand-container">
      <h1>Zudio Search Result</h1>

      <div className="grid">
        {Zudiolist.map((item) => (
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
      <h1>Zudio Collection</h1>

      <div className="grid">
        {zudioProducts.map((item) => (
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
export {zudioProducts}
export default Zudio;