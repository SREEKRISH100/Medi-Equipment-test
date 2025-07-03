// import React from 'react'
// import Employeeview from './employeeview'
// import Empheader from './empheader'
// import { Navbar, Container, Row, Col , Nav , Table } from "react-bootstrap";
// import Profile from './profile';
// import { Routes, Route } from 'react-router-dom';
// import ProductviewCard from './product_card';
// import ViewProductDetail from './viewproductdetail';



// export default function Emppage() {
//   return (
//     <div>
//       <Empheader />
//       {/* <Employeeview/> */}
//       <Container fluid>
//         <Row>
//           <Col lg={2} style={{ height: "500vh", backgroundColor: "lightblue" }}>
//             <Nav defaultActiveKey="/home" className="flex-column">
//               <Nav.Link href="/emppage">Home</Nav.Link>
//               <Nav.Link href="/emppage/profile">Profile</Nav.Link>
//               <Nav.Link href="/">Logout</Nav.Link>
//               {/* <Nav.Link eventKey="disabled" disabled>
//                 Disabled
//               </Nav.Link> */}
//             </Nav>
//           </Col>
//           <Col lg={10}>
//             {/* <Profile /> */}
//             <Routes>
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/" element={<ProductviewCard />} />
//               <Route path="/viewproductdetail/:prdid" element={<ViewProductDetail />} />
             
             
             
//             </Routes>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
// 

import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import ProductviewCard from './product_card';
import Profile from './profile';
import Empheader from './empheader';

import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import ViewProductDetail from './viewproductdetail';
import OrderNow from './order';
import Myorder from './myorder';
import Makepayment from './makepayment';
import PaymentPage from './makepayment';
import { TbSquareRoundedLetterO } from "react-icons/tb";
import PaymentPages from './paymentpage';

export default function Emppage() {
    return (
        <div>
            {/* <Empheader /> */}
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{marginLeft:"130px",color:"black"}}>
                        <Nav.Link as={Link} to="/emppage" style={{ fontSize: "20px" }}> <FaHome />Home</Nav.Link>
                        <Nav.Link as={Link} to="/emppage/profile" style={{ fontSize: "20px" }}><CgProfile />Profile</Nav.Link>
                        <Nav.Link as={Link} to="/emppage/myorder" style={{ fontSize: "20px" }}><TbSquareRoundedLetterO />My Order</Nav.Link>
                        
                        <Nav.Link as={Link} to="/" style={{ fontSize: "20px",marginLeft:"1000px" }}><AiOutlineLogout />Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid>
                
                    
                    <Col lg={10} style={{marginLeft:"130px"}}>
                 
                        <Row>
                      
                            <Routes>
                                <Route path="/" element={<ProductviewCard />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/viewproductdetail/:prdid" element={<ViewProductDetail/>}></Route>
                                <Route path="/order/:pid/:sellerid/:quantity" element={<OrderNow/>}></Route>
                                <Route path="/myorder" element={<Myorder/>}></Route>
                                <Route path="/paymentpage" element={<PaymentPage/>}></Route> 
                                <Route path="/paymentpages" element={ <PaymentPages/>}></Route>
                            </Routes>
                        </Row>
                    </Col>
                
            </Container>
        </div>
    );
}