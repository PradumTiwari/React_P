import React, { useEffect } from 'react'
import { Google_APIKEY } from '../utils/constant'

const SearchResults = ({s}) => {
    useEffect(()=>{
       getList();
    },[])

    const getList=async()=>{
        const data=await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+{s}+"&key="+Google_APIKEY);
        const json=await data.json();
        console.log(json);
    }
  return (
    <div>searchResults</div>
  )
}

export default SearchResults