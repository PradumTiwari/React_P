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
   
    <div>
     <VideoList/>
     W
     
     </div>
  )
}

export default WatchPage