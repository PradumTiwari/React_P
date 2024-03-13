import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center'> 
    <img className='h-16 w-15 ' src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="userImg" />
    <span className='font-bold p-2'>{name}</span>
   <span>{message}</span>
    
    </div>
  
 )
}

export default ChatMessage