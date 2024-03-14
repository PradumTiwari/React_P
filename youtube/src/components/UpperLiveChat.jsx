import React from 'react'
import { FaAngleDown } from "react-icons/fa";

const UpperLiveChat = () => {
  return (
    <div>
        <div className='flex p-2 justify-between'>
            <div className='flex'>
              <span className='text-2xl'>Top Chat</span>
              <div className='items-center p-1 text-2xl'> <FaAngleDown/></div>
            </div>
            <div className='text-3xl'>
            <span className='ml-2'> :</span>
            <span className='font-bold m-2'> X</span>
                
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default UpperLiveChat