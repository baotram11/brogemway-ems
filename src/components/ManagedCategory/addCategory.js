import { Form, Button } from 'react-bootstrap';

import { CategoryContext } from '../../contexts/categoryContext';
import { useContext, useState } from 'react';

const AddCategory = () => {
    const { addCategory } = useContext(CategoryContext);

    const [newCategory, setNewCategory] = useState();

    const onInputChange = (e) => {
        setNewCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategory(newCategory);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type='text'
                    placeholder='Tên danh mục *'
                    name='name'
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <div className='d-flex justify-content-center'>
                <Button className='mt-4 text-center' variant='success' type='submit' block>
                    Thêm mới
                </Button>
            </div>
        </Form>
    );
};

export default AddCategory;
