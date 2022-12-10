import { useState } from "react";
import axios from "axios";

function Voter(){
    const [voter, setVoter] = useState({
        voterID:0.0,
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        emailID: "",
        mobileNumber: 0.0, 
        passwrd: "",
        contestantID: 0.0
    });

    function postVoter(e){
        e.preventDefault();
        let requestBody = voter
        axios.post("http://localhost:8080/voter",requestBody).then(response=>{console.log(response)})
    }
    return(
        <div>
            <h1>Enter your details</h1>
            <form>
                    <div>
                        <label>First Name</label>
                        <input type ="text" value = {voter.firstName} onChange ={(e)=>{setVoter({...voter, firstName: e.target.value})}}/><br/>
                        <label>Last Name</label>
                        <input type ="text" value = {voter.lastName} onChange ={(e)=>{setVoter({...voter, lastName: e.target.value})}}/><br/>
                        <label>Gender</label>
                        <input type ="text" value = {voter.gender} onChange ={(e)=>{setVoter({...voter, gender: e.target.value})}}/><br/>
                        <label>Date of Birth</label>
                        <input type = "date" value = {voter.dateOfBirth} onChange ={(e)=>{setVoter({...voter, dateOfBirth: e.target.value})}}/><br/>
                        <label>Address</label>
                        <input type ="text" value = {voter.address} onChange ={(e)=>{setVoter({...voter, address: e.target.value})}}/><br/>
                        <label>City</label>
                        <input type ="text" value = {voter.city} onChange ={(e)=>{setVoter({...voter, city: e.target.value})}}/><br/>
                        <label>State</label>
                        <input type ="text" value = {voter.state} onChange ={(e)=>{setVoter({...voter, state: e.target.value})}}/><br/>
                        <label>Email ID</label>
                        <input type = "email" value = {voter.email} onChange ={(e)=>{setVoter({...voter, email: e.target.value})}}/><br/>
                        <label>Mobile Number </label>
                        <input type = "number" value ={voter.mobileNumber} onChange = {(e)=>{setVoter({...voter, mobileNumber: e.target.value})}}/><br/>
                        <label> Password </label>
                        <input type ="password" value = {voter.passwrd} onChange ={(e)=>{setVoter({...voter, passwrd: e.target.value})}}/><br/>

                    </div>
                    <button onClick={(e)=>{postVoter(e);}}>Submit</button>
                </form>
            
            

        </div>

    );

}

export default Voter;