import React from 'react'
import { Navbar, Container,Row,Col } from 'react-bootstrap'

export default function Empheader() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.shutterstock.com/image-photo/kiev-ukraine-april-16-2015-600nw-276697244.jpg"
              width="70"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Medi-Equip
          </Navbar.Brand>
       
        </Container>
      </Navbar> 
    </>
  )
}