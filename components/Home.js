import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        
        <div style={{textAlign:"center"}}>
            <form>
                <h1 style={{textAlign:"center"}}>Welcome to Online Voting System</h1>
                
                <p style={{fontSize:"2rem",margin:"auto"}}>Email address</p>
                <input type="text" style={{marginTop:"20px"}}></input>
                <br></br>
                <p style={{fontSize:"2rem",lineHeight:"20px"}}>Password</p>
                <input type="password" ></input>
                

            </form>
            <Link to = "/voter">Registering as a Voter?</Link><br/>
            <Link to = "/contestant">Registering as a Contestant?</Link>
        </div>
    );

}

export default Home;