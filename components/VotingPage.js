import axios from "axios";
import { startTransition, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import ABC from "./selected";

function VotingPage(){
    const[contestant, setContestant] = useState([])
    const navigate = useNavigate;
    const[voterID, setVoterID] = useState()
    const[contestantID,setContestantID] = useState()
    const[countOfVotes,setCountOfVotes] = useState()

    function final(e){
        e.preventDefault()
        const castvote = {voterID,contestantID}
        axios.put(`http://localhost:8080/voter/votes/${voterID}`,castvote).then((res)=>{console.log(res)})

        axios.get(`http://localhost:8080/contestant/${contestantID}`).then((res)=>{
            let ele = res.data
            ele={
                ...ele,countOfVotes:ele.countOfVotes+1
            }
            axios.put(`http://localhost:8080/contestants/${contestantID}`,ele).then((res)=>console.log(res))
        })
        window.location.assign('/voterhome')
    }

    useEffect(()=>{
        axios.get('http://localhost:8080/contestant').then((res)=>{setContestant(res.data)})
    },[])

    
    // function number(e){
    //     e.preventDefault()
    //     const count = countOfVotes+1
    //     const total = {contestantID,count}
    //     axios.put(`http://localhost:8080/contestants/${contestantID}`,total).then((res)=>{console.log(res)})
    //     window.location.assign('/voterhome')
    // }
    

    return(
        <div style={{textAlign:'center'}}>
            <h1 style={{textAlign:'center'}}>Below are the eligible contestants</h1>
            {/* <table style={{marginLeft:'auto', marginRight:'auto', width:'100%',borderBlock:"none"}}>
                <tr>
                    <th>ID</th>
                    <th>Contestant</th>
                    <th>Name</th>
                </tr>
            </table> */}
           
            {contestant.map((ele)=>
                {
                    if(ele.status==='Approved'){
                        return(
                            <>
                                <ABC
                                data={ele}/>
                            </>
                        )
                    }
                }
            )}<br/>

            <label>Please enter your Voter ID</label><br/>
            <input type='number' value={voterID} onChange={(e)=>setVoterID(e.target.value)}></input><br/>
            <label style={{textAlign:'center'}}>Enter the ID of contestant you want to vote</label><br/>
            <input type='number' value={contestantID} onChange={(e)=>setContestantID(e.target.value)}></input><br/>   
            <label style={{textAlign:'center'}}>Please enter 1 in below field to give your vote</label><br/>
            <input type='number' value={countOfVotes} onChange={(e)=>setCountOfVotes(e.target.value)}></input><br/> 
            <button onClick={final}>Vote</button>      

            
        </div>

    );
}

export default VotingPage;