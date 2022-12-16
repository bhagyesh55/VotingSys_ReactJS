import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function ContestantUpdate1(){
    const [contestantID, setContestantID] = useState();
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    function submit(e){
        e.preventDefault();
        const updatecontestant ={contestantID,status};
        axios.put(`http://localhost:8080/contestant/update/${contestantID}`,updatecontestant).then((res)=>{console.log(res)})
        navigate('/contestantupdate')
    }
    return(
        <div>
            <form onSubmit={submit}>
            <div class="form-group">
                    <label for = "form1">Please enter the ID</label>
                    <input type="number" class="form-control" id="form1" value = {contestantID} onChange={(e)=>setContestantID(e.target.value)}/>
            </div><br/>
            <div class="form-group">
                    <label for = "form1">Status</label>
                    <select value={status} class="form-control" id="form1" onChange={(e)=>setStatus(e.target.value)}>
                            <option value = "Approved">Approved</option>
                            <option value = "Denied">Denied</option>
                    </select>                    
                    {/* <input type="text" class="form-control" id="form1" value = {status} onChange={(e)=>setStatus(e.target.value)}/> */}
            </div><br/>
            <div>
                    <button onClick={()=>{submit();}}>Update</button><br/>
            </div>            
            </form>
        </div>

    )
}

export default ContestantUpdate1;