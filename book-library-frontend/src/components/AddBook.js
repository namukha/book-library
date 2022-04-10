import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Input from './Input';

function Buttonn(props) {
    const [show, setShow] = useState(false);
    const { renderr, setRenderr } = props.onRndr;

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
            .finally(() => {
                setRenderr(!renderr)
            })
    }

    return (
        <>
            <Button className='btn' onClick={handleShow}>
                + Add Book
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton> <h2 style={{width: "calc(100% - 32px)", textAlign: "center"}}>Add Book</h2> </Modal.Header>
                <Modal.Body>
                    <Form className='form' onSubmit={addBook}>
                        <Input label="Name"/>
                        <Input label="Price"/>
                        <Input label="Author"/>
                        <Input label="ISBN"/>
                        <Input type="date" defaultValue='2022-01-01' label="Published Date"/>
                        <Button type='submit'>Save</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Buttonn;