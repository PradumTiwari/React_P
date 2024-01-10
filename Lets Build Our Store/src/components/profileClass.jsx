import React from "react";

class Profile extends React.Component {

    
    constructor(props){
        //React Life Cycle Method
        super(props);

        //create state
        this.state={
            name:"Pradum Tiwari",
            age:21,
        };
        console.log("Constructor Called");
    }


    render(){
        console.log("first render");
        return<div> 
            <h1>Profile Made by Class Component</h1>
              <h2>This is Pradum this side</h2>
              <h3>Name: {this.state.name}</h3>
              <h4>Age is {this.state.age}</h4>
              <button onClick={()=>{
                this.setState({
                    age:this.state.age+1,
                })
              }}>Increase Age </button>
              <button onClick={()=>{
                this.setState({
                    age:this.state.age-1,
                })
              }}>Decrease Age</button>
        </div>
    }
}


export default Profile;