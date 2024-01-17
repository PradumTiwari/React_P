import React from 'react'

import { IMG_CDN_URL } from "../../constant";
function CartItem({
    name,defaultPrice,description,imageId,Price
}) {
  return (
    <div className='shadow-2xl rounded-xl   text-slate-950 m-5  bg-[#DCF2F1]   w-72 h-auto'>
      <img src={IMG_CDN_URL+imageId} alt="Food Image" className=''/>
      <h2 className='font-bold py-3 px-1'>Name: {name}</h2>
      <h3><span className='font-bold'>Description:--</span>{description}</h3>
      <h4><span>Price :</span>{(defaultPrice||Price)?defaultPrice/100:Price/100}Rs</h4>
    </div>
  )
}

export default CartItem