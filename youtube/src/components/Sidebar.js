import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-64 p-5 shadow-lg h-screen'>
     <ul className='py-2 my-3'>
      <li className=' text-xl '> Home</li>
      <li className='text-xl py-2'>Shorts</li>
      <li className='text-xl '>Subscription</li>
     </ul>

     <ul className=' my-3'>
      <h1 className='text-3xl'>Subscription</h1>
      <li className='text-xl py-2'>Music</li>
      <li className='text-xl '>Sports</li>
      <li className='text-xl py-2 '>Gaming</li>
      <li className='text-xl'>Movies</li>
     </ul>
   
     <ul className='py-2 my-3'>
      <h1 className='text-3xl'>You </h1>
      <li className='text-xl py-2'>Your Channel</li>
      <li className='text-xl'>History</li>
      <li className='text-xl py-2'>Your Videos</li>
      <li className='text-xl'>Watch Later</li>
      <li className='text-xl py-2'>Show More</li>
     </ul>




      </div>
  )
}

export default Sidebar