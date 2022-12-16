import axios from "axios";
import { useState } from "react";


function DeleteVoter(){
    const[voterID,setVoterID] = useState();
    const setYourVoterID =(e)=>{setVoterID(e);}
    function remove(voterID){
        axios.delete(`http://localhost:8080/voter/delete/${voterID}`).then((res)=>{console.log(res)})
        alert("Account Deleted")
       // window.location.assign('/')
    }

    return(
        <div>
            <label>Please enter your Voter ID</label>
            <input type="number" onChange={(e)=>{setYourVoterID(e)}}></input>
            <button onClick={remove}>Delete</button>
        </div>
    );
}

export default DeleteVoter;