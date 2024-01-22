import React from 'react'

const Button = ({name}) => {
  return (
    <div >
        <button className='p-3 shadow-md w-max m-2 rounded-lg bg-gray-100'>{name}</button>
    </div>
  )
}

export default Button;