import {Col, Container, Row } from "react-bootstrap";
import img from './images/Screenshot (25).png'
export default function Middle(){
    return(
        <>
        <Container>
        {/* <Container fluid className="ba" style={{height:'623px',width:'100%',marginLeft:'-273px'}} >

  
</Container> */}
<img src={img} style={{width:'1150px',height:'600px'}}></img>
    
        </Container>
        
        </>
    )
}