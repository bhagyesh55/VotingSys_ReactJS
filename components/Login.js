import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
// import './CSS/Header.css'

function Home(){

    const navigate = useNavigate();
    const [emailID, setEmailID] = useState("");
    const [password, setPassword] = useState("");

    const setYourEmailID =(e)=> {
      setEmailID(e.target.value);
    }

    const setYourPassword = (e)=>{
      setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const user = {emailID,password};
      console.log(user);
      axios.get('http://localhost:8080/voters').then((response)=>{
        console.log(response.data[0]);
        for(let i = 0;i<response.data.length;i++){
          if(emailID==='admin' && password==='admin123'){
            console.log(response.data[i].emailID,response.data[i].password)
            window.location.assign("/admin");
            break;  
          }else if (emailID===response.data[i].emailID && password===response.data[i].password){
            console.log(response.data[i].emailID,response.data[i].password)
            navigate('/voterhome')
            break;
          } else{
            
            navigate('/')
            
          }
        }
      })
    }

    const myStyle = {
      backgroundImage: "url('https://www.cylumena.com/wp-content/uploads/2019/12/INS-GRD-2x-Online-Voting.png')",
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position:'fixed'
    }

    return(
      <div style={myStyle}>

<div  className="Header-form-container">
      <form className="Header-form">
        <div className="Header-form-content">
          <h3 className="Header-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label><br/>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e)=>setYourEmailID(e)}
              
            /><br/>
            <label>Password</label><br/>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=>setYourPassword(e)}
             
            />
          </div>
          <div style={{lineHeight:'70px'}}>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <Link to = "/voter">Registering as a Voter?</Link><br/>
          
        </div>
      </form>
    </div> 

      </div>

    );     
}

    

    



export default Home;
