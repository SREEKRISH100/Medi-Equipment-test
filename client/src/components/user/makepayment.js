import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import AXIOS  from 'axios'

const PaymentPage = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [activeKey, setActiveKey] = useState('card');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted');
    
    message.success('Thank you for purchasing a product from us...');
    navigate("/emppage/paymentpages");
  };

  const handlePaymentMethodChange = (key) => {
    setActiveKey(key);

  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
        <center>
          <h1>Payment Details</h1>  </center> 
          <Tab.Container activeKey={activeKey} onSelect={handlePaymentMethodChange}>
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="card">Card Payment</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="gpay">Google Pay</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="paytm">Paytm</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="card">
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formCardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter card number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formCardHolder">
                    <Form.Label>Card Holder Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter card holder name"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formExpiry">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formCvv">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit Payment</Button>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="gpay">
                <Button variant="success" onClick={() => message.info('Payment Successfull')}>
                  Pay with Google Pay
                </Button>
              </Tab.Pane>
              <Tab.Pane eventKey="paytm">
                <Button variant="success" onClick={() => message.info('Payment Successfull')}>
                  Pay with Paytm
                </Button>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
