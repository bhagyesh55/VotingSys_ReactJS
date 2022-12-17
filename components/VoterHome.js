import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideNav, {Toggle,NavItem,NavIcon,NavText,} from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
            <h1 style={{textAlign:'center'}}>Welcome Voter</h1>
        <SideNav 
        onSelect = {selected=>{
            console.log(selected)
            
        }}>
            <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="Admin">
                    <NavItem onClick={vote}>
                        <NavIcon><i class="fa-sharp fa-solid fa-person-booth"></i></NavIcon>
                        <NavText>Vote</NavText>
                    </NavItem>
                    <NavItem onClick={settings}>
                        <NavIcon><i class="fa-sharp fa-solid fa-wrench"></i></NavIcon>
                        <NavText>Update Details</NavText>
                    </NavItem>
                    <NavItem onClick={remove}>
                        <NavIcon><i class="fa-sharp fa-solid fa-trash"></i></NavIcon>
                        <NavText>Delete Account</NavText>
                    </NavItem>
                    <NavItem onClick={logout}>
                        <NavIcon><i class="fa-sharp fa-solid fa-right-to-bracket"></i></NavIcon>
                        <NavText>Logout</NavText>
                    </NavItem>
                </SideNav.Nav>          
        </SideNav>
        </div>

        // <div>
        //     <Button  className="h2" style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>Vote</Button>
        //     <Button className="h2" style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}} >Update Details</Button>
        //     <Button  className="h2" style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}}>Delete Account</Button>
        //     <Button className="h2" style={{textAlign:'center',padding:'15px 32px',margin:'4px 2px',borderRadius:'12px'}} >Logout</Button>
        //     {/* <h3>Welcome!</h3>
        //     <table border="1">
        //         <tr>
        //             <td>Voter ID</td>
        //             <td>First Name</td>
        //         </tr>
        //         {
        //             data.map((user)=>
        //             <tr>
        //                 <td>{user.voterID}</td>
        //                 <td>{user.firstName}</td>
        //             </tr>)
        //         }
        //     </table> */}
        // </div>
    );

}

export default VoterHome;