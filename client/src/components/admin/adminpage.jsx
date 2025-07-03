import React, { useState } from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Productview from '../user/productview';
import Usersearch from './usersearch';
import Adminheader from './adminheader';
import Useredit from './useredit';
import Sellersearch from './sellersearch';
import { IoHome } from "react-icons/io5";
import { FaUsers, FaFirstOrderAlt } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import Myorder from './allorder';
import SaleReport from './salepreport';
import './Adminpage.css'; // Import custom CSS

export default function Adminpage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const handleMouseEnter = () => setSidebarCollapsed(false);
  const handleMouseLeave = () => setSidebarCollapsed(true);

  return (
    <div>
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col lg={2} className="sidebar-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
              <div className="sidebar-header">
                <h4>Admin Panel</h4>
              </div>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/adminpage"><IoHome /> Home</Nav.Link>
                <Nav.Link href="/adminpage/usersearch"><FaUsers /> Users</Nav.Link>
                <Nav.Link href="/adminpage/sellersearch"><FaUsers /> Sellers</Nav.Link>
                <Nav.Link href="/adminpage/productview"><GrProductHunt /> Product</Nav.Link>
                <Nav.Link href="/adminpage/allorder"><FaFirstOrderAlt /> Orders</Nav.Link>
                <Nav.Link href="/adminpage/salereport"><FaFirstOrderAlt /> Sales Report</Nav.Link>
                <Nav.Link href="/"><AiOutlineLogout /> Logout</Nav.Link>
              </Nav>
            </div>
          </Col>

          {/* Main Content */}
          <Col lg={10} className="main-content">
            <Adminheader />
            <Routes>
              <Route path="productview" element={<Productview />} />
              <Route path="/useredit/:id" element={<Useredit />} />
              <Route path="usersearch" element={<Usersearch />} />
              <Route path="sellersearch" element={<Sellersearch />} />
              <Route path="allorder" element={<Myorder />} />
              <Route path="/salereport" element={<SaleReport />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
