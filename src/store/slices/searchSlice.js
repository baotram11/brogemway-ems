import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/search';

export const searchProByName = createAsyncThunk(
    'search/searchProByName',
    async (queryWords) => {
        try {
            console.log('CALL API: ' + apiUrl + '/product?q=' + queryWords);

            const response = await axios.get(
                apiUrl + '/product?q=' + queryWords
            );
            console.log(response);

            return [...response.data];
        } catch (error) {
            console.log(error.response);
            return error.message;
        }
    }
);

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        statusPro: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'

        listProducts: null,

        errorPro: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // search/searchProByName
        builder.addCase(searchProByName.pending, (state) => {
            state.statusPro = 'loading';
        });
        builder.addCase(searchProByName.fulfilled, (state, action) => {
            state.statusPro = 'succeeded';
            state.listProducts = action.payload;
        });
        builder.addCase(searchProByName.rejected, (state, action) => {
            state.statusPro = 'failed';
            state.errorPro = action.payload.data;
        });
    },
});

export const selectStatusPro = (state) => state.search.statusPro;
export const selectListProducts = (state) => state.search.listProducts;
export const selectErrorPro = (state) => state.search.errorPro;

export default searchSlice.reducer;
