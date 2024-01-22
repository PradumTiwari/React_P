import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64 p-5 shadow-lg h-screen'>
     <ul className='py-2 my-3'>
      <li>Home</li>
      <li>Shorts</li>
      <li>Subscription</li>
     </ul>

     <ul className='py-2 my-3'>
      <h1 className='text-3xl'>Subscription</h1>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
     </ul>
   
     <ul className='py-2 my-3'>
      <h1 className='text-3xl'>You </h1>
      <li>Your Channel</li>
      <li>History</li>
      <li>Your Videos</li>
      <li>Watch Later</li>
      <li>Show More</li>
     </ul>




      </div>
  )
}

export default Sidebar