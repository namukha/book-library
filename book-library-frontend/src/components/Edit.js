import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Input from './Input';

const Edit = (props) => {
    const [show, setShow] = useState(false);
    const { renderr, setRenderr } = props.onRndr;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (e) => {
        e.preventDefault()
        fetch(`http://54.251.166.194:3002/updateBook/${props.book.isbn}`, {
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
            <img src='/img/edit.svg' onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton> <h2 style={{width: "calc(100% - 32px)", textAlign: "center"}}>Add Book</h2> </Modal.Header>
                <Modal.Body>
                    <Form className='form' onSubmit={handleEdit}>
                        <Input label='Name' defaultValue={props.book.name}/>
                        <Input label='Price' defaultValue={props.book.price}/>
                        <Input label='Author' defaultValue={props.book.author}/>
                        <Input label='ISBN' defaultValue={props.book.isbn}/>
                        <Input type='date' label='Published Date' defaultValue={props.book.pubdate}/>
                        <Button variant="primary" type='submit'>Save</Button> 
                    </Form>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default Edit;