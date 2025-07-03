import React from 'react'
import { useEffect,useState } from "react"
import AXIOS from 'axios'
import { Row, Table ,Container,Col,Form} from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import blk from '../images/block.png'
export default function Productview(){
    const [uname,setUname]=useState("");
    const [product,setProduct]=useState([])
    const [qt,setQt]=useState(false)
    useEffect(()=>{
        const url="http://localhost:9000/fetchAllprd";
       
        AXIOS.get(url).then(
            (res)=>{
                setProduct(res.data)
            }
        )
    })

    const deleteproduct=(userid)=>{
        let ans=window.confirm("Do u want to delete?")
        if(ans){
          const url=`http://localhost:9000/deleteproducts/${userid}`;
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
              <h3 className="text-info">Product list</h3>
            </Form.Label>
          </Col>
          <Col lg={3}>
                 <Form.Control type="text"
                 onChange={(e)=>setUname(e.target.value)}
                 
                 placeholder='search by name' required/> 

                 
                </Col>
          </Row>
        <Table>
            <thead>
                <tr>
                    <th>Sl No</th>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Category</th>
                    <th>Product Used</th>
                    <th>Price</th>
                    <th>Product Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                product
                .filter((ls)=>{ return(
                    ls.productname.toLocaleLowerCase().match(uname.toLowerCase())|| ls.category.toLowerCase().match(uname.toLocaleLowerCase())||uname=="")})
                .map((ls,index)=>{
                    return <tr key={ls._id}>
                        <td>
                    
                                    {index+1}
                                
                        </td>
                        <td>
                            {ls.productname}
                        </td>
                        <td>
                            {ls.productquantity}
                        </td>
                        <td>
                            {ls.category}
                        </td>
                        <td>
                            {ls.prod_used}
                        </td>
                        <td>
                            {ls.productprice}
                        </td>
                        <td>
                       <img src={`http://localhost:9000/${ls.image}`} className='rounded' style={{width:"200px",height:"200px"}}/>

                        </td>
                        <td>
                                <MdDelete onClick={()=>{deleteproduct(ls._id)
                                }}
                                style={{color:'red', fontSize:'30px'}} />

                                
                                
                
                                </td>
                    </tr>
                })
            }
            </tbody>
        </Table>
        
        </Container>
        
        </>
    )
}
