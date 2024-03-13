import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { Outlet } from 'react-router-dom';
const Body = () => {

  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  return (
    <div className='flex w-full'>
   {(isMenuOpen)&&<Sidebar/>}
   
    <Outlet/>

    </div>
  )
}

export default Body