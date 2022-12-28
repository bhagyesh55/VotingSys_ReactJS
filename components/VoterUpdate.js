import axios from "axios";
import { useState } from "react"



function VoterUpdate(){
    const[voters,setVoters] = useState([]);
    const[voterID,setVoterID] = useState();
    const[address,setAddress] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[emailID, setEmailID] = useState('');
    const[mobileNumber, setMobileNumber] = useState();
    const[password, setPassword] = useState('');

    
    const setYourVoterID =(e)=> {
        setVoterID(e.target.value);
      }

    function show(){
        axios.get(`http://localhost:8080/voters/${voterID}`).then((res)=>{setVoters(res.data)})
    }  

    function handleSubmit(e) {

        //e.preventDefault();
        const updateVoter = {voterID,address,city,state,emailID,mobileNumber,password};

        console.log(updateVoter);
        
        axios.put(`http://localhost:8080/voter/update/${voterID}`,updateVoter).then((res)=>{console.log(res)})

        window.location.assign('/voterhome')
        
    }
    
    return(
        <div >
            <label >Voter ID</label>
            <input type="number"  value = {voterID} onChange={(e)=>setYourVoterID(e)}/><br/>

            <label style={{justifyContent:'center'}}>Address: {voters.address}</label><br/>
            <input type="text" id="form1" value = {address} onChange={(e)=>setAddress(e.target.value)}/><br/>

            <label>City: {voters.city}</label><br/>
            <input type="text" value = {city} onChange={(e)=>setCity(e.target.value)}/><br/>

            <label>State: {voters.state}</label><br/>
            <input type="text"  value = {state} onChange={(e)=>setState(e.target.value)}/><br/>

            <label>Email ID: {voters.emailID}</label><br/>
            <input type="text"  value = {emailID} onChange={(e)=>setEmailID(e.target.value)}/><br/>

            <label>Mobile Number: {voters.mobileNumber}</label><br/>
            <input type="number" value = {mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/><br/>

            <label>Password</label><br/>
            <input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)}/>

            <div>
                <button onClick={()=>{show();}}>Show</button><br/>
            </div>                
            <div>
                <button onClick={()=>{handleSubmit();}}>Update</button><br/>
            </div>  
        </div>
    );
}

export default VoterUpdate;