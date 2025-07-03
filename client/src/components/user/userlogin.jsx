import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css';
import AXIOS from 'axios';
import { useNavigate } from 'react-router-dom';

function Userlogin() {
  const nav = useNavigate();
  const [record, setRecord] = useState({ email: "", pass: "" });
  const [errors, setErrors] = useState({});

  const findErrors = () => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.]*)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.;:\s@\"]{2,})$/i;
    const { email, pass } = record;
    const newErrors = {};

    if (!email || email === "") {
      newErrors.email = "Email field is required";
    } else if (!re.test(email)) {
      newErrors.email = "Invalid email";
    }

    if (!pass || pass === "") {
      newErrors.pass = "Password field is required";
    } else if (pass.length < 6 || pass.length > 30) {
      newErrors.pass = "Password must be between 6 and 30 characters";
    }

    return newErrors;
  };

  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value });
    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const url = "http://localhost:9000/login";
      AXIOS.post(url, record).then((res) => {
        if (res.data.status === 1) {
          sessionStorage.setItem("userid", res.data.userid);
          sessionStorage.setItem("username", res.data.username);
          nav("/emppage"); // Navigate to emppage after successful login
        } else {
          alert(res.data.msg);
        }
      });
    }
  };

  return (
    <>
      <h1 className="head">LOGIN HERE!</h1>
      <Container>
        <Row>
          <Col></Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10} className="border shadow p-5 mt-4 rounded">
            <Col>
              <Form onSubmit={handlerSubmit}>
                <Form.Group>
                  <Form.Label>Email :</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="abc123@gmail.com"
                    onChange={(e) => setValue(e.target.name, e.target.value)}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>

                  <Form.Label>Password :</Form.Label>
                  <Form.Control
                    type="password"
                    name="pass"
                    placeholder="******"
                    onChange={(e) => setValue(e.target.name, e.target.value)}
                    isInvalid={!!errors.pass}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.pass}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mt-3" align="center">
                  <Button
                    className="cbutton"
                    type="button"
                    onClick={() => nav("/")} // Redirect to home or previous page
                  >
                    Back
                  </Button>
                  <Button className="cbutton" type="submit">
                    Login
                  </Button>
                  <br />
                  <br />
                  Don't have an account!{" "}
                  <a href="/userregister" className="abc">
                    REGISTER
                  </a>
                </Form.Group>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Userlogin;
