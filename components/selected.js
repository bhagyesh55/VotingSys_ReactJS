
const ABC = (props) => {
    console.log(props.data)

   
    
    return (
        <div>
            
            <table style={{marginLeft:'auto', marginRight:'auto', width:'100%', borderBlock:"none",justifyContent:"center"}}>
                <tr>
                    <td>{props.data.contestantID}</td>
                    <td><img src={props.data.image} width='100px' height='100px'></img></td>
                    <td>{props.data.fullName}</td>
                </tr>
            </table>
        </div>
    )
}

export default ABC;


