import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Buttonn() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const addBook = (e) => {
        e.preventDefault()
        fetch(`http://54.251.166.194:3002/addBook`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "name": e.target[0].value,
                    "price": e.target[1].value,
                    "author": e.target[2].value,
                    "isbn": e.target[3].value,
                    "pubdate": e.target[4].value,
                }
            )
        })
            .then(res => res.json())
            .then(() => {
                handleClose()
            })
    }

    return (
        <>
            <Button className='btn' onClick={handleShow}>
                + Add Book
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton> <Modal.Title>Add Book</Modal.Title> </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addBook}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text" placeholder="Name" defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text" placeholder="Price" defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text" placeholder="Author" defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text" placeholder="ISBN" defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="date" placeholder="Published Date" defaultValue=""
                            />
                        </Form.Group>
                        <Button variant="primary" type='submit'>
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Buttonn;