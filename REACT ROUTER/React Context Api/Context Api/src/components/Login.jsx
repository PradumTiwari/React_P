import React,{useState,useContext} from 'react'
import Usercontext from '../Context/UserContext'
const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const {setUser}=useContext(Usercontext)
    const handleSubmit=()=>{

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        <input type="text" placeholder='Password' value={[password]} onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={handleSubmit}>Submit</button>
        </div>
  )
}

export default Login