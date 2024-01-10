import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'
const Profile = () => {
    const {user}=useContext(UserContext);
  
    if(!user){return <h2>Please Login</h2>}
  return <div>Welcome {user.username}</div>
}

export default Profile