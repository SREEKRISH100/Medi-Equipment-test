// import React from 'react';
// import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
// import './reg.css'; // Import CSS file for additional styles
// import { useState } from 'react';
// import Webheader from '../webheader';
// import AXIOS from 'axios';

// import {useNavigate} from 'react-router-dom';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Userregister() {
//   const nav=useNavigate();
//   const [record,setRecord]=useState({fullname:"",email:"",phone:"",address:"",pass:"",conpass:""})
//   const[errors,setErrors]=useState({});
//   const [image]=useState({});
//   const formdata=new FormData();
//   const findErrors = () => {
//   const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.]*)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   const rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, containing both letters and numbers
//   const reName = /^[A-Za-z\s]+$/; // Only alphabetic characters and spaces

//   const { fullname, email, phone, address, pass, conpass } = record;
//   const newErrors = {};

//   if (!fullname || fullname === "") {
//     newErrors.fullname = "Full name field is required.";
//   } else if (!reName.test(fullname)) {
//     newErrors.fullname = "Full name should only contain letters and spaces.";
//   } else if (fullname.length > 30) {
//     newErrors.fullname = "Full name is too long (max 30 characters).";
//   }

//   if (!email || email === "") {
//     newErrors.email = "Email field is required.";
//   } else if (!reEmail.test(email)) {
//     newErrors.email = "Invalid email format.";
//   }

//   if (!phone || phone === "") {
//     newErrors.phone = "Phone field is required.";
//   } else if (phone.length !== 10) {
//     newErrors.phone = "Phone number must be 10 digits.";
//   }

//   if (!address || address === "") {
//     newErrors.address = "Address field is required.";
//   }

//   if (!pass || pass === "") {
//     newErrors.pass = "Password field is required.";
//   } else if (pass.length < 6) {
//     newErrors.pass = "Password must be at least 6 characters.";
//   } else if (!rePassword.test(pass)) {
//     newErrors.pass = "Password must contain both letters and numbers.";
//   }

//   if (pass !== conpass) {
//     newErrors.conpass = "Passwords do not match.";
//   }

//   return newErrors;
// };

  
//   const setValue=(field,value)=>{
//       setRecord({...record,[field]:value})
//       if( !!errors[field]){
//         setErrors({
//           ...errors,[field]: null
//         })
//       }
//   }
 
//   const handlerSubmit=(e)=>{
//      e.preventDefault();
//      const newErrors=findErrors();
//      if(Object.keys(newErrors).length>0)
//      {
//       setErrors(newErrors)

//      }
//      else{
//       const url="http://localhost:9000/register";
//       formdata.append('image',image)
//       AXIOS.post(url,record,formdata,{'+content-type':'multipart/form-data'}).then((response)=>{
//         if(response.data.status==1){
//           //redirect
//           toast.success(response.data.msg)
//           window.setTimeout(nav("/userlogin"),2000)
       
//         }
//         else{
//           toast.error(response.data.msg)
//         }
//       });
    
//      }
  
//   }
//   return (
//     <>
//         <h1 className='head'>REGISTER HERE !</h1> 
//       <Container className='box'>
//         <Row>
//           <Col>
      
//           </Col>
//         </Row>
       
//         <Row className='justify-content-center'>
        
//           <Col lg={11} className='border shadow p-4 mt-5 rounded'>
//             <Col>
           
//               <Form onSubmit={handlerSubmit} encType='multipart/form-data'>
//                 <Form.Group>
                
//                   <Form.Label>Full name :</Form.Label>
//                   <Form.Control type="text" name="fullname"  placeholder='Enter the FullName' onChange={(e)=>{ 
//                    setValue(e.target.name,e.target.value)
//                   }} isInvalid={!!errors.fullname}/>
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.fullname}
//                   </Form.Control.Feedback>
                  
                  
//                    {/* {record.fullname}  */}
                   
//                   <Form.Label>Email :</Form.Label> {/* Updated label capitalization */}
//                   <Form.Control type="email" name="email" placeholder='abc123@gmail.com' onChange={(e)=>{setValue(e.target.name,e.target.value)}} isInvalid={!!errors.email} />
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.email}
//                   </Form.Control.Feedback>
//                   {/* {record.email}  */}
//                   <Form.Label>Phone Number :</Form.Label> {/* Updated label capitalization */}
//                   <Form.Control type="number" name="phone" placeholder='91******19' onChange={(e)=>{setValue(e.target.name,e.target.value)}} isInvalid={!!errors.phone} />
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.phone}
//                   </Form.Control.Feedback>
//                   <Form.Label>Address :</Form.Label> {/* Updated label capitalization */}
// <Form.Control 
//   as="textarea" // Change from 'type="address"' to 'as="textarea"'
//   rows={3} // You can adjust the number of rows as needed for the size of the text box
//   name="address" 
//   placeholder="Enter the Address" 
//   onChange={(e) => { setValue(e.target.name, e.target.value); }} 
//   isInvalid={!!errors.address}  
// />
// <Form.Control.Feedback type="invalid">
//   {errors.address}
// </Form.Control.Feedback>

                 
//                   <Form.Label>Password :</Form.Label> {/* Updated label capitalization */}
//                   <Form.Control type="password" name="pass" placeholder='********' onChange={(e)=>{setValue(e.target.name,e.target.value)}} isInvalid={!!errors.pass} />
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.pass}
//                   </Form.Control.Feedback>
//                   <Form.Label>Confirm Password :</Form.Label> {/* Updated label capitalization */}
//                   <Form.Control type="password" name="conpass" placeholder='********' onChange={(e)=>{setValue(e.target.name,e.target.value)}} isInvalid={!!errors.pass}  />
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.pass}
//                   </Form.Control.Feedback>
                 
                  
//                 </Form.Group>
//                 <Form.Group className='mt-3' align="center">
//                   {/* <button className="cbutton" type="submit" >Register</button> Added 'custom-button' class */}
//                   <Form.Group className='mt-3' align="center">
                
