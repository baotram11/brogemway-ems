import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/products/';

export const getAllProducts = createAsyncThunk(
    'products/all',
    async (data, { rejectWithValue }) => {
        const response = await axios.get(apiUrl);

        data = await response.data;
        console.log(data);

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(data);
        }

        return data;
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: null,
        isLoading: false,
        errorMessage: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.products = action.payload;
        });

        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    },
});

export const selectProducts = (state) => state.product.products;
export const selectLoading = (state) => state.product.isLoading;
export const selectErrorMessage = (state) => state.product.errorMessage;

export default productSlice.reducer;
