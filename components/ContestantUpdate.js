import axios from "axios";
import { useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

function ContestantUpdate(){
    const navigate = useNavigate();
    const[contestant, setContestant] = useState([])

    const getContestant = async ()=>{
        try{
            const res = await axios.get('http://localhost:8080/contestant')
            setContestant(res.data)
        }catch(error){
            console.log(error)
        }
    };

    function statusupdate(){
        navigate('/contestantupdate1')
    }

    const columns = [
        {
            name: 'ID',
            selector: (row)=> row.contestantID,
        },
        {
            name: 'Contestant',
            selector: (row)=> <img width={100} height={100} src={row.image}/>,
        },

        {
            name: 'Name',
            selector: (row)=> row.fullName,
        },
        {
            name: 'City',
            selector: (row)=> row.city,
        },
        {
            name: 'Status',
            selector: (row)=> row.status,
        },
        {
            name: 'Update',
            cell: row => <button onClick={statusupdate} style={{textAlign:'center', highlightOnHover:'yellow'}}>Update</button>
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

export default ContestantUpdate;