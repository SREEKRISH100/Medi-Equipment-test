import React from 'react'
import Employeeview from './employeeview'
import Empheader from './empheader'
import { Navbar, Container, Row, Col , Nav , Table } from "react-bootstrap";
import Profile from './profile';


export default function Emppage() {
  return (
    <div>
      <Empheader />
      {/* <Employeeview/> */}
      <Container fluid>
        <Row>
          <Col lg={2} style={{height:'100vh'}} className='bg-warning'>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="">Profile</Nav.Link> 
              <Nav.Link eventKey="">Logout</Nav.Link>
              {/* <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link> */}
            </Nav>
          </Col>
          <Col lg={10}>
            <Profile/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}