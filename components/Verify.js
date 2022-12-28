import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";

function Verify(){
    const navigate = useNavigate();
    //const [contestantID,setContestantID] = useState([]);
    const [voterID, setVoterID] = useState();
    const setYourVoterID =(e)=> {
        setVoterID(e.target.value);
      }
    

    // const verify = (e)=>{
    //     e.preventDefault();
    //     contestantID.map((ele)=>{
    //         if(ele.voterID===voterID && ele.contestantID===0){
       
    //             let s1 = sessionStorage.getItem('data')

    //             //console.log('successful')
                
    //             // alert("You have already voted")
    //         }else{
    //             sessionStorage.removeItem('data')
    //             sessionStorage.setItem('data',ele.voterID)
    //             //alert("You can Vote!!!")
    //             navigate('/votingpage')
    //             console.log('abc')
    //         }     
    //     })
    // };

    const [tp, setTp] = useState();
    
    function Check(){
        
        let val = sessionStorage.getItem("ses")
        axios.get(`http://localhost:8080/voters/${voterID}`).then((res)=>{
            if(res.data.contestantID===0 && val === "Start"){
                navigate('/votingpage')
                console.log(val)
            }else if (res.data.contestantID===0 && val === "End"){
                navigate('/voterhome')
                alert('Voting is Closed...')
            }else {
                navigate('/voterhome')
                alert('You have already voted!')
            }
        })
        console.log(tp)

        // if(tp===0){
        //     navigate('/votingpage')
        // }else{
        //     navigate('/voterhome')
        // }
    }
    
    return(
        <>
        <div>
            <label>Please enter your Voter ID</label>
            <input type="number" onChange={(e)=>setYourVoterID(e)}/>
            <button onClick={Check}>Submit</button>
        </div>
        </>
    );
}

export default Verify;