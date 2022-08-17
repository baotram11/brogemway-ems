import { Form, Button } from 'react-bootstrap';

import { Editor } from '@tinymce/tinymce-react';

import { ProductContext } from '../../contexts/productContext';
import { useContext, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../store/slices/categorySlice';

const TINY_API_KEY = 'k24nz30cf3gjs50204ex4s6pi5wyll3m2qyffv64zathzntm';

const AddProduct = () => {
	const { addProduct } = useContext(ProductContext);

	const editorRef = useRef(null);

	const [newProduct, setNewProduct] = useState({
		ProID: '',
		ProName: '',
		Price: '',
		CatID: '',
	});
	const allCategories = useSelector(selectAllCategories);

	const { ProID, ProName, Price, CatID } = newProduct;

	const onInputChange = (e) => {
		console.log(e.target);
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value });

		console.log(newProduct);
	};
	const handleSelected = (e) => {
		console.log(e.target.value);
		var value = allCategories.filter((item) => {
			return item.CatName === e.target.value;
		});
		setNewProduct({ ...newProduct, [e.target.name]: value[0].CatID });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addProduct({ ...newProduct, Description: editorRef.current.getContent() });
	};

	return (
		<Form className='add-product' onSubmit={handleSubmit}>
			<Form.Group>
				<label className='input-label'>Tên sản phẩm</label>
				<Form.Control
					type='text'
					placeholder='Tên sản phẩm *'
					name='ProName'
					onChange={(e) => onInputChange(e)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<label className='input-label'>Giá tiền</label>

				<Form.Control
					type='number'
					placeholder='Giá tiền *'
					name='Price'
					value={Price}
					onChange={(e) => onInputChange(e)}
					required
				/>
			</Form.Group>
			<Form.Group>
				<label className='input-label'>Mô tả sản phẩm</label>

				<Editor
					apiKey={TINY_API_KEY}
					onInit={(evt, editor) => (editorRef.current = editor)}
					initialValue='<p>Mô tả chất liệu, hình dáng, kích thước và thương hiệu của sản phẩm</p>'
					init={{
						height: 350,
						menubar: false,
						plugins: [
							'advlist',
							'autolink',
							'lists',
							'link',
							'image',
							'charmap',
							'preview',
							'anchor',
							'searchreplace',
							'visualblocks',
							'code',
							'fullscreen',
							'insertdatetime',
							'media',
							'table',
							'code',
							'help',
							'wordcount',
						],
						toolbar:
							'undo redo | blocks | ' +
							'bold italic forecolor | alignleft aligncenter ' +
							'alignright alignjustify | bullist numlist outdent indent | ' +
							'removeformat | help',
						content_style: 'body { font-family:Quicksan,Roboto,sans-serif; font-size:14px }',
					}}
				/>
			</Form.Group>

			<label htmlFor='category' className='form-label'>
				Phân loại (Chọn 1 danh mục):
			</label>
			<select className='form-select' id='category' name='CatID' onChange={handleSelected}>
				<option key={0}>---</option>
				{allCategories.map((category) => (
					<option key={category.CatID}>{category.CatName}</option>
				))}
			</select>
			<br />

			<div className='d-flex justify-content-center'>
				<Button className='mt-4 text-center' variant='success' type='submit' block>
					Thêm mới
				</Button>
			</div>
		</Form>
	);
};

export default AddProduct;
