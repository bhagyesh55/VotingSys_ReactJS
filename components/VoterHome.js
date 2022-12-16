import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VoterHome(){

    // const [data,setData] = useState([])

    // useEffect((voterID)=>{axios.get(`http://localhost:8080/voters/${voterID}`).then((result)=>{setData(result)},[])})

    const navigate = useNavigate();

    function logout(){
        navigate("/")
    }
    function settings(){
        navigate("/voterupdate")
    }

    function vote(){
        navigate("/verify")
    }

    function remove(){
        navigate("/remove")
    }

    return(
        <div>
            <Button onClick={vote} className="h2" style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>Vote</Button>
            <Button className="h2" style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}} onClick={settings}>Update Details</Button>
            <Button onClick={remove} className="h2" style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>Delete Account</Button>
            <Button className="h2" style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}} onClick={logout}>Logout</Button>
            {/* <h3>Welcome!</h3>
            <table border="1">
                <tr>
                    <td>Voter ID</td>
                    <td>First Name</td>
                </tr>
                {
                    data.map((user)=>
                    <tr>
                        <td>{user.voterID}</td>
                        <td>{user.firstName}</td>
                    </tr>)
                }
            </table> */}
        </div>
    );

}

export default VoterHome;