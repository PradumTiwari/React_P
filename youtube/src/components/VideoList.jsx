import React, { useEffect,useState } from 'react'
import { Youtube_List } from '../utils/constant'
import SmallVideoCard from './SmallVideoCard';
import { Link } from 'react-router-dom';

const VideoList = () => {

    const [videos,setVideos]=useState([]);

    const fetchList=async()=>{
        const response=await fetch(Youtube_List);
    const data=await response.json();
    
    setVideos(data.items);
    console.log(videos);
    }


    useEffect(() => {
        fetchList();
    },[])

    

    
   
   

  return  (
    <div className='flex flex-col' >
     {videos.map((video)=>{
         <Link to={"/watch?v="+video.id} key={video.id}>   <SmallVideoCard key={video.id} video={video}/>
         </Link> 
     })}
    </div>
  )
}

export default VideoList