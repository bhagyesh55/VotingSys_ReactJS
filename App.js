import Voter from "./components/Voter";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home";
import Contestant from "./components/Contestant";
import VoterUpdate from "./components/VoterUpdate";
import ContestantDetails from "./components/ContestantDetails";
function App() {
  return (
    <div>
      {/* <VoterUpdate></VoterUpdate> */}
      <ContestantDetails></ContestantDetails>
      {/* <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Home/>}> </Route>
          <Route path ="/voter" element = {<Voter/>}></Route>
          <Route path ="/contestant" element = {<Contestant/>}></Route>
        </Routes>
      </BrowserRouter> */}

      
    </div>
  );
}

export default App;
