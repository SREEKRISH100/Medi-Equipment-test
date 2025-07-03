import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import Usersearch1 from "../admin/usersearch1";
import Addproducte from "../admin/addproduct";
import Productview1 from "./productview1";
import Productedit from "./productedit";
import Myorder from "./order";

import { FaUsers, FaBoxOpen, FaFirstOrderAlt } from "react-icons/fa";
import { IoHome, IoAddCircleSharp } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { FaLaptopMedical } from "react-icons/fa6";

export default function Sellerpage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Container fluid>
        {/* Header */}
        <Row className="header">
          <h1>
            <FaLaptopMedical className="logo-icon" /> Medi-Equip
          </h1>
        </Row>

        <Row>
          {/* Sidebar */}
          <Col lg={2} className="sidebar p-3">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/sellerpage" className="nav-item">
                <IoHome className="icon" /> Home
              </Nav.Link>
              {/* <Nav.Link href="/sellerpage/usersearch1" className="nav-item">
                <FaUsers className="icon" /> Users
              </Nav.Link> */}
              <Nav.Link href="/sellerpage/addproduct" className="nav-item">
                <IoAddCircleSharp className="icon" /> Add Products
              </Nav.Link>
              <Nav.Link href="/sellerpage/productview1" className="nav-item">
                <FaBoxOpen className="icon" /> Products
              </Nav.Link>
              <Nav.Link href="/sellerpage/order" className="nav-item">
                <FaFirstOrderAlt className="icon" /> Orders
              </Nav.Link>
              <Nav.Link onClick={handleLogout} className="nav-item logout">
                <AiOutlineLogout className="icon" /> Logout
              </Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col lg={10} className="content">
     
            <Routes>
              <Route path="/" element={<Myorder/>}/>
              <Route path="productview1" element={<Productview1 />} />
              <Route path="productedit/:id" element={<Productedit />} />
              <Route path="usersearch1" element={<Usersearch1 />} />
              <Route path="addproduct" element={<Addproducte />} />
              <Route path="order" element={<Myorder />} />
            </Routes>
          </Col>
        </Row>
      </Container>

      {/* Styles */}
      <style>{`
        .header {
          background: rgb(7, 79, 150);
          color: white;
          padding: 15px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
        }
        .logo-icon {
          margin-right: 10px;
        }
        .sidebar {
          background: rgb(7, 79, 150);
          min-height: 100vh;
          color: white;
        }
        .nav-item {
          padding: 15px;
          font-size: 18px;
          color: white;
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: 0.3s;
        }
        .nav-item:hover {
          background: rgb(93, 165, 237);
          border-radius: 5px;
          color: white;
        }
        .icon {
          margin-right: 10px;
          font-size: 20px;
        }
        .logout {
          margin-top: auto;
          color: red;
          cursor: pointer;
        }
        .content {
          padding: 20px;
          background: #f8f9fa;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
