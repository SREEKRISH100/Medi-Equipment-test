import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './nav.css'; 

import { FaLaptopMedical } from "react-icons/fa6";

function Webheader() {
  return (
   <>
    <Navbar  className="navi" style={{backgroundColor:'white'}}>
      <Container>
        <Navbar.Brand className='logo'></Navbar.Brand>
        <Navbar.Brand className="h1" href="#home" style={{marginLeft:'50px'}} ><h1><FaLaptopMedical /> MEDI-EQUIPMENT</h1></Navbar.Brand> 
   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me">
            <a href="#" className='nav'>HOME </a>
            {/* <a href="/userregister" className='nav'>SIGNUP</a>
            <a href="/userlogin" className='nav'>SIGNIN</a> */}
            <a href="/adminlogin" className='nav'>ADMIN</a>
            <a href="/middle3" className='nav'>ABOUTUS</a>
            <a href="/contact" className='nav'>CONTACTUS</a>

      
     
          </Nav>
       
        </Navbar.Collapse>
       
      </Container>

    </Navbar>

</>
  
  );
}

export default Webheader;
