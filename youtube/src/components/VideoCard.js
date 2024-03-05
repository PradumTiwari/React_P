import React from 'react'

const VideoCard = ({video,ad}) => {

    const {id,snippet,statistics}=video;
    const {thumbnails,title,channelTitle}=snippet;
   
   
  return (
    <div className='bg-gray-200 shadow-lg w-96 m-3 p-2 rounded-2xl'>
    <img src={thumbnails.medium.url} alt={id}  className='w-96 h-60 rounded-xl'/>
    <h2 className='text-2xl py-3' >{title}</h2>
    <h3>{channelTitle}</h3>
    {/* <div className='flex'>
    <p>{viewCount}</p>
    <p>{publishedAt}</p> */}
    {ad&&<p className='text-slate-600 text-xl'>ad</p>}
    </div>
  )
}

export const AdVideoCard=({video})=>{
  return(
    <div className='bg-slate-600 rounded-2xl'>
    <VideoCard video={video} ad={"add"}/>
    </div>
  )
}

export default VideoCard