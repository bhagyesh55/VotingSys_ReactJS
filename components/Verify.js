import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Verify(){
    const navigate = useNavigate();
    //const [contestantID,setContestantID] = useState([]);
    const [voterID, setVoterID] = useState();
    const setYourVoterID =(e)=> {
        setVoterID(e.target.value);
      }

    // const verification = (e)=>{
    //     e.preventDefault();
    //     const user = {voterID,contestantID}
    //     console.log(user)

    //     useEffect()
    //     axios.get(`http://localhost:8080/voters/${voterID}`).then((res)=>{
    //         console.log(res.data);
    //         if(voterID===res.data.voterID && res.data.contestantID===0){
    //             console.log('successful')
    //             navigate('/votingpage')
    //         }else {
    //             alert("You have already voted")
                
    //         }//navigate('/votingpage')
    //     })
    // }
    

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
        axios.get(`http://localhost:8080/voters/${voterID}`).then((res)=>{
            if(res.data.contestantID===0){
                navigate('/votingpage')
            }else{
                navigate('/voterhome')
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