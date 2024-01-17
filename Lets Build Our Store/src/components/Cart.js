import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { clearCart } from '../utils/cartSlice';

function Cart() {

  const dispatch=useDispatch();
const clearAll=()=>{
  dispatch(clearCart());
}
//Isme we want all the cards info that is stored in items array
//we can get the items array by using useSelector hook
//Inside useSelctor hook we have to define which part of cart we want to access
const cartItems=useSelector(store=>store.cart.items);
// console.log(cartItems[0].card.info)
  return (
    <>
    <h1 className='bg-slate-100 w-max p-4'>Cart Items -- {CartItem.length} </h1>
    <button className='bg-red-400 text-gray-50 p-3 m-2 rounded-md' onClick={()=>{clearAll()}}>Clear All</button>
    <div className='flex justify-evenly'>
     {
      (cartItems.length===0)?
      <div className='text-slate-200 font-bold text-3xl '>Please Add Items to Buy</div>
      :cartItems.map((item,index)=>{
        
        return(
          <div className='flex' key={index}>
          <CartItem {...item.card.info}/>
          </div>
        )
      })
     }
    
    </div>
    </>
  )
}

export default Cart