import React from 'react'
import {Container,Row,Col,Button} from'react-bootstrap'
import './nav.css'; 
export default function Secondheader() {
  return (
    <>
    
  <Container fluid className="text-center bg" style={{height:'623px'}} >
    <Row>
        <Col>
        <pre>
        <span className='txt1'>Buy and Sell </span>
        <h2 className='txt2'>Medical Equipments Without The Hassle.</h2>
        <Button className='bt' type='button' href='/sellerlogin' style={{fontFamily:"cursive"}}>Sell Equipment</Button>   <Button className='bt' type='button' href='/userlogin' style={{fontFamily:"cursive"}}>Buy Equipment</Button>
  
        </pre>
        </Col>
    </Row>
  
</Container>
    
    </>
  )
}
