import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function VoterDetails(){

  const[voter,setVoter] = useState([])

  const getVoter = async () => {
    try{
      const response = await axios.get("http://localhost:8080/voters")
      setVoter(response.data)
    }catch(error){
      console.log(error)
    }
  };

  

  const columns = [
    {
      name:'First Name',
      selector:(row)=>row.firstName
    },
    {
      name:'Last Name',
      selector:(row)=>row.lastName
    },
    {
      name:'Date of Birth',
      selector:(row)=>row.dateOfBirth
    },
    {
      name:'Mobile Number',
      selector:(row)=>row.mobileNumber
    },
    // {
    //   name:'Voted?',
    //   selector:(row)=>row.contestantID,
    // }

  ];

  useEffect(()=>{getVoter();},[])

  return(
    <div className="d-flex flex-column align-items-center">
      <h1>Voter's</h1>
      <DataTable columns={columns} data={voter} highlightOnHover/>
    </div>
  );
}

export default VoterDetails;