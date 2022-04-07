import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import Edit from './Edit'
import Buttonn from './Button';
import ConfirmDel from './ConfirmDel';

const Husnegt = () => {
    const [books, setBook] = useState([]);
    const [renderr, setRenderr] = useState(false);

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
    }, [renderr])

    return (
        <>
            <div className='tbl'>
                <Table striped responsive>
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
                                    <td><Edit book={data} onRndr={{renderr, setRenderr}}/></td>
                                    <td><ConfirmDel data = {data.isbn} onRndr={{renderr, setRenderr}}/></td>
                                </tr>
                            </>

                        )}
                    </tbody>
                </Table>

            </div>
            <Buttonn book={books} onRndr={{renderr, setRenderr}}/>
        </>

    )

}

export default Husnegt;