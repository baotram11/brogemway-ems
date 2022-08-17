import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { ProductContext } from '../../contexts/productContext';
import AddProduct from './addProduct';
import Pagination from '../../utils/pagination';
import ProductModal from './ProductModal';

const ManagedProduct = () => {
	const { sortedProducts } = useContext(ProductContext);

	const [showAlert, setShowAlert] = useState(false);
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(10);

	const handleShowAlert = () => {
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 2000);
	};

	useEffect(() => {
		handleClose();

		return () => {
			handleShowAlert();
		};
	}, [sortedProducts]);

	console.log(sortedProducts);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
	const totalPagesNum = Math.ceil(sortedProducts.length / productsPerPage);

	console.log(currentProducts);

	return (
		<div className='managed-product'>
			<div className='table-title'>
				<div className='row'>
					<div className='col-sm-6'>
						<h2>
							Quản lý <b>Sản phẩm</b>
						</h2>
					</div>
					<div className='col-sm-6'>
						<Button onClick={handleShow} className='btn btn-success' data-toggle='modal'>
							<i className='fa-solid fa-circle-plus'></i> <span>Thêm sản phẩm</span>
						</Button>
					</div>
				</div>
			</div>

			<Alert show={showAlert} variant='success'>
				Danh sách đã được cập nhật thành công!
			</Alert>

			<table className='table table-striped table-hover'>
				<thead>
					<tr>
						<th className='col-1' style={{ width: '134px' }}>
							Mã sản phẩm
						</th>
						<th>Tên sản phẩm</th>
						<th>Giá tiền</th>
						<th>Phân loại</th>
						<th style={{ paddingLeft: '43px' }}></th>
					</tr>
				</thead>
				<tbody>
					{currentProducts.map((product) => (
						<tr key={product.ProID}>
							<ProductModal product={product} />
						</tr>
					))}
				</tbody>
			</table>

			<Pagination
				pages={totalPagesNum}
				setCurrentPage={setCurrentPage}
				currentRows={currentProducts}
				sortedRows={sortedProducts}
			/>

			<Modal size='lg' show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Thêm sản phẩm mới</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddProduct />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ManagedProduct;
