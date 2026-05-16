import React from "react";
import "./Brand.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const adidasProducts = [
  { id: "adidas1", name: "Adidas Hoodie", price: 2500, image: "https://m.media-amazon.com/images/I/51Uyupw7zUL._AC_UY1100_.jpg" },
  { id: "adidas2", name: "Adidas T-Shirt", price: 1200, image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/75b77b0f5f7b41a5bc7eaf0900e9c3ec_9366/Essentials_Single_Jersey_Big_Logo_Tee_Black_IC9347_01_laydown.jpg" },
  { id: "adidas3", name: "Adidas Jacket", price: 3500, image: "https://contents.mediadecathlon.com/m18150422/35e984ebb629ecd39af38572239a285b/m18150422.jpg" },
  { id: "adidas4", name: "Adidas Track Pants", price: 1800, image: "https://assets.ajio.com/medias/sys_master/root/20241106/aoGT/672b55e3260f9c41e8c3046a/-473Wx593H-410460526-black-MODEL.jpg" },
  { id: "adidas5", name: "Adidas Shorts", price: 1000, image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/7d7d705fdfb7431cb3e82bfd3cce16d7_9366/Tiro_24_Shorts_Kids_Black_IR9368_01_laydown.jpg" },
  { id: "adidas6", name: "Adidas Shoes", price: 4000, image: "https://media.gettyimages.com/id/458068097/photo/adidas-superstar.jpg?s=612x612&w=gi&k=20&c=bxVFKNZi-cDWTlR5j3ScWcZrY2ux3MwkKwc2vxZvn3g=" },
  { id: "adidas7", name: "Adidas Sneakers", price: 4500, image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/20702914/2023/2/8/76d17adb-b015-42d4-9eb0-6acf1105d2c01675845164998-ADIDAS-Men-Sports-Shoes-3141675845164707-1.jpg" },
  { id: "adidas8", name: "Adidas Sweatshirt", price: 2200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72lf2e6OxQeF3a3I8wPXI8phj2PYP4FJEJA&s" },
  { id: "adidas9", name: "Adidas Polo T-Shirt", price: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejXlI6P3ERbBCaXAtMHNimGVfj8TvjLFBZg&s" },
  { id: "adidas10", name: "Adidas Cap", price: 800, image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/84a86cd02da44963aead665c8aabb477_9366/Adicolor_Classic_Trefoil_Baseball_Cap_White_JC6025_01_00_standard.jpg" },
  { id: "adidas11", name: "Adidas Gym Wear", price: 2000, image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb8c8aed3fac4f79a0b3af4a00989270_9366/Train_Essentials_Training_Tee_Black_IC7428_01_laydown.jpg" },
  { id: "adidas12", name: "Adidas Sports Shoes", price: 5000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHThbkNN5tjAG8iMFubI9-3Bihpew0TfIzmA&s" },
  { id: "adidas13", name: "Adidas Windbreaker", price: 3200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkUl39XYXuDxoaaPP4j-P_mHuZKrsgBm5eg&s" },
  { id: "adidas14", name: "Adidas Jersey", price: 1800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_Op4srZmypPUIB7cT3mDvmggued6ETJkQQ&s" },
  { id: "adidas15", name: "Adidas Tracksuit", price: 6000, image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3ec3e15ab9b843b8bcf4af110121b9a3_9366/Basic_3-Stripes_Tricot_Track_Suit_Black_IC6747_01_laydown.jpg" }
];

const Adidas = ({ addToCart, purchase ,search}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const adidaslist = adidasProducts.filter((adidass) => 
   adidass.name.toLowerCase().includes(search.toLowerCase())
  ) 


  return (
   <>
   { search ? (
     <div className="brand-container">
      <h1>Result Adidas</h1>

      <div className="grid">
        {adidaslist.map((item) => (
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
      <h1>Adidas Collection</h1>

      <div className="grid">
        {adidasProducts.map((item) => (
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
export { adidasProducts }
export default Adidas;