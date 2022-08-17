import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/slices/authSlice';
import {
	addNewProduct,
	deleteProductByProID,
	fetchProducts,
	selectAllProducts,
	selectStatusList,
	updateProductByProID,
} from '../store/slices/productSlice';

import AuthContext from './authContext';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
	const dispatch = useDispatch();
	const { authToken } = useContext(AuthContext);
	const currUser = useSelector(selectCurrentUser);

	const allProducts = useSelector(selectAllProducts);
	const statusList = useSelector(selectStatusList);
	// const errorMessage = useSelector(selectErrorMessage);

	const [products, setProducts] = useState([]);
	const [accessToken, setAccessToken] = useState(authToken);

	useEffect(() => {
		if (statusList !== 'succeeded') {
			dispatch(fetchProducts());
		}
	}, [statusList, dispatch, allProducts]);

	useEffect(() => {
		if (allProducts) {
			setProducts(allProducts);
		}
	}, [allProducts]);

	useEffect(() => {
		if (!authToken && currUser) {
			setAccessToken(currUser.accessToken);
		}
	}, [currUser, authToken]);

	useEffect(() => {
		setProducts(JSON.parse(localStorage.getItem('products')));
	}, []);

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products));
	});

	const sortedProducts = products;

	const addProduct = (newProduct) => {
		setProducts([
			...products,
			{
				ProID: products.length + 1,
				ProName: newProduct.ProName,
				Price: newProduct.Price,
				Description: newProduct.Description,
				CatID: newProduct.CatID,
			},
		]);
		dispatch(
			addNewProduct({
				accessToken: accessToken,
				newProduct: {
					ProID: products.length + 1,
					ProName: newProduct.ProName,
					Price: newProduct.Price,
					Description: newProduct.Description,
					CatID: newProduct.CatID,
				},
			})
		);
	};

	const deleteProduct = (id) => {
		setProducts(products.filter((product) => product.ProID !== id));
		dispatch(
			deleteProductByProID({
				accessToken: accessToken,
				ProID: id,
			})
		);
	};

	const updateProduct = (id, updatedProduct) => {
		setProducts(products.map((product) => (product.ProID === id ? updatedProduct : product)));
		dispatch(
			updateProductByProID({
				accessToken: accessToken,
				ProID: id,
				update: updatedProduct,
			})
		);
	};

	return (
		<ProductContext.Provider value={{ sortedProducts, addProduct, deleteProduct, updateProduct }}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
