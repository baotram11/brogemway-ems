import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/categories/';

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
	try {
		console.log('CALL API: ' + apiUrl);
		const response = await axios.get(apiUrl);
		return [...response.data];
	} catch (error) {
		return error.message;
	}
});

export const fetchProductsByCatID = createAsyncThunk(
	'category/fetchProductsByCatID',
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

export const addNewCategory = createAsyncThunk(
	'category/addNewCategory',
	async (data, { rejectWithValue }) => {
		try {
			console.log('CALL API: ' + apiUrl);

			const response = await axios.post(apiUrl, data.newCategory, {
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
			if (error.response.status === 422) return rejectWithValue('Danh mục đã tồn tại!');
			return rejectWithValue(error.message);
		}
	}
);

export const deleteCategoryByCatID = createAsyncThunk(
	'category/deleteCategoryByCatID',
	async (data, { rejectWithValue }) => {
		try {
			console.log('CALL API: ' + apiUrl);

			const response = await axios.delete(apiUrl + data.CatID, {
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

export const updateCategoryByCatID = createAsyncThunk(
	'category/updateCategoryByCatID',
	async (data, { rejectWithValue }) => {
		try {
			console.log('CALL API: ' + apiUrl);

			const response = await axios.patch(apiUrl + data.CatID, data.update, {
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

export const categorySlice = createSlice({
	name: 'category',
	initialState: {
		allCategories: [],
		products: null,
		status_Pros: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		status_Cats: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		errorCats: null,
		errorPros: null,

		status_Add: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		newCategory: null,
		errorAdd: null,

		status_Delete: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		errorDelete: null,

		status_Update: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		errorUpdate: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		// category/fetchCategories
		builder.addCase(fetchCategories.pending, (state, action) => {
			state.status_Cats = 'loading';
		});

		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.status_Cats = 'succeeded';
			state.allCategories = action.payload;
		});

		builder.addCase(fetchCategories.rejected, (state, action) => {
			state.status_Cats = 'failed';
			state.errorCats = action.error.message;
		});

		// category/fetchProductsByCatID
		builder.addCase(fetchProductsByCatID.pending, (state, action) => {
			state.status_Pros = 'loading';
		});

		builder.addCase(fetchProductsByCatID.fulfilled, (state, action) => {
			state.status_Pros = 'succeeded';
			state.products = action.payload;
		});

		builder.addCase(fetchProductsByCatID.rejected, (state, action) => {
			state.status_Pros = 'failed';
			state.errorPros = action.error.message;
		});

		// category/addNewCategory
		builder.addCase(addNewCategory.pending, (state) => {
			state.status_Add = 'loading';
		});
		builder.addCase(addNewCategory.fulfilled, (state, action) => {
			state.status_Add = 'succeeded';
			state.newCategory = action.payload;
		});
		builder.addCase(addNewCategory.rejected, (state, action) => {
			state.status_Add = 'failed';
			state.errorAdd = action.payload;
		});

		// category/deleteCategoryByCatID
		builder.addCase(deleteCategoryByCatID.pending, (state) => {
			state.status_Delete = 'loading';
		});
		builder.addCase(deleteCategoryByCatID.fulfilled, (state, action) => {
			state.status_Delete = 'succeeded';
		});
		builder.addCase(deleteCategoryByCatID.rejected, (state, action) => {
			state.status_Delete = 'failed';
			state.errorAdd = action.payload;
		});

		// category/updateCategoryByCatID
		builder.addCase(updateCategoryByCatID.pending, (state) => {
			state.status_Update = 'loading';
		});
		builder.addCase(updateCategoryByCatID.fulfilled, (state, action) => {
			state.status_Update = 'succeeded';
		});
		builder.addCase(updateCategoryByCatID.rejected, (state, action) => {
			state.status_Update = 'failed';
			state.errorUpdate = action.payload;
		});
	},
});

export const selectAllCategories = (state) => state.category.allCategories;
export const selectProducts = (state) => state.category.products;

export const selectStatusCats = (state) => state.category.status_Cats;
export const selectStatusPros = (state) => state.category.status_Pros;

export const selectErrorCats = (state) => state.category.errorCats;
export const selectErrorPros = (state) => state.category.errorPros;

export const selectStatusAdd = (state) => state.category.status_Add;
export const selectNewCategory = (state) => state.category.newCategory;
export const selectErrorAdd = (state) => state.category.errorAdd;

export const selectStatusDelete = (state) => state.category.status_Delete;
export const selectErrorDelete = (state) => state.category.errorDelete;

export const selectStatusUpdate = (state) => state.category.status_Update;
export const selectErrorUpdate = (state) => state.category.errorUpdate;

export default categorySlice.reducer;
