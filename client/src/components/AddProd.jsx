
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addProd } from '../JS/actions/prodAction';

function AddProd() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()

  const [newProd, setNewProd] = useState({
    title: '',
    description: '',
    price: 0,
    image: ''
  });
  const handleChange = (e) => {
    setNewProd({ ...newProd, [e.target.name]: e.target.value });
  };

  const handleAddProd = (e) => {
    e.preventDefault();
    dispatch(addProd(newProd));
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ backgroundColor: '#607D8B', borderRadius: '10px', border: 'none', padding: '10px', fontSize: '16px' }}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter title" name = "title" value = {newProd.title} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter description" name = "description" value = {newProd.description} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="number" name = "price" value = {newProd.price} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Image URL" name = "image" value = {newProd.image} onChange = {handleChange} />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProd}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProd;

