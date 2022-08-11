import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/categories/';

export const fetchCategories = createAsyncThunk(
    'accounts/fetchCategories',
    async () => {
        try {
            console.log('CALL API: ' + apiUrl);
            const response = await axios.get(apiUrl);
            return [...response.data];
        } catch (error) {
            return error.message;
        }
    }
);

export const fetchProductsByCatID = createAsyncThunk(
    'accounts/fetchProductsByCatID',
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

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        allCategories: [],
        products: null,
        status_Pros: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        status_Cats: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        errorCats: null,
        errorPros: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        //fetchCategories
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

        // fetchProductsByCatID
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
    },
});

export const selectAllCategories = (state) => state.category.allCategories;
export const selectProducts = (state) => state.category.products;

export const selectStatusCats = (state) => state.category.status_Cats;
export const selectStatusPros = (state) => state.category.status_Pros;

export const selectErrorCats = (state) => state.category.errorCats;
export const selectErrorPros = (state) => state.category.errorPros;

export default categorySlice.reducer;
