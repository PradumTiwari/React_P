import '../../About.css';
import { Outlet } from 'react-router-dom';
import ProfileFun from "../components/Profile";
import Profile from './profileClass';
const About=()=>{
    return(
        <div className="About"> 
            <h1>About Us Page</h1>
         <p>
            {"       "}
            This is the Page Course Chapter 07 -Finding the path
         </p>
<ProfileFun/>
         <Outlet/>
        </div>
    );
};

export default About;