import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var min = 7;
var max = 13;
var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

function Voter(){
    const navigate = useNavigate();

    const[voterID,setVoterID] = useState()
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")
    const[gender,setGender] = useState("")
    const[dateOfBirth,setDateOfBirth] = useState("")
    const[address,setAddress] = useState("")
    const[city,setCity] = useState("")
    const[state,setState] = useState("")
    const[emailID,setEmailID] = useState("")
    const[mobileNumber,setMobileNumber] = useState("")
    const[password,setPassword] = useState("")
    const[contestantID,setContestantID] = useState()
    const [userGet, setUserGet] = useState([]);

    const setYourFirst=(e)=>{setFirstName(e.target.value)}
    const setYourLast=(e)=>{setLastName(e.target.value)}
    const setYourGender=(e)=>{setGender(e.target.value)}
    const setYourDate=(e)=>{setDateOfBirth(e.target.value)}
    
    const setYourAddress=(e)=>{setAddress(e.target.value)}
    const setYourCity=(e)=>{setCity(e.target.value)}
    const setYourState=(e)=>{setState(e.target.value)}
    const setYourEmail =(e)=>{setEmailID(e.target.value)}
    const setYourNumber=(e)=>{setMobileNumber(e.target.value)}
    const setYourPassword=(e)=>{setPassword(e.target.value)}

    // function dateOfBirth(){
    //     var dtToday = new Date();
    //     var month = dtToday.getMonth()+1;
    //     var day = dtToday.getDate();
    //     var year = dtToday.getFullYear();
    //     if(month<0){
    //         month = '0'+month.toString()
    //     } if (day<10){
    //         day = '0'+day.toString();
    //     }
    //     var maxDate = year+'-'+month+'-'+day;
    //     ('.txtDate').attr('max',maxDate)
    // }

    const register = (e)=>{
        e.preventDefault();
        let data = {
            voterID:0.0,
            firstName:firstName,
            lastName:lastName,
            gender:gender,
            dateOfBirth:dateOfBirth,
            address:address,
            city:city,
            state:state,
            emailID:emailID,
            mobileNumber:mobileNumber,
            password:password,
            contestantID:0.0
        }

        if (mobileNumber.length!==10){
            alert("Please Enter 10 Digit Mobile No");
            
        }else if (emailID.substring(emailID.length-10,emailID.length)!== "@gmail.com"){
            alert("Please Enter Email in right format");
         } else if (password.length < min || password.length > max){
            alert("PassWord Should have Minimun character of 7 and Maximun of 13");
        }else if (!regularExpression.test(password)){
            alert("password should contain atleast one number and one special character");
        }
        
        // axios.get("http://localhost:8080/voters").then((response) =>{
        //        console.log(response.data.emailID);
        //         //alert("asas")
        //         for(let i = 0;i<response.data.length;i++){
        //             if(emailID===response.data[i].emailID) { 
        //                 console.log(1)
        //                 break;
        //             } else {
        //                 console.log(2)
        //                 break;
        //             }
        //         }
        //     })

        let em = userGet.find(o=>o.emailID==emailID)
        console.log(em);

        let me = userGet.find(o=>o.mobileNumber==mobileNumber)
        console.log(me);

        if (em==undefined && me==undefined){
            axios.post("http://localhost:8080/voter/add",data).then(response=>{console.log(response)})
             navigate('/')
             alert("Registration is successfull")
        }else{
            console.log("old user")
            alert("Voter already exist")
        }
    
    };

    useEffect(() => {axios.get("http://localhost:8080/voters").then((response) => setUserGet(response.data));}, []);
    
    const myStyle = {
        backgroundImage: "url('https://www.cylumena.com/wp-content/uploads/2019/12/INS-GRD-2x-Online-Voting.png')",
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position:'fixed'
      }
      
    return(

        <div style={myStyle}>

        <div className="header-form-container">
                    <h1></h1>
                    <form className="Header-form">
                        <div className="Header-form-content">
                            <h3 className="Header-form-title">Enter your details</h3>
                            <div className="form-group mt-3">
                            <label>First Name</label><br/>
                            <input type ="text" value = {firstName} onChange ={(e)=>{setYourFirst(e)}}/><br/>
                            <label>Last Name</label><br/>
                        
                            <input type ="text" value = {lastName} onChange ={(e)=>{setYourLast(e)}}/><br/>
                            <div onChange ={(e)=>{setYourGender(e)}}>
                            <input type ="radio" value = "Male"/>Male
                            <input type ="radio" value = "Female"/>Female
                            <input type ="radio" value = "Others"/>Others
                            </div>
                            
                            <label>Date of Birth</label><br/>
                            <input type ="date" value = {dateOfBirth} onChange ={(e)=>{setYourDate(e)}}/><br/>
                            <label>Address</label><br/>
                            <input type ="text" value = {address} onChange ={(e)=>{setYourAddress(e)}}/><br/>
                            <label>City</label><br/>
                            <input type ="text" value = {city} onChange ={(e)=>{setYourCity(e)}}/><br/>
                            <label>State</label><br/>
                            <input type ="text" value = {state} onChange ={(e)=>{setYourState(e)}}/><br/>
                            <label>Email ID</label><br/>
                            <input type ="email" value = {emailID} onChange ={(e)=>{setYourEmail(e)}}/><br/>
                            <label>Mobile Number</label><br/>
                            <input type ="number" value = {mobileNumber} onChange ={(e)=>{setYourNumber(e)}}/><br/>
                            <label>Password</label><br/>
                            <input type ="password" value = {password} onChange ={(e)=>{setYourPassword(e)}}/><br/>
                            </div>
                        </div>
                        <button onClick={register}>Submit</button>
                    </form>     
                </div>
        
                </div>
    );    

}

export default Voter;