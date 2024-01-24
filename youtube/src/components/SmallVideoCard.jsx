import React from 'react'

const SmallContainer = ({video}) => {
  const {snippet,statistics}=video;
  const {thumbnails,title,channelTitle,publishedAt}=snippet;
  const {ViewCount}=statistics;
  return (
    <div className='bg-gray-200 shadow-lg w-96 m-3 p-2 rounded-2xl'>

   <div><img src={thumbnails.high.url} alt="" /></div>
    <div>
      <div>{title}</div>
      <div>{channelTitle}</div>
      <div className='flex'>
        <div>{ViewCount}</div>
        <div>{publishedAt}</div>
      </div>
    </div>
    </div>
  )
}

export default SmallContainer