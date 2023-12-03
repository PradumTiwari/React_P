import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./components/About";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaunrantMenu";
import Profilefun from "./components/profile";
import Profile from "./components/profileClass";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
       <Outlet/> 
      <Footer />
    </React.Fragment>
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
    ],
  },
  {
    path:"/restaurant/:id",
    element:<RestaurantMenu />,

  },
]) ;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);