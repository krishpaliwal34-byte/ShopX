import React, { useState, useEffect } from "react";
import { Link , useLocation, useNavigate} from "react-router-dom";
import "./nav.css";

const Nav = ({setsearch , cart}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setEmail("");
  };

  return (
    <nav className="navbar">
      <h2>ShopX</h2>

      {/* Search */}
      <div className="search-box">
        <input type="text" placeholder="Search..." onChange={(e) => setsearch(e.target.value)} />
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
         <Link to="/cart">Cart<i class="ri-shopping-bag-fill"></i></Link>
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/shoes">Shoes</Link>

        {email ? (
          <>
            <span className="user-email">{email}</span>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <i className="ri-close-line"></i>
        ) : (
          <i className="ri-menu-line"></i>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/cart">Cart<i class="ri-shopping-bag-fill"></i></Link>
          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/shoes">Shoes</Link>

          {email ? (
            <>
              <span className="user-email">{email}</span>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;