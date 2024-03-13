import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import VideoList from './VideoList';
import LiveChat from './LiveChat';
import CommentsContainer from './CommentsContainer';
import Description from './Description';
const WatchPage = () => {

  const [params]=useSearchParams();
 console.log(params.get("v"));


  const dispatch=useDispatch();
   useEffect(() => {
    dispatch(closeMenu());
   },[])
  return (
   
    <div className='w-full h-full flex'>
     <div className='w-[70%]  flex flex-col border border-slate-700'>
     <iframe className='p-2 mt-5      ml-32  rounded-2xl' 
     width="1000" height="600" src={"https://www.youtube.com/embed/"+params.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
     <CommentsContainer/>
     </div>
    <div className='h-full w-[30%]'> <LiveChat  /></div>
     </div>
  )
}

export default WatchPage