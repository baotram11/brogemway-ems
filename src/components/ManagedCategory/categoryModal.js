import { useContext, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { CategoryContext } from '../../contexts/categoryContext';
import EditCategory from './editCategory';

const CategoryModal = ({ category }) => {
	const { deleteCategory } = useContext(CategoryContext);

	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const handleShowConfirm = () => setShowConfirm(true);
	const handleCloseConfirm = () => setShowConfirm(false);

	const [showConfirm, setShowConfirm] = useState(false);

	const handleDelete = () => {
		deleteCategory(category.CatID);
	};

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
						onClick={handleShowConfirm}
						className='btn text-danger btn-act'
						data-toggle='modal'>
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

			<Modal className='confirm-modal' show={showConfirm} onHide={handleCloseConfirm}>
				<Modal.Header closeButton>
					<Modal.Title>Xác nhận</Modal.Title>
				</Modal.Header>
				<Modal.Body>Bạn chắc chắn muốn xoá danh mục này?</Modal.Body>
				<Modal.Footer>
					<button onClick={handleDelete} className='btn btn-success' data-toggle='modal'>
						Đồng ý
					</button>
                    <button onClick={handleCloseConfirm} className='btn btn-secondary' data-toggle='modal'>
						Huỷ
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CategoryModal;
