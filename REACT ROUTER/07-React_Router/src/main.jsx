import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Profile from './components/Profile/Profile.jsx'
import Github from './components/Github/Github.jsx'
const router=createBrowserRouter([
  {path:'/',
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    }
    ,
    {
      path:"/Profile/:name",
      element:<Profile/>
    },
    {
      path:"/Github",
      element:<Github/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
