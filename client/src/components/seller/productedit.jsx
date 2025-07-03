// import React from 'react'
// import AXIOS from 'axios';
// import { useState,useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Container, Form, Row,Col,Button } from 'react-bootstrap';
// import { useRef } from 'react';
// export default function Productedit() {
    
//     const params=useParams();
//     const idn=params.id;
//     const refitem=useRef(null);
//     const[record,setRecord]=useState({});

//     useEffect(()=>
//     {
    
//         const url=`http://localhost:9000/editByid1/${idn}`;
        
        
//         AXIOS.get(url).then((res)=>{
//             const datas=res.data;
//             const form=refitem.current;
//             form['productname'].value=datas[0].productname;
//             form['productquantity'].value=datas[0].productquantity;
//             form['productprice'].value=datas[0].productprice;
           
//         })
//     },[idn])
//     const setValue=(field,value)=>{
//         setRecord({...record,[field]:value})
//     }
//     const updatehandler=(e)=>{
//         e.preventDefault();
//         const url=`http://localhost:9000/updateProduct/${idn}`
        
//         AXIOS.post(url,record)
//         .then((res)=>{
//             alert(res.data)

//         })
//         .catch(err=>console.error(err))
//     }
//   return (
//    <>
//       {
//         <Container>
//            <Row className="shadow rounded-4 p-3 mt-3 pb-1 border">
//                 <Col>
                
//             <Form.Label>
//               <h3 className="text-info">Product Edit</h3>
//             </Form.Label>
//           </Col>
//                     </Row>
//                     <Row className='shadow rounded-8 p-3 mt-3 border'>
//                     <Col>
//                 <Form ref={refitem} onSubmit={updatehandler}>
//                     <Form.Group>
//                         <Form.Label>
//                             ProductName:
//                         </Form.Label>
//                         <Form.Control type="text" name="productname" onChange={(e)=>{setValue(e.target.name,e.target.value)
//                         }}
//                         required/>
                    
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>
//                             ProductQuantity
//                         </Form.Label>
//                         <Form.Control type="text" name="productquantity"  onChange={(e)=>{setValue(e.target.name,e.target.value)
//                         }}
//                         required/>
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>
//                             ProductPrice
//                         </Form.Label>
//                         <Form.Control type="text" name="productprice"  onChange={(e)=>{setValue(e.target.name,e.target.value)
//                         }}
//                         required/>
//                     </Form.Group>

                    
                
//         <Button type="submit">
//           Update
//         </Button>
//                 </Form>
//                 </Col>
//             </Row>
//         </Container>
           
//           }
//    </>
   
//   );
// }
import React, { useState, useEffect, useRef } from 'react';
import AXIOS from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export default function Productedit() {
  const params = useParams();
  const idn = params.id;
  const refitem = useRef(null);
  const [record, setRecord] = useState({});
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  useEffect(() => {
    const url = `http://localhost:9000/editByid1/${idn}`;
    AXIOS.get(url).then((res) => {
      const datas = res.data;
      const form = refitem.current;
      form['productname'].value = datas[0].productname;
      form['productquantity'].value = datas[0].productquantity;
      form['productprice'].value = datas[0].productprice;
    });
  }, [idn]);

  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value });
  };

  const updatehandler = (e) => {
    e.preventDefault();
    const url = `http://localhost:9000/updateProduct/${idn}`;

    AXIOS.post(url, record)
      .then((res) => {
        alert(res.data);
        setRecord({}); 
        navigate('/sellerpage/productview1'); 
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {
        <Container>
          <Row className="shadow rounded-4 p-3 mt-3 pb-1 border">
            <Col>
              <Form.Label>
                <h3 className="text-info">Product Edit</h3>
              </Form.Label>
            </Col>
          </Row>
          <Row className="shadow rounded-8 p-3 mt-3 border">
            <Col>
              <Form ref={refitem} onSubmit={updatehandler}>
                <Form.Group>
                  <Form.Label>ProductName:</Form.Label>
                  <Form.Control
                    type="text"
                    name="productname"
                    onChange={(e) => {
                      setValue(e.target.name, e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>ProductQuantity:</Form.Label>
                  <Form.Control
                    type="text"
                    name="productquantity"
                    onChange={(e) => {
                      setValue(e.target.name, e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>ProductPrice:</Form.Label>
                  <Form.Control
                    type="text"
                    name="productprice"
                    onChange={(e) => {
                      setValue(e.target.name, e.target.value);
                    }}
                    required
                  />
                </Form.Group>

                <Button type="submit">Update</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
}
