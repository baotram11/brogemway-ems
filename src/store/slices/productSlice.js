import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/products/';

export const fetchProductByID = createAsyncThunk(
	'product/fetchProductByID',
	async (id = null, { rejectWithValue }) => {
		try {
			console.log('CALL API: ' + apiUrl + id);
			const response = await axios.get(apiUrl + id);
			return [...response.data];
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
	try {
		console.log('CALL API: ' + apiUrl);
		const response = await axios.get(apiUrl);
		console.log(response.data);
		return [...response.data];
	} catch (error) {
		return error.message;
	}
});

export const addNewProduct = createAsyncThunk('product/addNewProduct', async (data, { rejectWithValue }) => {
	try {
		console.log('CALL API: ' + apiUrl);

		const response = await axios.post(apiUrl, data.newProduct, {
			headers: {
				token: `Bearer ${data.accessToken}`,
			},
		});
		console.log(response);

		if (response.status < 200 || response.status >= 300) {
			return rejectWithValue(response.data);
		}

		return response.data;
	} catch (error) {
		console.log(error.response);
		if (error.response.status === 422) return rejectWithValue('Sản phẩm đã tồn tại!');
		return rejectWithValue(error.message);
	}
});

export const deleteProductByProID = createAsyncThunk(
	'product/deleteProductByProID',
	async (data, { rejectWithValue }) => {
		try {
			console.log('CALL API: ' + apiUrl);

			const response = await axios.delete(apiUrl + data.ProID, {
				headers: {
					token: `Bearer ${data.accessToken}`,
				},
			});
			console.log(response);

			if (response.status < 200 || response.status >= 300) {
				return rejectWithValue(response.data);
			}

			return response.data;
		} catch (error) {
			console.log(error.response);
			return rejectWithValue(error.message);
		}
	}
);

export const updateProductByProID = createAsyncThunk(
	'product/updateProductByProID',
	async (data, { rejectWithValue }) => {
		try {
			console.log('CALL API: ' + apiUrl);

			const response = await axios.patch(apiUrl + data.ProID, data.update, {
				headers: {
					token: `Bearer ${data.accessToken}`,
				},
			});
			console.log(response);

			if (response.status < 200 || response.status >= 300) {
				return rejectWithValue(response.data);
			}

			return response.data;
		} catch (error) {
			console.log(error.response);
			return rejectWithValue(error.message);
		}
	}
);

export const productSlice = createSlice({
	name: 'product',
	initialState: {
		allProducts: [],
		product: [],
		status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		statusList: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		errorMessage: null,

		status_Add: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		newProduct: null,
		errorAdd: null,

		status_Delete: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		errorDelete: null,

		status_Update: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		errorUpdate: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		// fetchProducts
		builder.addCase(fetchProducts.pending, (state, action) => {
			state.statusList = 'loading';
		});

		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.statusList = 'succeeded';
			state.allProducts = action.payload;
		});

		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.statusList = 'failed';
			state.errorMessage = action.error.message;
		});

		//fetchProductByID
		builder.addCase(fetchProductByID.pending, (state, action) => {
			state.status = 'loading';
		});

		builder.addCase(fetchProductByID.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.product = action.payload;
		});

		builder.addCase(fetchProductByID.rejected, (state, action) => {
			state.status = 'failed';
			state.errorMessage = action.payload;
		});

		// product/addNewProduct
		builder.addCase(addNewProduct.pending, (state) => {
			state.status_Add = 'loading';
		});
		builder.addCase(addNewProduct.fulfilled, (state, action) => {
			state.status_Add = 'succeeded';
			state.newCategory = action.payload;
		});
		builder.addCase(addNewProduct.rejected, (state, action) => {
			state.status_Add = 'failed';
			state.errorAdd = action.payload;
		});

		// product/deleteProductByProID
		builder.addCase(deleteProductByProID.pending, (state) => {
			state.status_Delete = 'loading';
		});
		builder.addCase(deleteProductByProID.fulfilled, (state, action) => {
			state.status_Delete = 'succeeded';
		});
		builder.addCase(deleteProductByProID.rejected, (state, action) => {
			state.status_Delete = 'failed';
			state.errorAdd = action.payload;
		});

		// product/updateProductByProID
		builder.addCase(updateProductByProID.pending, (state) => {
			state.status_Update = 'loading';
		});
		builder.addCase(updateProductByProID.fulfilled, (state, action) => {
			state.status_Update = 'succeeded';
		});
		builder.addCase(updateProductByProID.rejected, (state, action) => {
			state.status_Update = 'failed';
			state.errorUpdate = action.payload;
		});
	},
});

export const selectAllProducts = (state) => state.product.allProducts;
export const selectProduct = (state) => state.product.product;

export const selectStatusList = (state) => state.product.statusList;
export const selectStatus = (state) => state.product.status;

export const selectErrorMessage = (state) => state.product.errorMessage;

export const selectStatusAdd = (state) => state.category.status_Add;
export const selectNewProduct = (state) => state.category.newProduct;
export const selectErrorAdd = (state) => state.category.errorAdd;

export const selectStatusDelete = (state) => state.category.status_Delete;
export const selectErrorDelete = (state) => state.category.errorDelete;

export const selectStatusUpdate = (state) => state.category.status_Update;
export const selectErrorUpdate = (state) => state.category.errorUpdate;

export default productSlice.reducer;
