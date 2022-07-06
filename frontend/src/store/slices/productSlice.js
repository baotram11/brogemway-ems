import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/products/';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const response = await axios.get(apiUrl);
            return [...response.data];
        } catch (error) {
            return error.message;
        }
    }
);

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        errorMessage: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'loading';
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.allProducts = action.payload;
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.errorMessage = action.error.message;
        });
    },
});

export const selectAllProducts = (state) => state.product.allProducts;
export const selectStatus = (state) => state.product.status;
export const selectErrorMessage = (state) => state.product.errorMessage;

export default productSlice.reducer;
