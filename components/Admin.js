import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SideNav, {Toggle,NavItem,NavIcon,NavText,} from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useState } from "react";


function Admin() {

    const navigate = useNavigate();
    const [state, setState] = useState();

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

    function result(){
        navigate("/result")
    }

    function display(){
        //console.log(state);
        let val = sessionStorage.getItem("ses")
        console.log(val)
        sessionStorage.setItem("ses",state)
    }



    return(
        <div>
            <h1 style={{textAlign:"center"}}>Welcome Admin</h1>
            <h3 style={{textAlign:"center"}}>To start / stop election</h3>
        <SideNav 
            onSelect={selected=>{
                console.log(selected)
            }}
            >
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="Admin">
                    <NavItem onClick={voterDetail}>
                        <NavIcon><i class="fa-sharp fa-solid fa-house"></i></NavIcon>
                        <NavText>Voters</NavText>
                    </NavItem>
                    <NavItem onClick ={updatecontestant}>
                        <NavIcon><i class="fa-sharp fa-solid fa-list"></i></NavIcon>
                        <NavText>Contestants</NavText>
                    </NavItem>
                    <NavItem onClick={enterContestantDetails}>
                        <NavIcon><i class="fa-sharp fa-solid fa-plus-minus"></i></NavIcon>
                        <NavText>Add Contestants</NavText>
                    </NavItem>
                    <NavItem onClick={result}>
                        <NavIcon><i class="fa-sharp fa-solid fa-square-poll-vertical"></i></NavIcon>
                        <NavText>View Results</NavText>
                    </NavItem>
                    <NavItem onClick ={logout}>
                        <NavIcon><i class="fa-sharp fa-solid fa-right-to-bracket"></i></NavIcon>
                        <NavText>Logout</NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

            <select style={{marginLeft:'715px'}} onChange={(e)=>{setState(e.target.value)}}>
                <option value="Start">Start</option>
                <option value = "End">End</option>
            </select><br/>
            <button onClick={display} style={{marginLeft:'715px'}}>Submit</button>
        </div>

    //    <div>
    //        <Button  style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>View Voters</Button>
    //        <Button  style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>View Contestants</Button>
    //         <Button  style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>Add Contestants</Button>
    //         <Button  style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>View Results</Button>
    //         <Button onClick={logout} style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>Logout</Button>
    //     </div>
   

    )
}


export default Admin;