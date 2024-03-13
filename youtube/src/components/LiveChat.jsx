import React, { useEffect } from 'react'

  import ChatMessage from './ChatMessage'
import { useDispatch } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
const LiveChat = () => {

  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(addMessage({name:"Pradum Tiwari",message:"Not Your Big Fan"}))
  })


  return (
    <div className='w-full h-[600px]  border border-slate-500 p-2'>
<ChatMessage name={"Pradum Tiwari"} message={"Not Your Big Fan"}/>
    </div>
  )
}

export default LiveChat