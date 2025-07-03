import AXIOS from "axios";
import { useEffect,useState } from "react";
import { Table } from "react-bootstrap";
export default function Employeeview(){
    const[record,setRecord]=useState([]);
    useEffect(()=>
    {
        console.log("useeffect working")
        const url="http://localhost:9000/fetchAllemp"
        AXIOS.get(url).then((res)=>{
            setRecord(res.data)
            console.log("data reached")
        })
    },[])
    return(
        <>
         <Table>
            <thead>
                <tr>
                    <th>#</th><th>full name</th><th>Email</th><th>Phone</th><th>address</th>
                </tr>
            </thead>
            <tbody>
                {
                    record.map((ls)=>{
                        return <tr key={ls._id}>
                            <td>#</td>
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
                                {ls.address}
                            </td>
                        </tr>
                    })
                }
            </tbody>
         </Table>

        </>
    )
}