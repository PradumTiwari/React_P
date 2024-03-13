import React, { useEffect } from 'react'

  import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName } from '../utils/helper'
import { makeid } from '../utils/helper'
const LiveChat = () => {

  const dispatch=useDispatch();
  const chatMessages=useSelector((store)=>store.chat.item)


  useEffect(()=>{
    const interval=setInterval(()=>{
     
      dispatch(addMessage({
        name:generateRandomName(),
        message:makeid(10),
      })
      );
    },2000)
    
    return ()=>clearInterval(interval)

  })


  return (
    <div className='w-full h-[600px]  border border-slate-500 p-2 flex overflow-y-scroll flex-col-reverse'>
   {
    chatMessages.map((m,index)=>(
      <ChatMessage key={index} name={m.name} message={m.message} />
    
    ))
   }
  </div>
  )
}

export default LiveChat