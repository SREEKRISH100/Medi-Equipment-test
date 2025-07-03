import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Card, Dropdown } from 'react-bootstrap';
import AXIOS from 'axios';
import { MdDelete } from 'react-icons/md';
import blk from '../images/block.png'
export default function ProductviewCard() {
    const [uname, setUname] = useState('');
    const [product, setProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const url = "http://localhost:9000/fetchAllprd";
        AXIOS.get(url).then((res) => {
            setProduct(res.data);
        });
    }, []);

    const deleteProduct = (userid) => {
        let ans = window.confirm("Do you want to delete?");
        if (ans) {
            const url = `http://localhost:9000/deleteproducts/${userid}`;
            AXIOS.get(url).then((res) => {
                alert(res.data);
            });
        } else {
            alert("Delete is canceled");
        }
    };

    const viewDetail = (prdid) => {
        window.location.href = `/emppage/viewproductdetail/${prdid}`;
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setUname(''); // Reset the search input when a category is selected
    };

    return (
        <>
            <Container>
                {/* Dropdown for categories */}
                {/* <Row className="mt-3" style={{paddingLeft:"100px"}}>
                    <Dropdown onSelect={handleCategorySelect}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Equipment
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="WheelChair">WheelChair</Dropdown.Item>
                            <Dropdown.Item eventKey="Bed">Bed</Dropdown.Item>
                            <Dropdown.Item eventKey="Walker">Walker</Dropdown.Item>
                            <Dropdown.Item eventKey="Orthopedic Belt">Orthopedic Belt</Dropdown.Item>
                            <Dropdown.Item eventKey="Massager">Massager</Dropdown.Item>
                            <Dropdown.Item eventKey="Oxygen concentrator">oxygen concentrator</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row> */}

                {/* Product list */}
                <Row className="shadow rounded-4 p-3 mt-3 pb-1 border">
                    <Col>
                        <Form.Label>
                            <h3 className="text-info">Product list</h3>
                        </Form.Label>
                    </Col>
                    <Col lg={3}>
                        <Form.Control
                            type="text"
                            onChange={(e) => setUname(e.target.value)}
                            placeholder="search by name"
                            required
                        />
                    </Col>
                </Row>
                <Row className="mt-3">
    {product
        .filter((ls) => {
            // First filter: Match the search term (uname) with product name or category
            const matchesSearchTerm = ls.productname.toLowerCase().includes(uname.toLowerCase()) || 
                                      ls.category.toLowerCase().includes(uname.toLowerCase());

            // Second filter: Match the selected category (if any)
            const matchesCategory = selectedCategory ? ls.category.toLowerCase() === selectedCategory.toLowerCase() : true;

            // Return products that match both filters
            return matchesSearchTerm && matchesCategory;
        })
        .map((ls) => (
            <Col key={ls._id} lg={4} className="mb-3">
                <Card style={{ width: '100%' }}>
                    <Card.Img
                        variant='top'
                        src={`http://localhost:9000/${ls.image}`}
                        style={{ height: "340px" }}
                    />
                    <Card.Body>
                        <Card.Title>
                            Product Name: {ls.productname}
                        </Card.Title>
                        <Card.Text>
                            <p>Quantity: {ls.productquantity >= 1 ? ls.productquantity : <img src={blk} style={{ width: '80px', height: '80px' }} />}</p>
                        </Card.Text>
                        <Card.Text>
                            <p>Price: {ls.productprice}</p>
                        </Card.Text>
                        <Card.Text>
                            <p>Category: {ls.category}</p>
                        </Card.Text>
                        {ls.productquantity >= 1 ? (
                            <a href={`/emppage/viewproductdetail/${ls._id}`} className='btn btn-danger'>
                                View Details
                            </a>
                        ) : "Stock Close"}
                    </Card.Body>
                </Card>
            </Col>
        ))}
</Row>

                        </Container>
                        </>
    );
}