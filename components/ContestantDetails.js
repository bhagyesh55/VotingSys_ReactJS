import React from 'react';
import './ContestantDetails.css';

function ContestantDetails(){
    return(

      <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
        <table align='center'>
          <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Vote</th>
          </tr>
          <tr>
          <td><img style={{width: "5rem", height: "5rem"}} src="./images/bjp1.jpg" alt=""/></td>
          <td style={{textAlign:'center'}}>Bhartiya Janta Party</td>
          <td><button>Vote</button></td>
          </tr>
          <tr>
          <td><img style={{width: "5rem", height: "5rem"}} src="./images/congress.jpg" alt=""/></td>
          <td style={{textAlign:'center'}}>Indian National Congress</td>
          <td><button>Vote</button></td>
          </tr>
          <tr>
          <td><img style={{width: "5rem", height: "5rem"}} src="./images/aap.jpg" alt=""/></td>
          <td style={{textAlign:'center'}}>Aam Aadmi Party</td>
          <td><button>Vote</button></td>
          </tr>
          <tr>
          <td><img style={{width: "5rem", height: "5rem"}} src="./images/sp.jpg" alt=""/></td>
          <td style={{textAlign:'center'}}>Samajwadi Party</td>
          <td><button>Vote</button></td>
          </tr>
      </table>

      </div>

        

    );
}

export default ContestantDetails;