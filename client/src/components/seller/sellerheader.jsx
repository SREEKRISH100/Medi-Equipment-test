import React from 'react'
import { Navbar, Container,Row,Col } from 'react-bootstrap'

import { FaLaptopMedical } from "react-icons/fa6";

export default function Sellerheader() {
  return (
    <>
    <Navbar className="abc" style={{backgroundColor:"rgb(7, 79, 150)"}}>
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="https://i0.wp.com/e7.pngegg.com/pngimages/831/88/png-clipart-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design.png?ssl=1"
              height="50"
              width="50"
              
              className="d-inline-block align-top "
            />{' '} */}
        <h1 style={{paddingLeft:"25px"}}><FaLaptopMedical />   Medi-Equip</h1> 
          </Navbar.Brand>
       
        </Container>
      </Navbar> 
    </>
  )
}