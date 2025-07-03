
import React from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
// import './adminlogin.css';
import { useState } from 'react';
import AXIOS from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

function Adminlogin() {
  const nav=useNavigate();
  const [record,setRecord]=useState({email:"",pass:""})
  const[errors,setErrors]=useState({});
  const findErrors=()=>{
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const {email,pass}=record;
    const newerrors={};
  
    if(!email||email==""){
      newerrors.email="email field is required";
    }
    else if(!re.test(email))
    {
      newerrors.email="invalid email";
    }
    
    if(!pass||pass==""){
      newerrors.pass="password field is required";
    }
    else if(pass.length>6 && pass.length<30)
    {
      newerrors.pass="content is too less or too long ";
    }
    
return newerrors;
    }
  
  const setValue=(field,value)=>{
      setRecord({...record,[field]:value})
      if( !!errors[field]){
        setErrors({
          ...errors,[field]: null
        })
      }
  }
  const handlerSubmit=(e)=>{
    e.preventDefault();
    if(record.email=="admin@gmail.com"&&record.pass=="admin123"){
      nav("/Adminpage")
    }
    else{
      message.error("Please enter correct email and password")
    }

  }

  // const handlerSubmit=(e)=>{
  //    e.preventDefault();
  //    const newErrors=findErrors();
  //    if(Object.keys(newErrors).length>0)
  //    {
  //     setErrors(newErrors)

  //    }
  //    else{
  //     const url="http://localhost:9000/login";
  //     AXIOS.post(url,record).then((res)=>{
  //       if(res.data.status==1){
  //         alert(res.data.msg)
  //       }
  //       else{
  //         alert(res.data.msg)
  //         }
  //     })
  //     // alert("Thank You For Login")
  //    }
  
  // }
  return (
    <>
    <h1 className='head'>ADMIN LOGIN HERE !</h1> 
      <Container>
        <Row>
          <Col>
            
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col lg={10} className='border shadow p-5 mt-4 rounded'>
            <Col>
              <Form onSubmit={handlerSubmit}>
                <Form.Group>
                 
                   {/* {record.fullname}  */}
                   
                  <Form.Label>Email :</Form.Label> {/* Updated label capitalization */}
                  <Form.Control type="email" name="email" placeholder='abc123@gmail.com' onChange={(e)=>{setValue(e.target.name,e.target.value)}}isInvalid={!!errors.email} />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email}
                  </Form.Control.Feedback>
                  {/* {record.email}  */}

                  <Form.Label>Password :</Form.Label> {/* Updated label capitalization */}
                  <Form.Control type="password" name="pass" placeholder='******' onChange={(e)=>{setValue(e.target.name,e.target.value)}}  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.pass}
                  </Form.Control.Feedback>
                  
                 
                  
                </Form.Group>
                <Form.Group className='mt-3' align="center">
                <Button className="cbutton" type="submit" href='./'>Back</Button> 
                <Button className="cbutton" type="submit" >Login</Button> {/* Added 'custom-button' class */}
                 {/* Added 'custom-button' class */}
                  <br/>
                  <br/>
                
                </Form.Group>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Adminlogin;

