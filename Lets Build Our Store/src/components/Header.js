import { useState ,useContext} from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom";
import UserContext from '../utils/UserContext';
import { useSelector } from "react-redux";


// Title component for display logo
const Title = () => (
  <a href="/">
    <img data-testid="logo"
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
 
  const {user,setUser} = useContext(UserContext);

  const cartItems=useSelector(store=>store.cart.items);
  
  console.log(cartItems)


// const cartItems=useSelector(store =>store.cart.cartItems);

  return (
    <div className="header flex justify-between bg-slate-800 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 text-white">
         <Link to="/">
          <li className="px-5">Home</li>
          </Link> 
         <Link to="/about">
          <li className="px-5">About</li>
          </Link> 
         <Link to="/contact">
           <li className="px-5">Contact</li>
           </Link>
           <Link to="/Cart">
           <li className="px-5">Cart Items:--{cartItems.length}</li>
           </Link>
           <Link to="/Instamart">
           <li className="px-5">Instamart</li>
           </Link>
           <Link to="/Instamart">
           <li className="px-5">{user.name}</li>
           </Link>
          <li className="px-5">
            <i className="fa-solid fa-cart-shopping text-slate-50 bg-slate-50"></i>
          </li>
          <li>
          
            {/* use conditional rendering for login and logout */}
            <div className="scroll-px-28 my--10">
            {isLoggedin ? (
              <button
                className="logout-btn bg-red-900 p-4 rounded-md"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn bg-lime-600 p-4 rounded-md" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
