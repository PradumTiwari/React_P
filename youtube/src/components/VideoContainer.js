import React, { useEffect ,useState} from 'react'
import {YouTube_Api} from '../utils/constant'
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';
const VideoContainer = () => {
   
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    getAllVideos();
  },[])
  
   const getAllVideos=async()=>{
    const response=await fetch(YouTube_Api);
    const data=await response.json();
    console.log(data);
    setVideos(data.items);
    console.log(videos);
    
    
   }

  return  (
    <div className='flex flex-wrap p-3'>
    {videos.map((video)=>(
             <VideoCard key={video.id}  video={video}/>
          ))}
   </div>
  )
}

export default VideoContainer