import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Buttonn(props) {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('');
    const { renderr, setRenderr } = props.onRndr;

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    function handleChange(e) {
        setValue(e.target.value);
      }

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
                <Modal.Header closeButton> <Modal.Title>Add Book</Modal.Title> </Modal.Header>
                <Modal.Body>
                    <Form className='form' onSubmit={addBook}>
                        <div className="input-container">
                            <input type='text' defaultValue="" onChange={handleChange}/>
                            <label className={value && 'filled'}> Name </label>
                        </div>
                        <div className="input-container">
                            <input type='text' defaultValue="" />
                            <label> Price </label>
                        </div>
                        <div className="input-container">
                            <input type='text' defaultValue="" />
                            <label> Author </label>
                        </div>
                        <div className="input-container">
                            <input type='text' defaultValue="" />
                            <label> ISBN </label>
                        </div>
                        <div className="input-container">
                            <input type='date' defaultValue="" />
                            <label> Published Date </label>
                        </div>
                        <Button variant="primary" type='submit'>Save</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Buttonn;