import React from 'react'
import { useState } from 'react';

const commentsData=[
    {
        name:"Chand Kumar",
        text:"ka kr rhe ho be",
        replies:[
            {
                name:"Pradum Tiwari",
                text:"Kuch Nhi tum hi batao",
                replies:[
                    {
                        name:"Monu Kumar",
                        text:"Accha Apne Apne Me bat kar rha to",
                        replies:[]
                    },
                ]
            } ,

        ],
    },
    {
        name:"Arbind Kumar",
        text:"ka kr rhe ho be",
        replies:[
            {
                name:"Sonu Pandey",
                text:"Kuch Nhi tum hi batao",
                replies:[
                    {
                        name:"Aman Pandey",
                        text:"Accha Apne Apne Me bat kar rha to",
                        replies:[]
                    },
                ]
            } ,

        ]
    }
]


const CommentsContainer = () => {
   
     
   return (
        <div className='m-5 p-7 '>

        <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList comments={commentsData}/>
    </div>
  )
}

const Comment=({data})=>{
    return(
        <div className='flex p-5'>
            <img className='h-16 w-15' src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="userImg" />
            <div>
                <p className=' p-2 text-2xl bg-slate-200 rounded-xl m-1 w-full'>{data.name}</p>
                <p className='p-2 font-serif text-xl'>{data.text}</p>
            </div>
        </div>
    )
}

const CommentList=({comments})=>{
    const [reply,setreply]=useState(false);
    const [show,setShow]=useState(false);
    return comments.map((comment,index)=>(
                        <div className='my-5 py-5 shadow-2xl  ' key={index}>
                       <Comment data={comment}/>
                        {(!show)&&<button className='bg-slate-300 rounded-md shadow-lg p-2 m-5' onClick={()=>{setreply(false) ;setShow(true)}}>"Show Reply"</button>}
                        {(show)&&<button className='bg-slate-300 rounded-md shadow-lg p-2 m-5' onClick={()=>{setreply(true) ;setShow(false)}}>"Hide Reply"</button>}
                     <div className='pl-5 border border-l-black ml-5 '> {show&& <CommentList comments={comment.replies}/>}
                     </div>
                    </div>
                    
    ))
}



export default CommentsContainer