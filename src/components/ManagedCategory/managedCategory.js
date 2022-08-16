import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { CategoryContext } from '../../contexts/categoryContext';
import CategoryModal from './categoryModal';
import AddCategory from './addCategory';
import Pagination from '../../utils/pagination';

const ManagedCategory = () => {
    const { sortedCategories } = useContext(CategoryContext);

    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [categoriesPerPage] = useState(5);

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
    }, [sortedCategories]);

    console.log(sortedCategories);

    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = sortedCategories.slice(indexOfFirstCategory, indexOfLastCategory);
    const totalPagesNum = Math.ceil(sortedCategories.length / categoriesPerPage);

    return (
        <div className='managed-category'>
            <div className='table-title'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h2>
                            Quản lý <b>Danh mục</b>
                        </h2>
                    </div>
                    <div className='col-sm-6'>
                        <Button onClick={handleShow} className='btn btn-success' data-toggle='modal'>
                            <i className='fa-solid fa-circle-plus'></i> <span>Thêm danh mục</span>
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
                        <th>Mã danh mục</th>
                        <th>Tên danh mục</th>
                        <th>Tuỳ chỉnh</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCategories.map((category) => (
                        <tr key={category.CatID}>
                            <CategoryModal category={category} />
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination
                pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentRows={currentCategories}
                sortedRows={sortedCategories}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm danh mục</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddCategory />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ManagedCategory;
