import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { message } from 'antd';
import AXIOS from 'axios';

export default function Myorder() {
    const sellerid = sessionStorage.getItem("sellerid");
    const [record, setRecord] = useState([]);

    useEffect(() => {
        if (sellerid) {
            AXIOS.get(`http://localhost:9000/getAllOrderbysellerid/${sellerid}`)
                .then((res) => {
                    setRecord(res.data);
                })
                .catch((err) => {
                    message.error("Failed to fetch orders. Please try again.");
                    console.error(err);
                });
        }
    }, [sellerid]); // Dependency added to prevent infinite loop

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="my-4 text-center">My Orders</h2>
                    <Table bordered striped hover responsive>
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Product Detail</th>
                                <th>Order Detail</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {record.length > 0 ? (
                                record.map((ls, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img 
                                                src={`http://localhost:9000/${ls.pid?.image}`} 
                                                alt="Product" 
                                                style={{ width: '100px', height: '95px' }} 
                                                className="rounded"
                                            />
                                            <h5>Product Name: {ls.pid?.productname || "N/A"}</h5>
                                            <h6>Category: {ls.pid?.category || "N/A"}</h6>
                                            <h6>Buyer: {ls.userid?.fullname || "N/A"}</h6>
                                            <h6>Price: ₹{ls.pid?.productprice || "N/A"}</h6>
                                        </td>
                                        <td>
                                            <h5>Total Quantity: {ls.prodquantity || "N/A"}</h5>
                                            <h6>Address: {ls.address || "N/A"}</h6>
                                            <hr />
                                            <h6>Order Date: {ls.createdAt ? new Date(ls.createdAt).toLocaleString() : "N/A"}</h6>
                                        </td>
                                        <td className="text-capitalize">
                                            {ls.status || "Pending"}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center text-muted">
                                        No orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
