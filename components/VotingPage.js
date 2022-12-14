import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function VotingPage(){
    const[contestant, setContestant] = useState([])

    const getContestant = async ()=>{
        try{
            const res = await axios.get('http://localhost:8080/contestant')
            setContestant(res.data)
        }catch(error){
            console.log(error)
        }
    };

    const columns = [
        {
            name: 'Contestant',
            selector: (row)=> <img width={100} height={100} src={row.image}/>,
        },

        {
            name: 'Name',
            selector: (row)=> row.fullName,
        },
        {
            name:'Vote',
            cell: row => <button style={{textAlign:'center', highlightOnHover:'yellow'}}>Vote</button>
        }        
    ];

    useEffect(()=>{getContestant();},[]);

    return(
        <div className="d-flex flex-column align-items-center">
            <h1>Contestants</h1>
            <DataTable columns={columns} data={contestant} highlightOnHover/>
        </div>

    );
}

export default VotingPage;