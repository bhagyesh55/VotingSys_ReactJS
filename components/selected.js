
const ABC = (props) => {
    console.log(props.data)
    
    return (
        <div>
            <table style={{marginLeft:'auto', marginRight:'auto'}}>
                <tr>
                    <th>ID</th>
                    <th>Contestant</th>
                    <th>Name</th>
                    {/* <th>Vote</th> */}
                </tr>
                <tr>
                    <td>{props.data.contestantID}</td>
                    <td><img src={props.data.image} width='100px' height='100px'></img></td>
                    <td>{props.data.fullName}</td>
                    {/* <td><button>Vote</button></td> */}
                </tr>
            </table>
        </div>
    )
}

export default ABC;


