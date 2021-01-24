// import '../style/newList.css';
import Table from 'react-bootstrap/Table'


function students(props) {

    console.log(props.list);
    
    let list = props.list.map((item) => {
        console.log(item);
        

        return (
            <tr key ={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>

            </tr>


        )

    })

    return (

        <div  style={{width : "75%" , marginLeft :"15%" ,marginTop : "2%"  }}>
            <Table striped bordered hover variant="dark" responsive >

                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>

                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </Table>

        </div>



    );
}

export default students;