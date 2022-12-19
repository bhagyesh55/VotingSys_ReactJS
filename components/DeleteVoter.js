import axios from "axios";
import { useEffect, useState } from "react";


function DeleteVoter(){
    const[voterID,setVoterID] = useState();
    const[users, setUsers] = useState([]);
    const setYourVoterID =(e)=> {
        setVoterID(e.target.value);
    }

    function remove(){

        //axios.get(`http://localhost:8080/voters/${voterID}`).then((res)=>{setVoterID(res.data.voterID)})
        axios.delete(`http://localhost:8080/voter/delete/${voterID}`).then((res)=>{console.log(res)})
        alert("Account Deleted")
        console.log(voterID)
        window.location.assign('/')
    }

    useEffect(()=>{
        axios.get(`http://localhost:8080/voters/${voterID}`).then((res)=>{setVoterID(res.data.voterID)})
    },[])

    return(
        <div>
            <label>Please enter your Voter ID</label>
            <input type="number" onChange={(e)=>{setYourVoterID(e)}} ></input>
            <button onClick={remove}>Delete</button>
        </div>
    );
}

export default DeleteVoter;