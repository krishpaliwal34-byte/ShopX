import React from "react";
import "./Brand.css";
import { useNavigate } from 'react-router-dom'
const gucciProducts = [
  { id: "gucci1", name: "Gucci T-Shirt", price: 1200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KX3LUnWEd2r-FIioIKitPXkLv-0WoSuomA&s" },
  { id: "gucci2", name: "Gucci t-Shirt", price: 1800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCXQ8D-EZwV0WnKof1rHIfReN--gEZo5SWg&s" },
  { id: "gucci3", name: "Gucci Jeans", price: 2500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAauY2048X7qjVS9BLIwAd00t7dtse9w-RsQ&s" },
  { id: "gucci4", name: "Gucci Hoodie", price: 2200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cE2AIehJHxh327qU7UIVXfJk5LfL86ne8Q&s" },
  { id: "gucci5", name: "Gucci Jacket", price: 3500, image: "https://image.gucci.com/assets/gucci/d6/eb/d6ebc30db4bf67c711f08bfaadb56aec79e8960a.jpg?imwidth=2160" },
  { id: "gucci6", name: "Gucci Shorts", price: 900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcirWJOQe5NKwp7ZUWvEI2kYJOKoRI7lVhvA&s" },
  { id: "gucci7", name: "Gucci Track Pants", price: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3xI4BLDc1c-UFLXc4FECmd8HNgSss3Uc4w&s" },
  { id: "gucci8", name: "Gucci Sweatshirt", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-nQSLy37JfKN0M8g3lbC92CLWDO9yiZtyg&s" },
  { id: "gucci9", name: "Gucci Polo T-Shirt", price: 1600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4R3_QhRvXxRb4XrfXc7Mp2rhc-xaNEauKrA&s" },
  { id: "gucci10", name: "Gucci Cap", price: 700, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliKB-YG2a9hvd4AirqatubzgpclUMsncexw&s" },
  { id: "gucci11", name: "Gucci Dress", price: 2800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrzpm-eQE4Y3ZaTe-xiWSLFNMZqLWmy6mLA&s" },
  { id: "gucci12", name: "Gucci Blazer", price: 4000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAYUkZbH31_Gp4EcWjqtIU0doB0Yqe_jvyw&s" },
  { id: "gucci13", name: "Gucci Leather Jacket", price: 5000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSW6vTKGPfzeo5vFaMI3GN_zWreKUGZX5gtA&s" },
  { id: "gucci14", name: "Gucci Oversized T-Shirt", price: 1400, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFJA_enzOl5vAAgMlpRydk3_8JN0SdUAkmg&s" },
  { id: "gucci15", name: "Gucci Tracksuit", price: 3200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlisLWNqAUIlp5wkELlTKU53vpL6kgJO1qXw&s" }
];      

const Gucci = ({ addToCart, purchase ,search}) => {
  const navigate = useNavigate();
  const Guccilist = gucciProducts.filter((gucii) => 
  gucii.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
   <>
   { search ? (
     <div className="brand-container">
      <h1>Gucci Search Result</h1>

      <div className="grid">                   
        {Guccilist.map((item) => (
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
      <h1>Gucci Collection</h1>

      <div className="grid">                   
        {Guccilist.map((item) => (
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
export { gucciProducts }
export default Gucci;