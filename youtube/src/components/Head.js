import React from 'react'
import { HamBurgur } from '../utils/constant';
import { Youtube_IMG } from '../utils/constant';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
const Head = () => {
 const dispatch = useDispatch();

  const toogleMenu = () => {
   dispatch(toggleMenu());
  }
  return (
    <div className='flex justify-between shadow-lg p-1'>
      {/*First Section will contain logo */}
      <div className='flex'>
      <img className='h-20 w-16 p-3 cursor-pointer' src={HamBurgur} alt="" onClick={()=>{toogleMenu()}}/>
      <img src={Youtube_IMG} className='h-20 w-44 ' alt="" />

      </div>
     <div className='flex  p-2'>
      <input type="text " placeholder='Search'  className='py-6 px-6 my-4 border border-gray-400 h-4 w-[400px] rounded-l-full ' />
     <button className='border border-gray-400 p-3  rounded-r-full h-max my-4'>Search</button>
     </div>

     <div>
        <button className='bg-red-500 text-white p-2 rounded-md'>Sign In</button>
     </div>
    </div>
  )
}

export default Head