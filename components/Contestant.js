import { useState } from "react";
import axios from "axios";

function Contestant(){
    const [contestant, setContestant] = useState({
        contestantID:0.0,
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
    });

    function postContestant(e){
        e.preventDefault();
        let requestBody = contestant
        axios.post("http://localhost:8080/contestant",requestBody).then(response=>{console.log(response)})
    }
    return(
        <div>
            <h1>Enter your details</h1>
                <form>
                    <div>
                        <label>First Name</label>
                        <input type ="text" value = {contestant.firstName} onChange ={(e)=>{setContestant({...contestant, firstName: e.target.value})}}/><br/>
                        <label>Last Name</label>
                        <input type ="text" value = {contestant.lastName} onChange ={(e)=>{setContestant({...contestant, lastName: e.target.value})}}/><br/>
                        <label>Gender</label>
                        <input type ="text" value = {contestant.gender} onChange ={(e)=>{setContestant({...contestant, gender: e.target.value})}}/><br/>
                        <label>Date of Birth</label>
                        <input type = "date" value = {contestant.dateOfBirth} onChange ={(e)=>{setContestant({...contestant, dateOfBirth: e.target.value})}}/><br/>
                        <label>Address</label>
                        <input type ="text" value = {contestant.address} onChange ={(e)=>{setContestant({...contestant, address: e.target.value})}}/><br/>
                        <label>City</label>
                        <input type ="text" value = {contestant.city} onChange ={(e)=>{setContestant({...contestant, city: e.target.value})}}/><br/>
                        <label>State</label>
                        <input type ="text" value = {contestant.state} onChange ={(e)=>{setContestant({...contestant, state: e.target.value})}}/><br/>
                        <label>Email ID</label>
                        <input type = "email" value = {contestant.email} onChange ={(e)=>{setContestant({...contestant, email: e.target.value})}}/><br/>
                        <label>Mobile Number </label>
                        <input type = "number" value ={contestant.mobileNumber} onChange = {(e)=>{setContestant({...contestant, mobileNumber: e.target.value})}}/><br/>
                        <label> Password </label>
                        <input type ="password" value = {contestant.passwrd} onChange ={(e)=>{setContestant({...contestant, passwrd: e.target.value})}}/><br/>

                    </div>
                    <button onClick={(e)=>{postContestant(e);}}>Submit</button>
                </form>
            
        </div>

    );

}

export default Contestant;