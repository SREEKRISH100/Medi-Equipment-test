// import React from 'react';
// import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
// // import './reg.css'; // Import CSS file for additional styles
// import { useState } from 'react';
// import Webheader from '../webheader';
// import AXIOS from 'axios';

// import {useNavigate} from 'react-router-dom';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Sellerregister() {
//   const nav=useNavigate();
//   const [record,setRecord]=useState({fullname:"",email:"",phone:"",address:"",pass:"",conpass:""})
//   const[errors,setErrors]=useState({});
//   const [image]=useState({});
//   const formdata=new FormData();
//   const findErrors=()=>{
//     const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     const {fullname,email,phone,address,pass,conpass}=record;
//     const newerrors={};
//     if(!fullname||fullname==""){
//       newerrors.fullname="fullname field is required";
//     }
//     else if(fullname.length>30)
//     {
//       newerrors.fullname="content is too long";
//     }
//     if(!email||email==""){
//       newerrors.email="email field is required";
//     }
//     else if(!re.test(email))
//     {
//       newerrors.email="invalid email";
//     }
//     if(!phone||phone==""){
//       newerrors.phone="phone field is required";
//     }
//     else if(phone.length!=10)
//     {
//       newerrors.phone="invalid phone";
//     }
//     if(!address||address==""){
//       newerrors.address="address field is required";
//     }
//     if(!pass||pass==""){
//       newerrors.pass="password field is required";
//     }
//     else if(pass.length<6)
//     {
//       newerrors.pass="password contains atleast 6 charectors";
//     }
//     else if(pass!=conpass)
//     {
//       newerrors.pass="password mismatch ";
//     }
       
// return newerrors;
//     }
  
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
//       const url="http://localhost:9000/sellerregister";
//       formdata.append('image',image)
//       AXIOS.post(url,record,formdata,{'+content-type':'multipart/form-data'}).then((response)=>{
//         if(response.data.status==1){
//           //redirect
//           toast.success(response.data.msg)
//           window.setTimeout(nav("/sellerlogin"),2000)
       
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
//                   <Form.Control type="address" name="address" placeholder='Enter the Address' onChange={(e)=>{setValue(e.target.name,e.target.value)}} isInvalid={!!errors.address}  />
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.address}
//                   </Form.Control.Feedback>
                 
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
//                   Already have an account !<a href='/sellerlogin'className='abc'> LOGIN</a>
//                 </Form.Group>
               
//               </Form>
//               <ToastContainer
//               position='top center'
//               />
//             </Col>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Sellerregister;

import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AXIOS from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sellerregister() {
  const nav = useNavigate();
  const [record, setRecord] = useState({ fullname: '', email: '', phone: '', address: '', pass: '', conpass: '' });
  const [errors, setErrors] = useState({});
  const [image] = useState({});
  const formdata = new FormData();

  const findErrors = () => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const nameRe = /^[a-zA-Z\s]+$/; // Regular expression to ensure no numbers are in name
    const { fullname, email, phone, address, pass, conpass } = record;
    const newErrors = {};

    if (!fullname || fullname === '') {
      newErrors.fullname = 'Full name field is required';
    } else if (!nameRe.test(fullname)) {
      newErrors.fullname = 'Full name cannot contain numbers';
    } else if (fullname.length > 30) {
      newErrors.fullname = 'Name is too long';
    }

    if (!email || email === '') {
      newErrors.email = 'Email field is required';
    } else if (!re.test(email)) {
      newErrors.email = 'Invalid email';
    }

    if (!phone || phone === '') {
      newErrors.phone = 'Phone number field is required';
    } else if (phone.length !== 10) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!address || address === '') {
      newErrors.address = 'Address field is required';
    }

    if (!pass || pass === '') {
      newErrors.pass = 'Password field is required';
    } else if (pass.length < 6) {
      newErrors.pass = 'Password should be at least 6 characters long';
    } else if (!/\d/.test(pass) || !/[a-zA-Z]/.test(pass)) {
      newErrors.pass = 'Password must contain both letters and numbers';
    }

    if (!conpass || conpass === '') {
      newErrors.conpass = 'Confirm password field is required';
    } else if (conpass !== pass) {
      newErrors.conpass = 'Passwords do not match';
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
      const url = 'http://localhost:9000/sellerregister';
      formdata.append('image', image);
      AXIOS.post(url, record, formdata, { 'Content-Type': 'multipart/form-data' }).then((response) => {
        if (response.data.status === 1) {
          // redirect
          toast.success(response.data.msg);
          window.setTimeout(() => nav('/sellerlogin'), 2000);
        } else {
          toast.error(response.data.msg);
        }
      });
    }
  };

  return (
    <>
      <h1 className='head'>REGISTER HERE!</h1>
      <Container className='box'>
      <ToastContainer position='top center' />
        <Row className='justify-content-center'>
          <Col lg={11} className='border shadow p-4 mt-5 rounded'>
            <Form onSubmit={handlerSubmit} encType='multipart/form-data'>
              <Form.Group>
                <Form.Label>Full name:</Form.Label>
                <Form.Control
                  type='text'
                  name='fullname'
                  placeholder='Enter your full name'
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  isInvalid={!!errors.fullname}
                />
                <Form.Control.Feedback type='invalid'>{errors.fullname}</Form.Control.Feedback>

                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='abc123@gmail.com'
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>

                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                  type='number'
                  name='phone'
                  placeholder='91******19'
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>

                <Form.Label>Address:</Form.Label>
                <Form.Control
                  as='textarea'
                  name='address'
                  placeholder='Enter your address'
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type='invalid'>{errors.address}</Form.Control.Feedback>

                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type='password'
                  name='pass'
                  placeholder='********'
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  isInvalid={!!errors.pass}
                />
                <Form.Control.Feedback type='invalid'>{errors.pass}</Form.Control.Feedback>

                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type='password'
                  name='conpass'
                  placeholder='********'
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  isInvalid={!!errors.conpass}
                />
                <Form.Control.Feedback type='invalid'>{errors.conpass}</Form.Control.Feedback>

              </Form.Group>

              <Form.Group className='mt-3' align='center'>
                <Button className='cbutton' type='submit'>
                  Register
                </Button>
                <br />
                <br />
                Already have an account?{' '}
                <a href='/sellerlogin' className='abc'>
                  LOGIN
                </a>
              </Form.Group>
            </Form>

          
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sellerregister;
