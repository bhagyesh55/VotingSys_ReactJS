import axios from "axios";
import { useState } from "react"
import { Button, Container } from "react-bootstrap";



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

    const myStyle = {
        backgroundImage: "url('https://s3.amazonaws.com/participedia.prod/d1645146-5d2c-4c29-bab9-a863c075a29d_onlinevoting.jpg')",
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        //position:'fixed'
    }
    
    return(
        <div style={myStyle} className="headers1">
            
            <h1 style={{textAlign:'center'}}>Update your details<br/>
            
            <label >Voter ID</label><br/>
            <input style={{borderRadius:'12px'}}type="number"  value = {voterID} onChange={(e)=>setYourVoterID(e)}/><br/>

            <label style={{justifyContent:'center'}}>Address: {voters.address}</label><br/>
            <input style={{borderRadius:'12px'}} type="text" id="form1" value = {address} onChange={(e)=>setAddress(e.target.value)}/><br/>

            <label>City: {voters.city}</label><br/>
            <input style={{borderRadius:'12px'}} type="text" value = {city} onChange={(e)=>setCity(e.target.value)}/><br/>

            <label>State: {voters.state}</label><br/>
            <input style={{borderRadius:'12px'}} type="text"  value = {state} onChange={(e)=>setState(e.target.value)}/><br/>

            <label>Email ID: {voters.emailID}</label><br/>
            <input style={{borderRadius:'12px'}} type="text"  value = {emailID} onChange={(e)=>setEmailID(e.target.value)}/><br/>

            <label>Mobile Number: {voters.mobileNumber}</label><br/>
            <input style={{borderRadius:'12px'}} type="number" value = {mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/><br/>

            <label>Password</label><br/>
            <input style={{borderRadius:'12px'}} type="password" value = {password} onChange={(e)=>setPassword(e.target.value)}/>

            <div>
                <Button class="btn-btn-primary" onClick={()=>{show();}}>Show</Button><br/>
            </div>                
            <div>
                <Button class="btn-btn-primary" onClick={()=>{handleSubmit();}}>Update</Button><br/>
            </div>
            
            </h1>
        </div>
    );
}

export default VoterUpdate;