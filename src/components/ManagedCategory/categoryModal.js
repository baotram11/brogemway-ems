import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { Modal, Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { CategoryContext } from '../../contexts/categoryContext';
import EditCategory from './editCategory';

const CategoryModal = ({ category }) => {
    const { deleteCategory } = useContext(CategoryContext);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [category]);
    return (
        <>
            <td>{category.CatID}</td>
            <td>{category.CatName}</td>
            <td>
                <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Sửa</Tooltip>}>
                    <button onClick={handleShow} className='btn text-warning btn-act' data-toggle='modal'>
                        <i className='fa-solid fa-pen'></i>
                    </button>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Xoá</Tooltip>}>
                    <button
                        onClick={() => deleteCategory(category.id)}
                        className='btn text-danger btn-act'
                        data-toggle='modal'
                    >
                        <i className='fa-solid fa-trash'></i>
                    </button>
                </OverlayTrigger>
            </td>

            <Modal className='category-modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa danh mục</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditCategory {...category} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CategoryModal;
