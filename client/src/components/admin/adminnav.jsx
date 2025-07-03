import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import './adminnav.css'; 


function Adminnav() {
  return (
   <>
    <Navbar expand="lg" className="navi">
      <Container>
        <Navbar.Brand href="#home" className="navbar"><h1>MEDI-EQUIP</h1></Navbar.Brand> 
   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me">
            <a href="/" className='nav' >HOME </a>
            <a href="/addproduct" className='nav'>ADDPRODUCTS</a>
            <a href="/usersearch" className='nav'>VIEWUSERS</a>
            <a href="/productview" className='nav'>VIEWPRODUCTS</a>
            
           
     
          </Nav>
       
        </Navbar.Collapse>
       
      </Container>

    </Navbar>
  
</>
  
  );
}

export default Adminnav;