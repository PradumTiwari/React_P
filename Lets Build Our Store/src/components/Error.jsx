import { useRouteError } from "react-router-dom";

const Error=()=>{
    const error=useRouteError();
    console.log(error);
    return(
        <div>
            <h1>Hey Developer</h1>
            <h3>You Just Got Some Error Hope You will Find It</h3>
            <h4>{error.status+" :"+error.statusText}</h4>
        </div>
    )
}

export default Error;