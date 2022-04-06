import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Edit from './Edit'
import Buttonn from './Button';

const Husnegt = (props) => {
    const [books, setBook] = useState([]);
    const [remove, setRemove] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {

        fetch("http://54.251.166.194:3002/books", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                setBook(res.data)
            })
    }, [remove, <Edit />, <Buttonn />])

    const confirmDel = (props) => {
        removeBook(props)
        handleClose()
    }

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
            })
    }

    return (
        <>
            <div className='tbl'>
                <Table striped >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Authors</th>
                            <th>ISBN</th>
                            <th>Published on</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((data, i) =>
                            <>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.price}</td>
                                    <td>{data.author}</td>
                                    <td>{data.isbn}</td>
                                    <td>{data.pubdate.slice(0, 10)}</td>
                                    <td><Edit book={data} /></td>
                                    <td onClick={handleShow}><img src='/img/trash.png' /></td>
                                </tr>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Warning</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Are you sure to delete this book?</Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button variant="primary" onClick={() => confirmDel(data.isbn)}>
                                            Delete
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>

                        )}
                    </tbody>
                </Table>

            </div>
            <Buttonn book={books} />
        </>

    )

}

export default Husnegt;