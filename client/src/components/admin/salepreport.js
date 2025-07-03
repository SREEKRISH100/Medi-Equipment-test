import React, { useEffect, useState } from 'react';
import { Container, Table, Row, Col, Button } from 'react-bootstrap';
import { message } from 'antd';
import AXIOS from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SaleReport() {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    // Fetch all orders
    useEffect(() => {
        AXIOS.get("http://localhost:9000/getAllOrder")
            .then((res) => setOrders(res.data))
            .catch((err) => {
                message.error("Failed to fetch orders.");
                console.error(err);
            });
    }, []);

    // Fetch products and users for payment details
    useEffect(() => {
        AXIOS.get("http://localhost:9000/paymentpage")
            .then((res) => {
                setProducts(res.data.prod || []);
                setUsers(res.data.user || []);
            })
            .catch((err) => {
                message.error("Failed to fetch payment details.");
                console.error(err);
            });
    }, []);

    // Prepare data for the chart
    const chartData = products.map((order) => ({
        name: order.pid?.productname || "Unknown Product",
        quantity: order.prodquantity || 0,
    }));

    // Function to generate and download CSV
    const generateCSV = () => {
        const csvContent =
            "data:text/csv;charset=utf-8," +
            "User Name,Product Name,Product Price,Address,Quantity,Total Amount\n";

        const dataRows = orders.map((order) => {
            return `${order.userid?.fullname || "N/A"},${order.pid?.productname || "N/A"},${order.pid?.productprice || 0},${order.address || "N/A"},${order.prodquantity || 0},${(order.prodquantity || 0) * (order.pid?.productprice || 0)}`;
        });

        const csvData = csvContent + dataRows.join("\n");
        const encodedUri = encodeURI(csvData);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "sale_report.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <Container>
            <Row className="mb-4">
                <Col className="text-center">
                    <h2>Sales Report</h2>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="quantity" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button onClick={generateCSV} className="mb-3" variant="primary">
                        Download CSV
                    </Button>

                    <Table striped bordered hover>
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>User Name</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Address</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.userid?.fullname || "N/A"}</td>
                                        <td>{order.pid?.productname || "N/A"}</td>
                                        <td>₹{order.pid?.productprice || 0}</td>
                                        <td>{order.pid?.category || "N/A"}</td>
                                        <td>{order.address || "N/A"}</td>
                                        <td>{order.prodquantity || 0}</td>
                                        <td>₹{(order.prodquantity || 0) * (order.pid?.productprice || 0)}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center text-muted">
                                        No sales data available.
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
