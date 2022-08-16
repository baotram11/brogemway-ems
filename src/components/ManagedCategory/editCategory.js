import { Form, Button } from 'react-bootstrap';

import { CategoryContext } from '../../contexts/categoryContext';
import { useContext, useState } from 'react';

const EditCategory = (props) => {
    const category = props;

    const id = category._id;

    const [catName, setCatName] = useState(category.CatName);

    const { updateCategory } = useContext(CategoryContext);

    const updatedCategory = { catName };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCategory(id, updatedCategory);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Name *'
                        name='name'
                        value={catName}
                        onChange={(e) => setCatName(e.target.value)}
                        required
                        width={'100%'}
                    />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <Button className='mt-4 text-center' variant='success' type='submit' block>
                        Thay đổi
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default EditCategory;
