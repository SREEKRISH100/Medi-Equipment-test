import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { message } from "antd";
import AXIOS from "axios";
import { useForm } from "react-hook-form";

export default function PaymentPages() {
    const userid = sessionStorage.getItem("userid");
    const orderid = sessionStorage.getItem("orderid");

    const [record, setRecord] = useState([]);
    const [prod, setProd] = useState([]);
    const [user, setUser] = useState([]);
    
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    useEffect(() => {
        if (!userid) {
            message.error("User ID is missing. Please log in again.");
            return;
        }

        AXIOS.get(`http://localhost:9000/getAllOrderbyuserid/${userid}`)
            .then((res) => setRecord(res.data))
            .catch((err) => message.error("Failed to fetch orders: " + err));
    }, [userid]);

    useEffect(() => {
        if (!orderid) {
            message.error("Order ID is missing.");
            return;
        }

        AXIOS.get(`http://localhost:9000/paymentpage/${orderid}`)
            .then((res) => {
                if (res.data) {
                    setProd(res.data.prod || []);
                    setUser(res.data.user || []);
                }
            })
            .catch((err) => message.error("Error fetching payment details: " + err));
    }, [orderid]);

    const onSubmit = (data) => {
        message.success("Payment successful!");
        console.log("Payment Details:", data);
    };

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Product Used</th>
                        <th>Address</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {user.length > 0 ? (
                        user.map((ls, index) => (
                            <tr key={index}>
                                <td>{ls.productname || "N/A"}</td>
                                <td>&#8377;{ls.productprice || 0}</td>
                                <td>{ls.category || "N/A"}</td>
                                <td>{ls.prod_used || "N/A"}</td>
                                {prod.length > 0 ? (
                                    prod.map((ord, idx) => (
                                        <React.Fragment key={idx}>
                                            <td>{ord.address || "N/A"}</td>
                                            <td>{ord.prodquantity || 0}</td>
                                            <td>&#8377;{(ord.prodquantity || 0) * (ls.productprice || 0)}</td>
                                        </React.Fragment>
                                    ))
                                ) : (
                                    <td colSpan="3">No product data available</td>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={{ textAlign: "center" }}>No user data available</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <h3>Payment Details</h3>
            <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                <Form.Group>
                    <Form.Label>Cardholder Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter name on card"
                        {...register("cardholder", { 
                            required: "Cardholder name is required",
                            pattern: { value: /^[A-Za-z ]+$/, message: "Only letters and spaces allowed" }
                        })}
                    />
                    {errors.cardholder && <span className="text-danger">{errors.cardholder.message}</span>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter 16-digit card number"
                        maxLength="16"
                        {...register("cardNumber", { 
                            required: "Card number is required", 
                            pattern: { value: /^[0-9]{16}$/, message: "Enter a valid 16-digit card number" }
                        })}
                    />
                    {errors.cardNumber && <span className="text-danger">{errors.cardNumber.message}</span>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control
                        type="month"
                        {...register("expiry", {
                            required: "Expiration date is required",
                            validate: value => {
                                const today = new Date();
                                const inputDate = new Date(value + "-01");
                                return inputDate > today || "Expiration date must be in the future";
                            }
                        })}
                    />
                    {errors.expiry && <span className="text-danger">{errors.expiry.message}</span>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter 3 or 4 digit CVV"
                        maxLength="4"
                        {...register("cvv", { 
                            required: "CVV is required", 
                            pattern: { value: /^[0-9]{3,4}$/, message: "Enter a valid 3 or 4-digit CVV" }
                        })}
                    />
                    {errors.cvv && <span className="text-danger">{errors.cvv.message}</span>}
                </Form.Group>

                <Button type="submit" className="mt-3">Pay Now</Button>
            </Form>
        </Container>
    );
}
