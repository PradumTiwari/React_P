import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./Components/Footer";
import About from "./components/About";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaunrantMenu";
import Profilefun from "./components/profile";
import Profile from "./components/profileClass";
import Instamart from "./components/Instamart";
import {useContext} from "react";
import UserContext from './utils/UserContext';
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [user, setUser] = useState({
    name:"Pradum Tiwari",
    Email:"Satendarpradum@gmail.com"
  })
  return (
    <Provider store={store}>
    <UserContext.Provider value={{user:user,setUser:setUser}}>
      <Header />
       <Outlet/> 
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Error />, 
    children:[
      {
      path:"/",
      element:<Body/>,
      },
      {
        path:"/Instamart",
        element:<Instamart/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      },
      { 
        path:"/about",
        element:<About />,
        children:[
          {
             path:"profile",            //ParentPAth/{path}
             element:<Profile/>,
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu />,
    
      },
    ],
  },
  
]) ;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);