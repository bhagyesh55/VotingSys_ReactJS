import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SideNav, {Toggle,NavItem,NavIcon,NavText,} from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function Admin() {

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

    function result(){
        navigate("/result")
    }

    return(
        <div>
            <h1 style={{textAlign:"center"}}>Welcome Admin</h1>
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