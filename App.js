import Voter from "./components/Voter";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./components/Login";
import Contestant from "./components/Contestant";
import VoterUpdate from "./components/VoterUpdate";
import VoterDetails from "./components/VoterDetails";
import VoterHome from "./components/VoterHome";
import Admin from "./components/Admin";
import VotingPage from "./components/VotingPage";
import ContestantUpdate from "./components/ContestantUpdate";
import ContestantUpdate1 from "./components/ContestantUpdate1";
import Result from "./components/Results";
import Verify from "./components/Verify";
import DeleteVoter from "./components/DeleteVoter";
import './CSS/Home.css'
import './CSS/VoterHome.css'
import './CSS/SignUp1.css'

import './CSS/ContestantDetails.css';


import { ReactDOM } from "react-dom";

function App() {
  return (
    
    <div>

      <BrowserRouter>
    
        <Routes>
          <Route path ='/' element = {<Login/>}> </Route>
          <Route path ="/voter" element = {<Voter/>}></Route>
          <Route path = '/voterhome' element = {<VoterHome/>}></Route>
          <Route path = '/voterupdate' element = {<VoterUpdate/>}></Route>
          <Route path= "/admin" element = {<Admin/>}></Route>
          <Route path = "/voterdetail" element = {<VoterDetails/>}></Route>
          <Route path = "/contestantdetails" element = {<Contestant/>}></Route>
          <Route path = "/contestantupdate" element = {<ContestantUpdate/>}></Route>
          <Route path = "/contestantupdate1" element = {<ContestantUpdate1/>}></Route>
          <Route path = "/votingpage" element ={<VotingPage/>}></Route>
          <Route path = "/result" element ={<Result/>}></Route>
          <Route path = "/verify" element ={<Verify/>}></Route>
          <Route path = "/remove" element ={<DeleteVoter/>}></Route>
        </Routes>
      </BrowserRouter>
      
      

      
    </div>
  );
}


export default App;
