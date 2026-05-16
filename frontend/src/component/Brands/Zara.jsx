import React from "react";
import "./Brand.css";
import { useNavigate } from "react-router-dom";
const zaraProducts = [
  { id: "zara1", name: "Zara Linen Shirt", price: 2200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtGKBXsk6Kgvn_SLKAGyQu1CYdF3Cpn6_0w&s" },
  { id: "zara2", name: "Zara Basic T-Shirt", price: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1S63nVcFZ1qBij5gtvc69UsdwgtNrwV2NA&s" },
  { id: "zara3", name: "Zara Biker Jacket", price: 4500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTye8uMFDMhV-nC4t32ck_usQB5bACBryrw&s" },
  { id: "zara4", name: "Zara Slim Fit Jeans", price: 3000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqIdIwE8WFG_ba9PmtXKiuyivjtvV4aVu5A&s" },
  { id: "zara5", name: "Zara Oversized Hoodie", price: 2800, image: "https://static.zara.net/assets/public/cb89/37b6/57d240fcba99/61784a8f37b2/00761410898-e1/00761410898-e1.jpg?ts=1763046714141&w=352" },
  { id: "zara6", name: "Zara Wool Coat", price: 6000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZ00pVBTXL84pmKELDmT661RiwBz5NNDyyw&s" },
  { id: "zara7", name: "Zara Structured Blazer", price: 5500, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80" },
  { id: "zara8", name: "Zara Knit Sweatshirt", price: 2400, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKwzyOOCKy1xZ9crWkcTcLOaBwuBzCg6GCA&s" },
  { id: "zara9", name: "Zara Slim Polo", price: 1800, image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&q=80" },
  { id: "zara10", name: "Zara Chino Shorts", price: 1400, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80" },
  { id: "zara11", name: "Zara Oxford Shirt", price: 2600, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80" },
  { id: "zara12", name: "Zara Relaxed Cargo", price: 3200, image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=500&q=80" },
  { id: "zara13", name: "Zara Technical Tracksuit", price: 5000, image: "https://5.imimg.com/data5/ECOM/Default/2024/12/473133990/WP/CU/EG/152679762/whatsapp-image-2024-12-14-at-11-12-31-am-2-500x500.jpg" },
  { id: "zara14", name: "Zara Graphic Tee", price: 1700, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80" },
  { id: "zara15", name: "Zara Satin Dress", price: 3500, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80" }
];

const Zara = ({ addToCart, purchase , search}) => {
  const navigate = useNavigate();

  const Zaralist = zaraProducts.filter((zaraa) => 
    zaraa.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
   <>
   { search ? (
     <div className="brand-container">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Zara Search Result</h1>

      <div className="grid">
        {Zaralist.map((item) => (
          <div className="card" key={item.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
            <img 
              src={item.image} 
              alt={item.name} 
              style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '5px' }} 
            />
            <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{item.name}</h3>
            <p style={{ fontWeight: 'bold' }}>₹ {item.price}</p>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
              <button onClick={() => navigate(`/purchase/${item.id}`) }>Purchase</button>
            </div>
          </div>
        ))}
      </div>
    </div>
   ) : (
     <div className="brand-container">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Zara Collection</h1>

      <div className="grid">
        {zaraProducts.map((item) => (
          <div className="card" key={item.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
            <img 
              src={item.image} 
              alt={item.name} 
              style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '5px' }} 
            />
            <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{item.name}</h3>
            <p style={{ fontWeight: 'bold' }}>₹ {item.price}</p>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
              <button onClick={() => addToCart(item)}>Add To Cart</button>
              <button onClick={() => navigate(`/purchase/${item.id}`) }>Purchase</button>
            </div>
          </div>
        ))}
      </div>
    </div>
   )}
   </>
  );
};
export {zaraProducts}
export default Zara;