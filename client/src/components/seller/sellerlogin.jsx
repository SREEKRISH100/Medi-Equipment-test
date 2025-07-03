
// import React from 'react';
// import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
// // import './login.css';
// import { useState } from 'react';
// import AXIOS from 'axios';
// import {useNavigate} from 'react-router-dom';

// function Sellerlogin() {

//   const nav=useNavigate();
//   const [record,setRecord]=useState({email:"",pass:""})
//   const[errors,setErrors]=useState({});
//   const findErrors=()=>{
//     const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     const {email,pass}=record;
//     const newerrors={};
  
//     if(!email||email==""){
//       newerrors.email="email field is required";
//     }
//     else if(!re.test(email))
//     {
//       newerrors.email="invalid email";
//     }
    
//     if(!pass||pass==""){
//       newerrors.pass="password field is required";
//     }
//     else if(pass.length>6 && pass.length<30)
//     {
//       newerrors.pass="Check password";
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
//       console.log(record)
//       const url="http://localhost:9000/sellerlogin";
//       AXIOS.post(url,record).then((res)=>{
//         if(res.data.status==1){
//          sessionStorage.setItem("sellerid",res.data.userid)
//          sessionStorage.setItem("username",res.data.username)
//          nav("/sellerpage")
//         }
//         else{
//           alert(res.data.msg)
//           }
//       })
//       // alert("Thank You For Login")
//      }
  
//   }
//   return (
//     <>
//      <h1 className='head'>LOGIN HERE !</h1> 
//       <Container>
//         <Row>
//           <Col>
         
//           </Col>
//         </Row>
//         <Row className='justify-content-center'>
//           <Col lg={10} className='border shadow p-5 mt-4 rounded'>
//             <Col>
//               <Form onSubmit={handlerSubmit}>
//                 <Form.Group>
                 
//                    {/* {record.fullname}  */}
                   
//                   <Form.Label>Email :</Form.Label> {/* Updated label capitalization */}
//                   <Form.Control type="email" name="email" placeholder='abc123gmail.com' onChange={(e)=>{setValue(e.target.name,e.target.value)}}isInvalid={!!errors.email} />
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.email}
//                   </Form.Control.Feedback>
//                   {/* {record.email}  */}

//                   <Form.Label>Password :</Form.Label> {/* Updated label capitalization */}
//                   <Form.Control type="password" name="pass" placeholder='******' onChange={(e)=>{setValue(e.target.name,e.target.value)}} isInvalid={!!errors.pass} />
//                   <Form.Control.Feedback type='invalid'>
//                     {errors.pass}
//                   </Form.Control.Feedback>
                  
                 
                  
//                 </Form.Group>
//                 <Form.Group className='mt-3' align="center">
//                 <Button className="cbutton" type="submit" href='./'>Back</Button> 
//                 <Button className="cbutton" type="submit" >Login</Button> {/* Added 'custom-button' class */}
//                  {/* Added 'custom-button' class */}
//                   <br/>
//                   <br/>
//                   Don't have an account !<a href='/sellerregister' className='abc'> REGISTER</a>
//                 </Form.Group>
//               </Form>
//             </Col>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Sellerlogin;


import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AXIOS from 'axios';
import { useNavigate } from 'react-router-dom';

function Sellerlogin() {
  const nav = useNavigate();
  const [record, setRecord] = useState({ email: "", pass: "" });
  const [errors, setErrors] = useState({});

  // Function to find errors in the form
  const findErrors = () => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.]*)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const { email, pass } = record;
    const newErrors = {};

    if (!email || email === "") {
      newErrors.email = "Email field is required";
    } else if (!re.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!pass || pass === "") {
      newErrors.pass = "Password field is required";
    } else if (pass.length < 6 || pass.length > 30) {
      newErrors.pass = "Password must be between 6 and 30 characters long";
    }

    return newErrors;
  };

  // Update form data in state
  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value });
    if (!!errors[field]) {
      setErrors({
        ...errors, [field]: null
      });
    }
  };

  // Submit form
  const handlerSubmit = (e) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const url = "http://localhost:9000/sellerlogin";
      AXIOS.post(url, record).then((res) => {
        if (res.data.status === 1) {
          sessionStorage.setItem("sellerid", res.data.userid);
          sessionStorage.setItem("username", res.data.username);
          nav("/sellerpage");
        } else {
          alert(res.data.msg);
        }
      });
    }
  };

  return (
    <>
      <h1 className='head'>LOGIN HERE !</h1>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={10} className='border shadow p-5 mt-4 rounded'>
            <Form onSubmit={handlerSubmit}>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder='abc123@gmail.com'
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  isInvalid={!!errors.email}
                  autoComplete="email" // Added autoComplete attribute
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.email}
                </Form.Control.Feedback>

                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="pass"
                  placeholder='******'
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  isInvalid={!!errors.pass}
                  autoComplete="current-password" // Added autoComplete attribute
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.pass}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='mt-3' align="center">
                <Button className="cbutton" type="button" onClick={() => nav("/")}>
                  Back
                </Button> 
                <Button className="cbutton" type="submit">
                  Login
                </Button>
                <br />
                <br />
                Don't have an account? <a href='/sellerregister' className='abc'>REGISTER</a>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sellerlogin;
