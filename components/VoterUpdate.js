import axios from "axios";
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function VoterUpdate(){

    const[voterID,setVoterID] = useState();
    const[address,setAddress] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[emailID, setEmailID] = useState('');
    const[mobileNumber, setMobileNumber] = useState();
    const[passwrd, setPassword] = useState('');

    function handleSubmit(e) {

        e.preventDefault();
        const updateVoter = {voterID,address,city,state,emailID,mobileNumber,passwrd};

        console.log(updateVoter);
        
        // let update = {
        //     "address" : <input type="text"></input>,
        //     "city" : <input type="text"></input>,
        //     "state" : <input type="text"></input>,
        //     "emailID" : <input type="text"></input>,
        //     "mobileNumber" : <input type="number"></input>,
        //     "passwrd" : <input type="password"></input>
        // } 

        
        axios.put(`http://localhost:8080/voter/update/${voterID}`,updateVoter).then((res)=>{console.log(res)})
        
    }
    
    return(
        <div>
            <Container><br/>
            <h1 style={{textAlign:'center'}}>Update Details</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for = "form1">VoterID</label>
                    <input type="number" class="form-control" id="form1" value = {voterID} onChange={(e)=>setVoterID(e.target.value)}/>
                </div><br/>
                <div class="form-group">
                    <label for = "form1">Address</label>
                    <input type="text" class="form-control" id="form1" value = {address} onChange={(e)=>setAddress(e.target.value)}/>
                </div><br/>
                <div class="form-group">
                    <label for = "form1">City</label>
                    <input type="text" class="form-control" id="form1" value = {city} onChange={(e)=>setCity(e.target.value)}/>
                </div><br/>
                <div class="form-group">
                    <label for = "form1">State</label>
                    <input type="text" class="form-control" id="form1" value = {state} onChange={(e)=>setState(e.target.value)}/>
                </div><br/>
                <div class="form-group">
                    <label for = "form1">Email</label>
                    <input type="text" class="form-control" id="form1" value = {emailID} onChange={(e)=>setEmailID(e.target.value)}/>
                </div><br/>
                <div class="form-group">
                    <label for = "form1">Mobile Number</label>
                    <input type="number" class="form-control" id="form1" value = {mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
                </div><br/>
                <div class="form-group">
                    <label for = "form1">Password</label>
                    <input type="password" class="form-control" id="form1" value = {passwrd} onChange={(e)=>setPassword(e.target.value)}/>
                </div><br/>
                <div>
                    <button onClick={()=>{handleSubmit();}}>Update</button><br/>
                </div>
            </form>
            </Container>
            
        </div>
    );
}

export default VoterUpdate;