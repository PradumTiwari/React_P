import React, { useEffect ,useState} from 'react'
import {YouTube_Api} from '../utils/constant'
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

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
      
       <Link to={"/watch?v="+video.id} key={video.id}>  
        <VideoCard key={video.id} video={video}/>
         </Link> 
          ))}
   </div>
  )
}

export default VideoContainer