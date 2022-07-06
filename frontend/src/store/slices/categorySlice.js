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

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        allCategories: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        errorMessage: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.status = 'loading';
        });

        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.allCategories = action.payload;
        });

        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed';
            state.errorMessage = action.error.message;
        });
    },
});

export const selectAllCategories = (state) => state.category.allCategories;
export const selectStatus = (state) => state.category.status;
export const selectErrorMessage = (state) => state.category.errorMessage;

export default categorySlice.reducer;
