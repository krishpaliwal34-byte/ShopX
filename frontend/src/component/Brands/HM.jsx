import React from "react";
import "./Brand.css";
import { useNavigate } from 'react-router-dom'
const hmProducts = [
  { id: "hm1", name: "H&M T-Shirt", price: 1200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KX3LUnWEd2r-FIioIKitPXkLv-0WoSuomA&s" },
  { id: "hm2", name: "H&M Shirt", price: 1800, image: "https://image.hm.com/assets/hm/ae/2e/ae2ee0a97b9e563c11f08785b4b6b92b572a26c3.jpg?imwidth=2160" },
  { id: "hm3", name: "H&M Jeans", price: 2500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAauY2048X7qjVS9BLIwAd00t7dtse9w-RsQ&s" },
  { id: "hm4", name: "H&M Hoodie", price: 2200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cE2AIehJHxh327qU7UIVXfJk5LfL86ne8Q&s" },
  { id: "hm5", name: "H&M Jacket", price: 3500, image: "https://image.hm.com/assets/hm/d6/eb/d6ebc30db4bf67c711f08bfaadb56aec79e8960a.jpg?imwidth=2160" },
  { id: "hm6", name: "H&M Shorts", price: 900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcirWJOQe5NKwp7ZUWvEI2kYJOKoRI7lVhvA&s" },
  { id: "hm7", name: "H&M Track Pants", price: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3xI4BLDc1c-UFLXc4FECmd8HNgSss3Uc4w&s" },
  { id: "hm8", name: "H&M Sweatshirt", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-nQSLy37JfKN0M8g3lbC92CLWDO9yiZtyg&s" },
  { id: "hm9", name: "H&M Polo T-Shirt", price: 1600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4R3_QhRvXxRb4XrfXc7Mp2rhc-xaNEauKrA&s" },
  { id: "hm10", name: "H&M Cap", price: 700, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliKB-YG2a9hvd4AirqatubzgpclUMsncexw&s" },
  { id: "hm11", name: "H&M Dress", price: 2800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrzpm-eQE4Y3ZaTe-xiWSLFNMZqLWmy6mLA&s" },
  { id: "hm12", name: "H&M Blazer", price: 4000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAYUkZbH31_Gp4EcWjqtIU0doB0Yqe_jvyw&s" },
  { id: "hm13", name: "H&M Coat", price: 5000, image: "https://image.hm.com/assets/hm/4a/f5/4af54e063c1594e8597d09ddcfe13cfff1f397f1.jpg?imwidth=2160" },
  { id: "hm14", name: "H&M Oversized T-Shirt", price: 1400, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFJA_enzOl5vAAgMlpRydk3_8JN0SdUAkmg&s" },
  { id: "hm15", name: "H&M Tracksuit", price: 3200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlisLWNqAUIlp5wkELlTKU53vpL6kgJO1qXw&s" }
];      

const HM = ({ addToCart, purchase ,search}) => {
  const navigate = useNavigate();
  const hmlist = hmProducts.filter((hmm) => 
  hmm.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
   <>
   { search ? (
     <div className="brand-container">
      <h1>H&M Search Result</h1>

      <div className="grid">                   
        {hmlist.map((item) => (
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
      <h1>H&M Collection</h1>

      <div className="grid">                   
        {hmProducts.map((item) => (
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
export { hmProducts }
export default HM;