//                   <Button className="cbutton" type="submit" href='/'>Back</Button> {/* Added 'custom-button' class */}
//                   <Button className="cbutton" type="submit" >Register</Button> {/* Added 'custom-button' class */}
//                   <br/>
//                   <br/>
//                   </Form.Group>
//                   Already have an account !<a href='/userlogin'className='abc'> LOGIN</a>
//                 </Form.Group>
               
//               </Form>
//               <ToastContainer
//               position='top-center'
//               />
//             </Col>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Userregister;

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './reg.css'; // Import CSS file for additional styles
import AXIOS from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Userregister() {
  const nav = useNavigate();
  const [record, setRecord] = useState({ fullname: "", email: "", phone: "", address: "", pass: "", conpass: "" });
  const [errors, setErrors] = useState({});
  const [image] = useState({});
  const formdata = new FormData();

  const findErrors = () => {
    const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.]*)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, containing both letters and numbers
    const reName = /^[A-Za-z\s]+$/; // Only alphabetic characters and spaces

    const { fullname, email, phone, address, pass, conpass } = record;
    const newErrors = {};

    if (!fullname || fullname === "") {
      newErrors.fullname = "Full name field is required.";
    } else if (!reName.test(fullname)) {
      newErrors.fullname = "Full name should only contain letters and spaces.";
    } else if (fullname.length > 30) {
      newErrors.fullname = "Full name is too long (max 30 characters).";
    }

    if (!email || email === "") {
      newErrors.email = "Email field is required.";
    } else if (!reEmail.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!phone || phone === "") {
      newErrors.phone = "Phone field is required.";
    } else if (phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!address || address === "") {
      newErrors.address = "Address field is required.";
    }

    if (!pass || pass === "") {
      newErrors.pass = "Password field is required.";
    } else if (pass.length < 6) {
      newErrors.pass = "Password must be at least 6 characters.";
    } else if (!rePassword.test(pass)) {
      newErrors.pass = "Password must contain both letters and numbers.";
    }

    if (pass !== conpass) {
      newErrors.conpass = "Passwords do not match.";
    }

    return newErrors;
  };

  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const url = "http://localhost:9000/register";
      formdata.append('image', image);
      AXIOS.post(url, record, formdata, { 'Content-Type': 'multipart/form-data' }).then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.msg);
          window.setTimeout(() => nav("/userlogin"), 2000);
        } else {
          toast.error(response.data.msg);
        }
      });
    }
  };

  return (
    <>
      <h1 className="head">REGISTER HERE!</h1>
      <Container className="box">
        <Row className="justify-content-center">
          <Col lg={11} className="border shadow p-4 mt-5 rounded">
            <Form onSubmit={handlerSubmit} encType="multipart/form-data">
              <Form.Group>
                <Form.Label>Full name:</Form.Label>
                <Form.Control
                  type="text"
                  name="fullname"
                  placeholder="Enter your Full Name"
                  onChange={(e) => { setValue(e.target.name, e.target.value); }}
                  isInvalid={!!errors.fullname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullname}
                </Form.Control.Feedback>

                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="abc123@gmail.com"
                  onChange={(e) => { setValue(e.target.name, e.target.value); }}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>

                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  placeholder="91******19"
                  onChange={(e) => { setValue(e.target.name, e.target.value); }}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>

                <Form.Label>Address:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  placeholder="Enter your Address"
                  onChange={(e) => { setValue(e.target.name, e.target.value); }}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>

                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="pass"
                  placeholder="********"
                  onChange={(e) => { setValue(e.target.name, e.target.value); }}
                  isInvalid={!!errors.pass}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.pass}
                </Form.Control.Feedback>

                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="conpass"
                  placeholder="********"
                  onChange={(e) => { setValue(e.target.name, e.target.value); }}
                  isInvalid={!!errors.conpass}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.conpass}
                </Form.Control.Feedback>

              </Form.Group>

              <Form.Group className="mt-3" align="center">
                <Button className="cbutton" type="submit" href="/">Back</Button>
                <Button className="cbutton" type="submit">Register</Button>
                <br />
                <br />
                Already have an account? <a href="/userlogin" className="abc">LOGIN</a>
              </Form.Group>
            </Form>

            <ToastContainer position="top-center" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Userregister;
