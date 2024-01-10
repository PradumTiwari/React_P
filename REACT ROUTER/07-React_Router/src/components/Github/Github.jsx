import React, { useState } from 'react'
import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
const Github = () => {
  
      const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/hiteshchoudhary')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])

  return (
    <div className='bg-black flex'>
     
      <img src={data.avatar_url
} alt="" />
<div className='w-100'>
 <h1 className='text-slate-50 my-4'>Github Followers: {data.followers}</h1>
<h2 className='text-red-400'><span className='text-slate-50'>Twitter Username:      </span>{data.twitter_username
}</h2>
</div>
    </div>
  )
}

export default Github;