import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const brands = [
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    path: "/adidas"
  },
  {
    name: "Puma",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrzfU0WYD7NYas0ZfhH7HJDmC3_Nq5Fqsyg&s",
    path: "/puma"
  },
  {
    name: "Levi's",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6Gb3Uleo4rRfoH_7qnuwiuW6ThVH2Iw_ww&s",
    path: "/levis"
  },
  {
    name: "Zara",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKUYiS_AhEi17JmiVgTmt6ZVfVF9gmyj3vw&s",
    path: "/zara"
  },
  {
    name: "Zudio",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOta7X3SvlDw46-fTR2wfGvqcP2hwIbXEzig&s",
    path: "/zudio"
  },
  {
    name: "US Polo",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9H92hAZhoLxoZannS738xH-ugDJrn4Kz3tw&s",
    path: "/uspolo"
  },
  {
    name: "H&M",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    path: "/hm"
  },
   {
    name: "Rebok",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBV9ECGu56BTnGcBdz5xZF9ViM4NOexE_qRw&s",
    path: "/rebok"
  },
   {
    name: "Gucci",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEm0PRVlIUI2bVOppdCaTZXmac79m1c6b04g&s",
    path: "/gucci"
  },
   {
    name: "Filla",
    logo: "https://images.seeklogo.com/logo-png/5/2/fila-logo-png_seeklogo-54326.png",
    path: "/filla"
  }
];

const Home = ({search}) => {
  const brandslist = brands.filter((brand) => 
  brand.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
   <>
   { search ? (
     <div className="home-container">
      <h1>Search Result Brands</h1>

      <div className="brand-grid">
        {brandslist.map((brand, index) => (
          <Link to={brand.path} key={index} className="brand-card">
            <img src={brand.logo} alt={brand.name} />
            <h3>{brand.name}</h3>
          </Link>
        ))}
      </div>
    </div>
   ) : (
     <div className="home-container">
      <h1>Shop by Brand</h1>

      <div className="brand-grid">
        {brands.map((brand, index) => (
          <Link to={brand.path} key={index} className="brand-card">
            <img src={brand.logo} alt={brand.name} />
            <h3>{brand.name}</h3>
          </Link>
        ))}
      </div>
    </div>
   )}
   </>
  );
};

export default Home;