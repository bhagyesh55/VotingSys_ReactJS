import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contestant(){
    const navigate = useNavigate();
    const [contestant, setContestant] = useState({
        contestantID:0.0,
        fullName: "",
        gender: "",
        status: "",
        city: "",
        emailID: "",
        image:"",
        countOfVotes: 0.0
      
    });

    function postContestant(e){
        e.preventDefault();
        let requestBody = contestant
        axios.post("http://localhost:8080/contestant",requestBody).then(response=>{console.log(response)})
        alert('Candidate added successfully')
        navigate('/admin')
        
    }
    return(
        <div className="Header-form-container">
            <h1></h1>
            <form className="Header-form">
                <div className="Header-form-content">
                    <h3 className="Header-form-title">Enter your details</h3>
                    <div className="form-group mt-3">
                    <label>Enter you Full Name</label><br/>
                    <input type ="text" value = {contestant.fullName} onChange ={(e)=>{setContestant({...contestant, fullName: e.target.value})}}/><br/>
                                       
                    <div onChange ={(e)=>{setContestant({...contestant, gender: e.target.value})}}>
                    <input type ="radio" value = "Male"/>Male
                    <input type ="radio" value = "Female"/>Female
                    <input type ="radio" value = "Others"/>Others
                    </div>                    
                    
                    <label>City</label><br/>
                    <input type ="text" value = {contestant.city} onChange ={(e)=>{setContestant({...contestant, city: e.target.value})}}/><br/>
                    
                    <label>Set the Status</label>
                    <div/>
                        <select value={contestant.status} onChange={(e)=>{setContestant({...contestant,status: e.target.value})}}>
                            <option value = "Approved">Approved</option>
                            <option value = "Denied">Denied</option>
                        </select><br/>

                    <label>Email ID</label><br/>
                    <input type ="email" value = {contestant.emailID} onChange ={(e)=>{setContestant({...contestant, emailID: e.target.value})}}/><br/>
                    
                    <label>Enter the URL of image</label><br/>
                    <input type ="text" value = {contestant.image} onChange ={(e)=>{setContestant({...contestant, image: e.target.value})}}/><br/>
                    </div>
                </div>
                <button onClick={(e)=>{postContestant(e);}}>Submit</button>
            </form>     
        </div>
    );

}

export default Contestant;