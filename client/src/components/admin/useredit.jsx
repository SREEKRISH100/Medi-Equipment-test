import React from 'react'
import AXIOS from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, Row,Col,Button } from 'react-bootstrap';
import { useRef } from 'react';
export default function Useredit() {
    
    const params=useParams();
    const idn=params.id;
    const refitem=useRef(null);
    const[record,setRecord]=useState({});

    useEffect(()=>
    {
    
        const url=`http://localhost:9000/editByid/${idn}`;
        
        
        AXIOS.get(url).then((res)=>{
            const datas=res.data;
            const form=refitem.current;
            form['fullname'].value=datas[0].fullname;
            form['email'].value=datas[0].email;
           
        })
    },[idn])
    const setValue=(field,value)=>{
        setRecord({...record,[field]:value})
    }
    const updatehandler=(e)=>{
        e.preventDefault();
        const url=`http://localhost:9000/updateData/${idn}`
        
        AXIOS.post(url,record)
        .then((res)=>{
            alert(res.data)
        })
        .catch(err=>console.error(err))
    }
  return (
   <>
      {
        <Container>
           <Row className="shadow rounded-4 p-3 mt-3 pb-1 border">
                <Col>
                
            <Form.Label>
              <h3 className="text-info">Edit list</h3>
            </Form.Label>
          </Col>
                    </Row>
                    <Row className='shadow rounded-8 p-3 mt-3 border'>
                    <Col>
                <Form ref={refitem} onSubmit={updatehandler}>
                    <Form.Group>
                        <Form.Label>
                            FullName
                        </Form.Label>
                        <Form.Control type="text" name="fullname" onChange={(e)=>{setValue(e.target.name,e.target.value)
                        }}
                        required/>
                    
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control type="text" name="email"  onChange={(e)=>{setValue(e.target.name,e.target.value)
                        }}
                        required/>
                    </Form.Group>
                
        <Button type="submit">
          Update
        </Button>
                </Form>
                </Col>
            </Row>
        </Container>
           
          }
   </>
   
  );
}
