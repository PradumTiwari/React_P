import React, { useEffect ,useState} from 'react'

  import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName } from '../utils/helper'
import { makeid } from '../utils/helper'
const LiveChat = () => {
  
  const [message,setMessage]=useState('');

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
    <div className='h-[600px] p-4 rounded-2xl'>
      <div className='w-full h-[600px]  border border-slate-500 p-2 flex overflow-y-scroll flex-col-reverse rounded-xl'>
   {
    chatMessages.map((m,index)=>(
      <ChatMessage key={index} name={m.name} message={m.message} />
    
    ))
   }
   
  </div>
   <form className='flex' onSubmit={(e)=>{
    e.preventDefault();
    dispatch(
      addMessage(
        {
          name:"Pradum Tiwari",
          message:message
        }
      )
    )
    setMessage('');
   }}>
      <input  className='w-full p-2  border border-slate-600 rounded-xl' placeholder='Enter your message' type='text' value={message}
       onChange={(e)=>{
        setMessage(e.target.value);
       }}/>
      <button className='mx-2 px-2 bg-gray-100'>Submit</button>
   </form>
    </div>
  )
}

export default LiveChat