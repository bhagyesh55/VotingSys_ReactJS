import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var min = 7;
var max = 13;
var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;


function Voter(){
    const navigate = useNavigate();

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
        password: "",
        contestantID: 0.0,
        
    });

    function postVoter(e){
            e.preventDefault();
            let requestBody = voter
            axios.post("http://localhost:8080/voter/add",requestBody).then(response=>{console.log(response)})
            navigate('/')
            alert("Registration is successfull")
    }
    return(
        <div className="Header-form-container">
            <h1></h1>
            <form className="Header-form">
                <div className="Header-form-content">
                    <h3 className="Header-form-title">Enter your details</h3>
                    <div className="form-group mt-3">
                    <label>First Name</label><br/>
                    <input type ="text" value = {voter.firstName} onChange ={(e)=>{setVoter({...voter, firstName: e.target.value})}}/><br/>
                    <label>Last Name</label><br/>
                
                    <input type ="text" value = {voter.lastName} onChange ={(e)=>{setVoter({...voter, lastName: e.target.value})}}/><br/>
                    <div onChange ={(e)=>{setVoter({...voter, gender: e.target.value})}}>
                    <input type ="radio" value = "Male"/>Male
                    <input type ="radio" value = "Female"/>Female
                    <input type ="radio" value = "Others"/>Others
                    </div>
                    
                    <label>Date of Birth</label><br/>
                    <input type ="date" value = {voter.dateOfBirth} onChange ={(e)=>{setVoter({...voter, dateOfBirth: e.target.value})}}/><br/>
                    <label>Address</label><br/>
                    <input type ="text" value = {voter.address} onChange ={(e)=>{setVoter({...voter, address: e.target.value})}}/><br/>
                    <label>City</label><br/>
                    <input type ="text" value = {voter.city} onChange ={(e)=>{setVoter({...voter, city: e.target.value})}}/><br/>
                    <label>State</label><br/>
                    <input type ="text" value = {voter.state} onChange ={(e)=>{setVoter({...voter, state: e.target.value})}}/><br/>
                    <label>Email ID</label><br/>
                    <input type ="email" value = {voter.emailID} onChange ={(e)=>{setVoter({...voter, emailID: e.target.value})}}/><br/>
                    <label>Mobile Number</label><br/>
                    <input type ="number" value = {voter.mobileNumber} onChange ={(e)=>{setVoter({...voter, mobileNumber: e.target.value})}}/><br/>
                    <label>Password</label><br/>
                    <input type ="password" value = {voter.password} onChange ={(e)=>{setVoter({...voter, password: e.target.value})}}/><br/>
                    </div>
                </div>
                <button onClick={(e)=>{postVoter(e);}}>Submit</button>
            </form>     
        </div>
    );

}

export default Voter;