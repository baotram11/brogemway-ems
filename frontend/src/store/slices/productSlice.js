import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/products/';

export const fetchProductByID = createAsyncThunk(
    'products/fetchProductByID',
    async (id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get(apiUrl + id);
            return [...response.data];
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

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
    name: 'product',
    initialState: {
        allProducts: [],
        product: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        statusList: 'idle',
        errorMessage: null,
    },
    reducers: {},
    extraReducers: (builder) => {
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
    },
});

export const selectAllProducts = (state) => state.product.allProducts;
export const selectProduct = (state) => state.product.product;

export const selectStatusList = (state) => state.product.statusList;
export const selectStatus = (state) => state.product.status;

export const selectErrorMessage = (state) => state.product.errorMessage;

export default productSlice.reducer;
