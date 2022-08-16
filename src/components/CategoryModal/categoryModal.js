import React, { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../../context/categoryContext';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm';

const CategoryModal = (props) => {
    const { category } = props;
    const { deleteCategory } = useContext(CategoryContext);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [category]);

    return (
        <div>
                <td>{category.CatId}</td>
                <td>{category.CatName}</td>
                <td>
                    <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
                        <button onClick={handleShow} className='btn text-warning btn-act' data-toggle='modal'>
                            <i className='material-icons'>&#xE254;</i>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
                        <button
                            onClick={() => deleteCategory(category._id)}
                            className='btn text-danger btn-act'
                            data-toggle='modal'
                        >
                            <i className='material-icons'>&#xE872;</i>
                        </button>
                    </OverlayTrigger>
                </td>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditForm theEmployee={category} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                            Close Button
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
};

export default CategoryModal;
