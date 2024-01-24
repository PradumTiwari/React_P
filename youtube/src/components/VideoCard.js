import React from 'react'

const VideoCard = ({video}) => {

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
    </div>
  )
}

export default VideoCard