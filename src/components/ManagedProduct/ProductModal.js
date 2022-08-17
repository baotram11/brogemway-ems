import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal, Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { ProductContext } from '../../contexts/productContext';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../store/slices/categorySlice';
import { CurrencyConverter } from '../../utils/currencyConverter';

const ProductModal = ({ product }) => {
	const navigate = useNavigate();
	const { deleteProduct } = useContext(ProductContext);

	const allCategories = useSelector(selectAllCategories);

	const handleShowConfirm = () => setShowConfirm(true);
	const handleCloseConfirm = () => setShowConfirm(false);

	const [showConfirm, setShowConfirm] = useState(false);

	const handleDelete = () => {
		deleteProduct(product.ProID);
	};

	const handleViewDetail = () => {
		console.log('View Detail');
		return navigate(`/products/${product.ProID}`);
	};

	useEffect(() => {
		handleCloseConfirm();
	}, [product]);

	return (
		<>
			<td>{product.ProID}</td>
			<td>{product.ProName}</td>
			<td>{CurrencyConverter(product.Price)}</td>
			<td>{allCategories[product.CatID - 1].CatName}</td>
			<td>
				<OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Xem chi tiết</Tooltip>}>
					<button
						onClick={handleViewDetail}
						className='btn text-success btn-act'
						data-toggle='modal'>
						<i className='fa-solid fa-circle-info'></i>
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

export default ProductModal;
