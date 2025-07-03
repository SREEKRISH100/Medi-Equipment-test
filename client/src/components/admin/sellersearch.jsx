import{useState,useEffect} from 'react';
import {Container,Row,Col,Form, Table,Button} from 'react-bootstrap'
import AXIOS from 'axios'
import { MdDelete } from "react-icons/md";


export default function Sellersearch(){
    const [uname,setUname]=useState("");
    const [record,setRecord]=useState([]);

    useEffect(()=>{
        const url="http://localhost:9000/fetchAllseller"
   //server connection
     AXIOS.get(url).then((res)=>{
            setRecord(res.data)
        })
    })

    const deleteseller=(userid)=>{
        let ans=window.confirm("Do u want to delete?")
        if(ans){
          const url=`http://localhost:9000/deletesellers/${userid}`;
          AXIOS.get(url).then((res)=>{
            alert(res.data)
          })
        }
        else
        {
            alert("Delete is cancelled")
        }
    }
    return(
        <>
        <Container>
        <Row className="shadow rounded-4 p-3 mt-3 pb-1 border">
                <Col>
                
            <Form.Label>
              <h3 className="text-info">Seller list</h3>
            </Form.Label>
          </Col>
          <Col lg={3}>
                 <Form.Control type="text"
                 onChange={(e)=>setUname(e.target.value)}
                 
                 placeholder='search by name' required/> 

                 
                </Col>
            </Row>
            <Row>
                <Col>
            <Table>
                <thead>
                    <tr>
         <th>slno</th> <th>Name</th> <th>Email</th> <th>Phone</th><th>Action</th>
                    </tr>
                </thead>
              <tbody>
                { 
                 
                    record
                    .filter((ls)=>{return ls.fullname.match(uname)})
                    .map((ls,index)=>{
                        return(
                            <tr key={ls._id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    {ls.fullname}
                                </td>
                                <td>
                                    {ls.email}
                                </td>
                                <td>
                                    {ls.phone}
                                </td>
                                <td>
                                <MdDelete onClick={()=>{deleteseller(ls._id)
                                }}
                                style={{color:'red', fontSize:'30px'}} />

                              
                                </td>
                            </tr>
                        )

                    })
                   
                }
              </tbody>


            </Table>

            </Col>
            </Row>
        </Container>
        
        </>
    )
}