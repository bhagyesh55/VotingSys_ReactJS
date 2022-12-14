import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Admin(){

    const navigate = useNavigate();


    function logout(){
        navigate("/")
    }

    function voterDetail(){
        navigate("/voterdetail")
    }

    function enterContestantDetails(){
        navigate("/contestantdetails")
    }

    function updatecontestant(){
        navigate("/contestantupdate")
    }


    return(
        <div className="h2">
            <Button onClick={voterDetail} style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>View Voters</Button>
            <Button onClick ={updatecontestant} style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>View Contestants</Button>
            <Button onClick={enterContestantDetails} style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>Add Contestants</Button>
            <Button onClick={logout} style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>Logout</Button>
        </div>

    )
}

export default Admin;