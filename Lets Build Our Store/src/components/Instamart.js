
import React,{useState} from 'react'

const Section=({title,Information,show,Setshow})=>{
  
    
    return(

      <div className='border-4 border-slate-950'>
        <h2 className='text-lg font-bold'>{title}</h2>
        
        {(show)?<button className='bg-yellow-600 rounded-lg px-4 py-2 font-bold ' onClick={()=>{
            Setshow=0;
        }}>Hide</button>:<button className='bg-green-500 rounded-lg px-4 py-2 font-bold ' onClick={()=>{
            Setshow=1;
        }}>Show</button>}

        <p>
           {show?Information:""}</p>
      </div>
    )

}

const Instamart = () => {
    const [config,setConfig]=useState({showAbout:true,showTeam:true})
  return (
    <>
    <h1 className='text-lg font-bold px-1 bg-slate-400'>Instamart</h1>
    <div className='bg-slate-100'>
       
        <div className=''>
            <Section title='About Instamart' Information='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' show={show} Setshow={()=>{setConfig({showAbout:true,showTeam:false})}} />
          <Section title='Team Instamart' Information='This is about the team Instamart who help us to develop and to detecxt how the team is usesd and who formulated it' show={true} Setshow={()=>{setConfig({showAbout:true,showTeam:false})} }/>
        </div>

    </div>
</>
  )
}

export default Instamart