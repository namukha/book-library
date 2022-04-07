import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const ConfirmDel = (props) => {
    const [remove, setRemove] = useState(false);
    const [show, setShow] = useState(false);
    const {renderr, setRenderr} = props.onRndr;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeBook = (e) => {
        setRemove(true)
        console.log(e)
        fetch(`http://54.251.166.194:3002/deleteBook/${e}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(() => {
                setRemove(false)
                handleClose()
            })
            .finally(() => {
                setRenderr(!renderr)
            })
    }

    return (
        <>
        <div onClick={()=>handleShow()}>
        <img src='/img/trash.svg' />
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete this book?</Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => removeBook(props.data)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>   
        </>
              
    )
}

export default ConfirmDel