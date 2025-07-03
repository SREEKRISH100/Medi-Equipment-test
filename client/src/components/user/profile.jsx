// import { useEffect, useState } from 'react';
// import AXIOS from 'axios';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import './profile.css'

// export default function Profile() {
//     const idn = sessionStorage.getItem('userid');
//     const [record, setRecord] = useState([]);

//     useEffect(() => {
//         const url = `http://localhost:9000/fetchByid/${idn}`;
//         AXIOS.get(url).then((res) => {
//             setRecord(res.data);
//         });
//     }, [idn]);

//     return (
//         <Container className="mt-5">
//             {record.map((ls) => (
//                 <Row className="justify-content-center" key={ls._id}>
//                     <Col md={8}>
//                         <Card className="shadow-sm p-4 mb-4 rounded">
//                             {/* Profile Picture (Optional) */}
//                             {/* <Card.Img variant="top" src="profile-image-url.jpg" className="rounded-circle" style={{ width: '150px', height: '150px', margin: '0 auto', objectFit: 'cover' }} /> */}
//                             <Card.Body>
//                                 <h2 className="text-center text-info mb-4">Profile Details</h2>
//                                 <h4 className="mb-3"><strong>Full Name:</strong> {ls.fullname}</h4>
//                                 <h5 className="mb-3"><strong>Email:</strong> <a href={`mailto:${ls.email}`}>{ls.email}</a></h5>
//                                 <h5 className="mb-3"><strong>Phone:</strong> {ls.phone}</h5>
//                                 <h5 className="mb-3"><strong>Address:</strong> {ls.address}</h5>
//                                 <div className="d-flex justify-content-center mt-4">
//                                     <Button variant="primary" size="lg">Edit Profile</Button>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             ))}
//         </Container>
//     );
// }

import { useEffect, useState } from 'react';
import AXIOS from 'axios';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import './profile.css';

export default function Profile() {
    const idn = sessionStorage.getItem('userid');
    const [record, setRecord] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState({
        fullname: '',
        email: '',
        phone: '',
        address: ''
    });
    const [error, setError] = useState('');  // To display validation errors

    useEffect(() => {
        const url = `http://localhost:9000/fetchByid/${idn}`;
        AXIOS.get(url).then((res) => {
            setRecord(res.data);
            setUpdatedData(res.data[0]);
        });
    }, [idn]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Validation function
    const validateForm = () => {
        const { fullname, email, phone, address } = updatedData;

        if (!fullname || !email || !phone || !address) {
            return 'All fields are required!';
        }

        const fullnamePattern = /^[a-zA-Z\s]+$/;
        if (!fullnamePattern.test(fullname)) {
            return 'Please enter a valid full name (letters and spaces only).';
        }
        // Simple email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            return 'Please enter a valid email address.';
        }

        // Simple phone validation (checking length and numeric)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            return 'Please enter a valid 10-digit phone number.';
        }

        return '';  // No errors
    };

    const handleSave = () => {
        const errorMessage = validateForm();
        if (errorMessage) {
            setError(errorMessage);  // Display validation error message
            return;  // Don't proceed with saving if validation fails
        }

        const url = `http://localhost:9000/updateData/${idn}`;
        AXIOS.put(url, updatedData).then((res) => {
            setRecord([res.data]);
            setIsEditing(false);
            window.location.reload();  // Optionally, redirect or update state
        }).catch(err => console.log('Error saving profile: ', err));
    };

    return (
        <Container className="mt-5">
            {record.map((ls) => (
                <Row className="justify-content-center" key={ls._id}>
                    <Col md={8}>
                        <Card className="shadow-sm p-4 mb-4 rounded">
                            <Card.Body>
                                <h2 className="text-center text-info mb-4">Profile Details</h2>
                                {error && <Alert variant="danger">{error}</Alert>} {/* Display error message */}

                                {isEditing ? (
                                    // Edit Form
                                    <Form>
                                        <Form.Group controlId="formFullname">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="fullname"
                                                value={updatedData.fullname}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={updatedData.email}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                value={updatedData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formAddress">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="address"
                                                value={updatedData.address}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>

                                        <div className="d-flex justify-content-center mt-4">
                                            <Button variant="success" size="lg" onClick={handleSave}>
                                                Save Changes
                                            </Button>
                                        </div>
                                    </Form>
                                ) : (
                                    // View Mode
                                    <>
                                        <h4 className="mb-3"><strong>Full Name:</strong> {ls.fullname}</h4>
                                        <h5 className="mb-3"><strong>Email:</strong> <a href={`mailto:${ls.email}`}>{ls.email}</a></h5>
                                        <h5 className="mb-3"><strong>Phone:</strong> {ls.phone}</h5>
                                        <h5 className="mb-3"><strong>Address:</strong> {ls.address}</h5>

                                        <div className="d-flex justify-content-center mt-4">
                                            <Button
                                                variant="primary"
                                                size="lg"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                Edit Profile
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}
