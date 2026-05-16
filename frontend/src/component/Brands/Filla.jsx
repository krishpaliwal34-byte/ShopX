import React from "react";
import "./Brand.css";
import { useNavigate } from "react-router-dom";

const FillaProducts = [
  { id: "Filla1", name: "Filla T-Shirt", price: 499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU5VqQmPJbcafEo25s7l-MLTxAlAaH4hJPg&s" },
  { id: "Filla2", name: "Filla Shirt", price: 799, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyVDCp2uxCYaDc2iRltwdcrNowwFnuAFMfQ&s" },
  { id: "Filla3", name: "Filla Jeans", price: 1299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5b27kmqP7gd6Yi6xDw9TN_DHqoo_B0mB6dQ&s" },
  { id: "Filla4", name: "Filla Hoodie", price: 1499, image: "https://m.media-amazon.com/images/I/51c3PB1vi3L._AC_SR175,263_QL70_.jpg" },
  { id: "Filla5", name: "Filla Jacket", price: 1999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5T3Y5GdhVUNWORz17S_pKDpA4qiyOmINzw&s" },
  { id: "Filla6", name: "Filla Shorts", price: 699, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIpVMcT3IzRg3RvToqnPsUZJW24CzbwUSug&s" },
  { id: "Filla7", name: "Filla Track Pants", price: 999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HETG21g0t6Z69_8OBD_0PcvpCqKkbIxcmQ&s" },
  { id: "Filla8", name: "Filla Kurta", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtILjPvmfY1oLvzWEr0fpNzDcJYStM-KnYMQ&s" },
  { id: "Filla9", name: "Filla Polo T-Shirt", price: 599, image: "https://i.pinimg.com/236x/c7/52/84/c752842e1b03ffeb57e5731024d61311.jpg" },
  { id: "Filla10", name: "Filla Sweatshirt", price: 1199, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfwLe6Y4_d87nCZ0kz49oVhP9osRSZYXtMg&s" },
  { id: "Filla11", name: "Filla Dress", price: 1399, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpC0YPHbYoZUhvl7sZMWv6aEdw2DQ7e9yo_Q&s" },
  { id: "Filla12", name: "Filla Ethnic Wear", price: 1599, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fmq08cazlULgRy66OZBUgzRclyxc4adA1A&s" },
  { id: "Filla13", name: "Filla Night Wear", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiiuYPq31XwXxql2fMhTc4B_JXlILLeBUWKA&s" },
  { id: "Filla14", name: "Filla Casual Shirt", price: 749, image: "https://img.freeup.app/fit-in/600x600/filters:upscale()/1b0559ea6530c475404e0401ea2dd7da.jpg" },
  { id: "Filla15", name: "Filla Tracksuit", price: 1799, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNs_jnqveF4E7WpcB0i7KAzQYndzBBnJy7g&s" }
];

const Filla = ({ addToCart, purchase , search }) => {
  const navigate = useNavigate();
   const Fillalist = FillaProducts.filter((Fillao) => 
      Fillao.name.toLowerCase().includes(search.toLowerCase())
      )

  return (
    <>
    { search ? (
      <div className="brand-container">
      <h1>Filla Search Result</h1>

      <div className="grid">
        {Fillalist.map((item) => (
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
      <h1>Filla Collection</h1>

      <div className="grid">
        {FillaProducts.map((item) => (
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
export {FillaProducts}
export default Filla;