import React from "react";
import "./Brand.css";

const womenProducts = [
  { id: 1, name: "Women Dress", price: 2500, image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg" },
  { id: 2, name: "Women Top", price: 1200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2YDV89sRqkOLRg60EXe0RAPr6Ia9e_ZHsg&s" },
  { id: 3, name: "Women Jeans", price: 2200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDHOe55buLXA5x0GrnPR-AEaXY9IchzsrUg&s" },
  { id: 4, name: "Women Jacket", price: 3000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnczMM8D_SuNjN7KpgQOq8d8KhBY56F2GgPA&s" },
  { id: 5, name: "Women Hoodie", price: 2000, image: "https://www.rockit.co.in/cdn/shop/products/2230101738-5-36_1.jpg?v=1703672412" },
  { id: 6, name: "Women Skirt", price: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_g28CYhEhCToNY6_s6fiwtVE3sSkFDQgpg&s" },
  { id: 7, name: "Women Kurti", price: 1800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AkPK0Ot3SouE12jY5paXrdBSSXMb5Div2g&s" },
  { id: 8, name: "Women Saree", price: 3500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4nmJvdyPbkmNasEBSHw__PQzCygkbnDGiA&s" }
];

const Women = ({ addToCart, purchase , search}) => {
  const womenlist = womenProducts.filter((womenn) => 
  womenn.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
    { search ? (
      <div className="brand-container">
      <h1>Women's Search Result</h1>

      <div className="grid">
        {womenlist.map((item) => (
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
    ) : (
      <div className="brand-container">
      <h1>Women Collection</h1>

      <div className="grid">
        {womenProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>

            
            <button onClick={() => purchase(item)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    )}
    </>
  );
};

export default Women;