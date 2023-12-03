import { useState } from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom";
// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo h-28 pl-10 rounded-full"
      src={"https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"}
      alt="Food Fire Logo"
      title="Food Fire"
    />
    
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div className="header flex justify-between bg-slate-800 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 text-white">
         <Link to="/">
          <li className="px-3">Home</li>
          </Link> 
         <Link to="/about">
          <li className="px-3">About</li>
          </Link> 
         <Link to="/contact">
           <li className="px-3">Contact</li>
           </Link>
          <li className="px-3">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
