import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

const Buttonn = () => {

    function addBook() {
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    }

    return (
        <Button className='btn' onClick={addBook()}>+ Add Book</Button>
    )
}

export default Buttonn;