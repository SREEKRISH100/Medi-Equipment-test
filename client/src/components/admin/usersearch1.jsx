import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Table } from "react-bootstrap";
import AXIOS from "axios";
import { MdDelete } from "react-icons/md"
export default function Usersearch1() {
  const [uname, setUname] = useState("");
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const url = "http://localhost:9000/fetchAlluser";
    AXIOS.get(url).then((res) => {
      setRecord(res.data);
    });
  });
  const deleteuser=(userid)=>{
    let ans=window.confirm("Do u want to delete?")
    if(ans){
      const url=`http://localhost:9000/deleteusers/${userid}`;
      AXIOS.get(url).then((res)=>{
        alert(res.data)
      })
    }
    else
    {
        alert("Delete is cancelled")
    }
}
  return (
    <>
      <Container>
        <Row className="shadow rounded-4 p-3 mt-3 pb-1 border">
          <Col>
            <Form.Label>
              <h3 className="text-info">User list</h3>
            </Form.Label>
          </Col>
          <Col lg={3}>
            <Form.Control
              type="text"
              placeholder="Search by Name"
              onChange={(e) => setUname(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row className="shadow rounded-4 p-3 mt-3 border">
          <Table>
            <thead>
              <tr>
                <th>SlNo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {
                //   record.map((ls, index) => {
                //     const matches = uname.match(ls.bikename);
                //     if (matches) {
                uname != ""
                  ? record
                      .filter((ls) => {
                        return ls.fullname.match(uname);
                      })
                      .map((ls, index) => {
                        return (
                          <tr key={ls._id}>
                            <td>{index + 1}</td>
                            <td>{ls.fullname}</td>
                            <td>{ls.email}</td>
                            <td>{ls.phone}</td>
                        
                          </tr>
                        );
                      })
                  : record.map((ls, index) => {
                      return (
                        <tr key={ls._id}>
                          <td>{index + 1}</td>
                          <td>{ls.fullname}</td>
                          <td>{ls.email}</td>
                          <td>{ls.phone}</td>
                          <td>
                                <MdDelete onClick={()=>{deleteuser(ls._id)
                                }}
                                style={{color:'red', fontSize:'30px'}} />

                                </td>
                    
                        </tr>
                      );
                    })
              }
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}