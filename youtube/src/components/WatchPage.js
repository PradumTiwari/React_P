import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import VideoList from './VideoList';
const WatchPage = () => {

  const [params]=useSearchParams();
 console.log(params.get("v"));


  const dispatch=useDispatch();
   useEffect(() => {
    dispatch(closeMenu());
   },[])
  return (
   
    <div className=' flex  '>
     <div className=''>
     <iframe className=' p-2  my-12 mx-32  rounded-2xl' 
     width="1200" height="700" src="https://www.youtube.com/embed/8XN5lUjfYK8?si=Z_-267YxZg8mGAnn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
     </div>
     
     </div>
  )
}

export default WatchPage