import React from "react";
import "./Brand.css";
import { useNavigate } from "react-router-dom";
const levisProducts = [
  { id: "levis1", name: "Levi's Classic Hoodie", price: 2800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxKYdiHTv7lnLr-x-ELV-O6PsoVjQEY1-Jw&s" },
  { id: "levis2", name: "Levi's Logo T-Shirt", price: 1200, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80" },
  { id: "levis3", name: "Levi's Denim Jacket", price: 4500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMr8pOYGgjWUma0mz22VgXcDBr-X1M0GJK7w&s" },
  { id: "levis4", name: "Levi's 511 Slim Jeans", price: 3200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLulCjWlRHB24_mtk1GA6CSSMJL-RusVh9A&s" },
  { id: "levis5", name: "Levi's Denim Shorts", price: 1800, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500&q=80" },
  { id: "levis6", name: "Levi's Leather Belt", price: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPiXyfYXjwXFfcnV6wg7B5-FZCZhUhCsr4A&s" },
  { id: "levis7", name: "Levi's Sneakers", price: 2500, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=80" },
  { id: "levis8", name: "Levi's Crew Sweatshirt", price: 2400, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=500&q=80" },
  { id: "levis9", name: "Levi's Polo Tee", price: 1600, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=500&q=80" },
  { id: "levis10", name: "Levi's Batwing Cap", price: 900, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80" },
  { id: "levis11", name: "Levi's Cargo Pants", price: 3500, image: "https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/v1/images/style/properties/Levis-Men-Olive-Green-Relaxed-Fit-Cargo-Trousers_dd2f71fb8736cdb4505428eab906bca5_images.jpg" },
  { id: "levis12", name: "Levi's Western Shirt", price: 2700, image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=500&q=80" },
  { id: "levis13", name: "Levi's Trucker Jacket", price: 5800, image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=500&q=80" },
  { id: "levis14", name: "Levi's Pocket T-Shirt", price: 1100, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=500&q=80" },
  { id: "levis15", name: "Levi's Black Jeans", price: 3400, image: "https://levis.co.nz/cdn/shop/files/levis-vintage-clothing-mens-1954-501-jeans-501540110_7_CL_BV_93d7e10d-1623-40a1-89d0-60b8d2c2bebf.jpg?v=1750403825" }
];

const Levis = ({ addToCart, purchase ,search}) => {
  const navigate = useNavigate();
  const Levislist = levisProducts.filter((leviss) => 
  leviss.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
     { search ? (
      <div className="brand-container">
      <h1>Levi's Search Result</h1>

      <div className="grid">
        {Levislist.map((item) => (
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
      <h1>Levi's Collection</h1>

      <div className="grid">
        {levisProducts.map((item) => (
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
export { levisProducts }
export default Levis;