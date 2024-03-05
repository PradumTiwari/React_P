import React, { useEffect, useState } from 'react'
import { HamBurgur, YOUTUBE_SEARCH_API } from '../utils/constant';
import { Youtube_IMG } from '../utils/constant';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
const Head = () => {

const [searchQuery,setSearchQuery]=useState("");
const [suggestion,setSuggestion]=useState([]);
console.log(searchQuery)
 const dispatch = useDispatch();

   useEffect(()=>{
       const timer=setTimeout(()=>getSearchSuggestion(),200);
       return()=>{
       clearTimeout(timer);
         }
     },[searchQuery])



  const getSearchSuggestion=async()=>{
     console.log(searchQuery)
     const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
     const json=await data.json();
     setSuggestion(json[1]);
     console.log("suggest",suggestion)
  }

  const toogleMenu = () => {
   dispatch(toggleMenu());
  }
  return (
      <div className='flex justify-between shadow-lg p-1 h-max'>
      {/*First Section will contain logo */}
      <div className='flex'>
      <img className='h-20 w-16 p-3 cursor-pointer' src={HamBurgur} alt="" onClick={()=>{toogleMenu()}}/>
      <img src={Youtube_IMG} className='h-[84px] w-44 p-0 ' alt="" />

      </div>
      
      <div className='flex'>
      <div>
      <input
       type="text " placeholder='Search' 
        className='py-6 px-6  border border-gray-400 h-6 w-[400px] rounded-l-full ' value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} />
       <button className='border border-gray-400 p-3  rounded-r-full h-[51px] my-4'>Search</button>
       <div className='fixed bg-slate-200  w-[400px] text-lg shadow-lg rounded-lg cursor'>
        <ul>
          {suggestion &&suggestion.map((s)=>(
                   <li key={s} className=' py-2 shadow-sm hover:bg-gray-300 px-2 text-slate-900'></li>
          ))}
          
        </ul>
      </div>
     </div>
     </div>
     
     <div>
        <button className='bg-red-500 text-white p-2 rounded-md'>Sign In</button>
     </div>
    </div>
  )
}

export default Head