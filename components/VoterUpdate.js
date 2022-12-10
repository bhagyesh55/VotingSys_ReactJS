import axios from "axios";
import { useEffect, useState } from "react"

function VoterUpdate(){

    const[voters, setVoters] = useState([]);
    const[voterID,setVoterID] = useState([]);
    const[address,setAddress] = useState([]);
    const[city, setCity] = useState([]);
    const[state, setState] = useState([]);
    const[emailID, setEmailID] = useState([]);
    const[mobileNumber, setMobileNumber] = useState([]);
    const[passwrd, setPassword] = useState([]);
    

    useEffect(()=>{axios.get("http://localhost:8080/voter").then((res)=>{setVoters(res.data)})});

    function postVoterData(){
        let requestBody = {
            "address": <input type = "text" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>,
            "city": <input type = "text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>,
            "state": <input type = "text" value={state} onChange={(e)=>{setState(e.target.value)}}/>,
            "emailID": <input type = "text" value={emailID} onChange={(e)=>{setEmailID(e.target.value)}}/>,
            "mobileNumber": <input type = "number" value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}/>,
            "passwrd": <input type = "password" value={passwrd} onChange={(e)=>{setPassword(e.target.value)}}/>
        };
        axios.put(`http://localhost:8080/voter/${voterID}`,requestBody).then((response)=>{console.log(response)})
    }

    return(
        <div>
            <p>Update details</p>
            {voters.map((voter)=>{
                return <p>
                    {voter.address} - {voter.city} - {voter.state} - {voter.emailID} - {voter.mobileNumber} - {voter.passwrd}
                </p>
            })}
            <button onClick={()=>{postVoterData();}}>Update</button>
        </div>
    );

}

export default VoterUpdate;